import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import PublicRouter from "../router/PublicRouter";
import PrivateRouter from "../router/PrivateRouter";
import Layout from "../components/login/Login";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../js/configFirebase/ConfigFirebase";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../js/actions/userActions";
import CarruselLogin from "../pages/CarruselLogin";
import Details from "../pages/Details";
import Searchs from "../pages/Searchs";
import DetailsDish from "../pages/DetailsDish";
import PanelPerson from "../components/panelPerson/PanelPerson";
import NotFound from "../pages/notFound/NotFound";
import AggregateDish from "../pages/AggregateDish";

export const searchParamsContext = createContext({});

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restaurantes, setRestaurantes] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay informacion");
          const logged = {
            email: userLogged.auth.currentUser.email,
            name: userLogged.auth.currentUser.displayName,
            avatar: userLogged.auth.currentUser.photoURL,
            accessToken: userLogged.auth.currentUser.accessToken,
          };
          dispatch(loginActionSync(logged));
        }
        console.log(userLogged);
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    });
  }, [user, dispatch]);

  if (loading) {
    return <Spinner animation="grow" />;
  }

  return (
    <BrowserRouter>
      <searchParamsContext.Provider
        value={{
          restaurantes,
          setRestaurantes,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
              <Route index element={<Login />} />
              <Route path="carrusel" element={<CarruselLogin />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
              <Route path="home" element={<Home />} />
              <Route path="details" element={<Details />} />
              <Route path="search" element={<Searchs />} />
              <Route path="detailsDish" element={<DetailsDish />} />
              <Route path="aggregate" element={<AggregateDish />} />
              <Route path="panelPerson" element={<PanelPerson />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </searchParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
