import React, { useState, useEffect } from "react";
import {
  Div,
  DivDetailsProducts,
  InfoResta,
  Container,
  ImgResta,
  H1,
  Qualification,
  ImgFlecha,
} from "./DetailsProductsStyled";
import Stars from "../../img/estrellas.png";
import { ImgProducts, DivDiv, P, PPrice } from "./DetailsProductsStyled";
import Button from "../buttons/Buttons";
import Flecha from "../../img/flecha.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailsProducts = () => {
  const [selectedPlato, setSelectedPlato] = useState(null);
  const infoRestaurantsRappi = JSON.parse(
    sessionStorage.getItem("selectedRestaurants")
  );
  const navigate = useNavigate();

  const handleClickRestaurantDish = (plato) => {
    setSelectedPlato(plato);
    sessionStorage.setItem("selectedPlato", JSON.stringify(plato));
    navigate("/detailsDish");
  };

  return (
    <DivDetailsProducts>
      <InfoResta>
        <Link to="/home/">
          <ImgFlecha src={Flecha} alt="" />
        </Link>
        <section>
          <Container>
            <div>
              <ImgResta src={infoRestaurantsRappi.image} alt="" />

              <section>
                <H1>{infoRestaurantsRappi.name}</H1>
                <p>{infoRestaurantsRappi.descripcion}</p>
                <Qualification src={Stars} alt="" />
              </section>
            </div>
          </Container>
        </section>
      </InfoResta>
      <div>
        <Button />
      </div>

      <Div>
        {infoRestaurantsRappi.menu.map((menuItem) => (
          <DivDiv key={menuItem.id}>
            <ImgProducts
              onClick={() => handleClickRestaurantDish(menuItem)}
              src={menuItem.img}
              alt=""
            />
            <div>
              <P>{menuItem.name}</P>
              <PPrice>${menuItem.price}</PPrice>
            </div>
          </DivDiv>
        ))}
      </Div>
    </DivDetailsProducts>
  );
};

export default DetailsProducts;
