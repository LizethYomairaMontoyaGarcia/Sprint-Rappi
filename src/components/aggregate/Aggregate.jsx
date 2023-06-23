import React, { useState, useEffect } from "react";
import { DivPayment } from "./AggregateStyled";
import { HiMinusSm } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Aggregate = () => {
  const [infoSelectedDish, setInfoSelectedDish] = useState();
  const [cantidad2, setCantidad2] = useState(0);
  const navigate = useNavigate();
  const platoData = JSON.parse(sessionStorage.getItem("platoData"));

  useEffect(() => {
    const selectedPlato = sessionStorage.getItem("selectedPlato");
    if (selectedPlato) {
      const { amount, total, img, name } = JSON.parse(selectedPlato);
      setCantidad2(amount);
      setInfoSelectedDish({ price: total, img, name });
    }
  }, []);

  const priceNumber = infoSelectedDish ? Number(infoSelectedDish.price) : 0;
  const totalAmount = platoData ? platoData.amount + cantidad2 : cantidad2;

  const handleMinus = () => {
    if (cantidad2 > 0) {
      setCantidad2(cantidad2 - 1);
    }
  };

  const handlePlus = () => {
    setCantidad2(cantidad2 + 1);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div style={{ marginTop: "15rem" }}>
      <DivPayment>
        <div className="titleNewOrder">
          <p>Nueva orden</p>
        </div>
        <p>Entregar a</p>

        <div>
          <div className="containInfo">
            <div className="platoComprar">
              <img src={infoSelectedDish && infoSelectedDish.img} alt="" />
              <div className="contador">
                <button onClick={handleMinus}>
                  <HiMinusSm />
                </button>
                <span style={{ fontSize: "1.4rem" }}>{totalAmount}</span>
                <button onClick={handlePlus}>
                  <BiPlus />
                </button>
              </div>
              <div className="name">
                <p>{infoSelectedDish && infoSelectedDish.name}</p>
              </div>
            </div>
            <div className="price">
              <span>{cantidad2 * priceNumber}</span>
            </div>
          </div>
        </div>
        <div className="input">
          <p>Nota</p>
          <input type="text" placeholder="Deja un comentario" />
        </div>
        <div style={{ marginTop: "20%" }}>
          <div className="prices">
            <p>Productos</p>
            <span>{cantidad2 * priceNumber}$</span>
          </div>

          <hr />
          <div className="prices">
            <p>Total</p>
            <span style={{ fontSize: "2rem" }}>
              {platoData.total * priceNumber}$
            </span>
          </div>
        </div>
        <button onClick={() => handleClick()}>Ordenar</button>

        <div>
          <p>Pago</p>
        </div>
        <div className="mediosPago">
          <span>
            <img
              src="https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Master_Card-256.png"
              alt=""
              Deliver
              toPayment
            />
          </span>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888870.png?w=740&t=st=1687390070~exp=1687390670~hmac=6335f09196f5b5fbda843caf562612eaea3d039c5050e5e9fe555d04b2ac7ef9"
              alt=""
            />
          </span>
        </div>
      </DivPayment>
    </div>
  );
};

export default Aggregate;
