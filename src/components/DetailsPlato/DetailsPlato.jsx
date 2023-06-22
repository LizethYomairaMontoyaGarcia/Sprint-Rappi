import React from "react";
import {
  Div,
  DivDiv,
  ImgProducts,
  P,
  PPrice,
} from "../details/DetailsProductsStyled";

const infoSelectedDish = JSON.parse(sessionStorage.getItem("selectedPlato"));

const DetailsPlato = () => {
  return (
    <div>
      <Div>
        {infoSelectedDish.menu.map((menuItem) => (
          <DivDiv key={menuItem.id}>
            <ImgProducts src={menuItem.img} alt="" />
            <div>
              <P>{menuItem.name}</P>
              <PPrice>${menuItem.price}</PPrice>
            </div>
          </DivDiv>
        ))}
      </Div>
    </div>
  );
};

export default DetailsPlato;
