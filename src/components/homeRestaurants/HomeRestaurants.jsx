import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../js/actions/userActions";
import Button from "../buttons/Buttons";
import { getRestaurants } from "../../services/getRestaurants";
import Stars from "../../img/estrellas.png";
import {
  InfoResta,
  Container,
  ImgResta,
  H1,
  Qualification,
  DivHomeRestaurants,
  DivImages,
  Buttons,
  Avatar,
  NameAvatar,
  DivNameAvatar,
} from "./HomeRestaurantsStyled";
import Special from "../../img/special.jpg";
import Parcel from "../../img/ecomienda.jpg";
import { useNavigate } from "react-router-dom";

const HomeRestaurants = () => {
  const dispatch = useDispatch();
  const [restaurantes, setRestaurantes] = useState([]);

  const { user } = useSelector((store) => store.user);
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    const restaurantsRappi = async () => {
      try {
        const data = await getRestaurants();
        setRestaurantes(data);
      } catch (error) {
        console.error("Error al obtener los restaurantes", error);
      }
    };
    restaurantsRappi();
  }, []);

  const handleClickRestaurantsRappi = (restaurant) => {
    sessionStorage.setItem("selectedRestaurants", JSON.stringify(restaurant));
    navigate("/details");
  };

  return (
    <DivHomeRestaurants>
      <div>
        <DivNameAvatar>
          <Avatar src={user?.avatar} alt="Avatar" />
          <NameAvatar>{user?.name}</NameAvatar>
          <Buttons onClick={() => dispatch(logoutActionAsync())}>
            Cerrar Sesión
          </Buttons>
        </DivNameAvatar>
      </div>
      <DivImages>
        <img src={Special} alt="" />
        <img src={Parcel} alt="" />
      </DivImages>
      <div>
        <Button />
      </div>

      <InfoResta>
        {restaurantes.map((restaurant, key) => (
          <Container key={key}>
            <div>
              <ImgResta
                onClick={() => handleClickRestaurantsRappi(restaurant)}
                src={restaurant.image}
                alt=""
              />
              <H1>{restaurant.name}</H1>
              <p>
                <Qualification src={Stars} alt="" />
                {restaurant.Rating}
              </p>
              <p>{restaurant.horario}</p>
            </div>
          </Container>
        ))}
      </InfoResta>
    </DivHomeRestaurants>
  );
};

export default HomeRestaurants;
