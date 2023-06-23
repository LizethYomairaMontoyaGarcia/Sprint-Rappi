import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  Div,
  DivDiv,
  ImgProducts,
  P,
  PPrice,
} from "../details/DetailsProductsStyled";
import { DivContador } from "./DetailsPlatoStyled";
import { HiMinusSm } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { cantidadPlato } from "../../js/actions/restaurantActions";

const DetailsPlato = () => {
  const [infoSelectedDish, setInfoSelectedDish] = useState("");
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedPlato = JSON.parse(sessionStorage.getItem("selectedPlato"));
    const savedData = JSON.parse(sessionStorage.getItem("platoData"));

    if (selectedPlato && savedData) {
      setInfoSelectedDish(selectedPlato);
      setAmount(savedData.amount);
    } else {
      setInfoSelectedDish(selectedPlato);
    }
  }, []);

  const priceString = infoSelectedDish.price;
  const priceNumber = Number(priceString);
  useEffect(() => {
    const platoData = { amount, total: amount * priceNumber };
    sessionStorage.setItem("platoData", JSON.stringify(platoData));
  });

  const handlePlus = () => {
    setAmount(amount + 1);
  };

  const handleMinus = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleNavigate = () => {
    dispatch(cantidadPlato(amount));
    navigate("/aggregate");
  };

  if (!infoSelectedDish) {
    return null;
  }

  return (
    <div>
      <Div>
        <DivDiv key={infoSelectedDish.id}>
          <ImgProducts src={infoSelectedDish.img} alt="" />
          <div>
            <P>{infoSelectedDish.name}</P>
            <P>{infoSelectedDish.descripcion}</P>
            <PPrice>${infoSelectedDish.price}</PPrice>
          </div>
        </DivDiv>
      </Div>
      <ul>
        {infoSelectedDish.ingredientes.map((ingrediente) => (
          <li key={ingrediente.id}>{ingrediente.ing}</li>
        ))}
      </ul>
      <DivContador>
        <div className="buttons">
          <button onClick={handleMinus}>
            <HiMinusSm />
          </button>
          <span>{amount}</span>
          <button onClick={handlePlus}>
            <BiPlus />
          </button>
        </div>

        <div onClick={handleNavigate} className="price">
          <span>Add</span>
          <span>${amount * priceNumber}</span>
        </div>
      </DivContador>
    </div>
  );
};

export default DetailsPlato;
