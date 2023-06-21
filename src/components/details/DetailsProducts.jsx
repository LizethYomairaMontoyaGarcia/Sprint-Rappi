import React from "react";
import {
  Div,
  DivDetailsProducts,
  InfoResta,
  Container,
  ImgResta,
  H1,
  Qualification,
} from "./DetailsProductsStyled";
import Stars from "../../img/estrellas.png";
import { ImgProducts, DivDiv, P, PPrice} from "./DetailsProductsStyled";
import Button from "../buttons/Buttons";

const infoRestaurantsRappi = JSON.parse(
  sessionStorage.getItem("selectedRestaurants")
);

const DetailsProducts = () => {
  return (
    <DivDetailsProducts>
      <InfoResta>
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
            <ImgProducts src={menuItem.img} alt="" />
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
