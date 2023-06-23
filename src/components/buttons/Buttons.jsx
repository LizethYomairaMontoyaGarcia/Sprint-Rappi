import React from "react";
import { Filters, Buttons } from "./ButtonStyleds";

const Button = () => {
  return (
    <Filters>
      <div>
        <Buttons>
          <p>Todos</p>
        </Buttons>
        <Buttons>
          <img
            src="https://img.icons8.com/?size=512&id=zcIXxtVQHg34&format=png"
            alt=""
          />
          Hamburgesas
        </Buttons>
        <Buttons>
          <img
            src="https://img.icons8.com/?size=512&id=oTyopyeAHiFU&format=png"
            alt=""
          />
          Pizzas
        </Buttons>
      </div>
    </Filters>
  );
};

export default Button;
