import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import PublicRouter from "../router/PublicRouter";
import PrivateRouter from "../router/PrivateRouter";
import Layout from "../components/login/Login";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../js/configFirebase/ConfigFirebase";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../js/actions/userActions";
import CarruselLogin from "../pages/CarruselLogin";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay info");
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
            <Route index element={<Login />} />
            <Route path="carrusel" element={<CarruselLogin />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
