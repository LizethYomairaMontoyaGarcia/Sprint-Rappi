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
import { Carousel } from "antd";
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
    <>
      <DivHomeRestaurants>
        <div>
          <DivNameAvatar>
            <div>
              <Avatar src={user?.avatar} alt={user?.name} />
              <NameAvatar>{user?.name}</NameAvatar>

              <Buttons onClick={() => dispatch(logoutActionAsync("/"))}>
                Cerrar Sesión
              </Buttons>
            </div>
          </DivNameAvatar>
        </div>

        <DivImages>
          <Carousel className="carouselAutoplay" autoplay>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/a551/cda6/6f5901ae985be54c871ff39edfe14c77?Expires=1688342400&Signature=H23H8lDBzK0c1ccXt4-eWbD~Aa7BarxRaq6zIW9jdS5hjSfkjn1GCpPLR-8msXleFKanACe04DfrraPMgciKUNL8~ZPH0oE-HF0CM2~z5MQQKwCKm4t4fqGhrekRrEbwjFZZkEXPtU-1EFfzRYSfwIjREWIysH-kOToXFHCdj-FpyVVtB1cx1R3BsqsubWFvBrZm3OslwimYohHvLvmmBYb3haqFHC-QimH0dZTtADRQ00dLtrh8PYC-O-AAR88HCW8sIs5AgSJeX0JBG~CsXktBQP7e2q3ft90f3Gh68KUJHNBopAEPV474ZnfpeeUs2JBTw2ZBp4diHr1FAr08Fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div>
              <img
                className="imgGirar"
                src="https://s3-alpha-sig.figma.com/img/fd7a/842a/5953b2eb7e0d4a5abc2ce94ba5b1c2d6?Expires=1688342400&Signature=C8eQeMDla59GSbzO95d5m-4emuL-4bVhRWBBBFzz9etvNiwO6MT4SX~ElYiGSR0~NCWvV732LTCqv9~yvXws2zT6X0HTE3tSNYElRqEkDZheho-s-SgsEwmESqwCDzWJrqkXrsK8q~XwMK98xovx~icdsaMFjtpvr48iD6-UFsGFfIytuXY9wgpRsR-3wZg9hYW9~kW0~vhsXdCr12arANULOcZvAfQbeh2QPmd2Fz54GgoRaOznjf84zrCVAP4BQPZwRo1D2uQEUvVHLQfJ-H27BLhbMgd24yhFTz4tz8nUNUaD0KqiApVnBpCOtOL-rat9z4vGL7mKpwXpL2fwgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </Carousel>
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
                <p>{restaurant.horario}</p>
                <p>
                  <Qualification src={Stars} alt="" />
                  {restaurant.Rating}
                </p>
              </div>
            </Container>
          ))}
        </InfoResta>
      </DivHomeRestaurants>
    </>
  );
};

export default HomeRestaurants;
