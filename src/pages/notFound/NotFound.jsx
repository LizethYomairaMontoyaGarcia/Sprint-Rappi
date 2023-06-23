import React from 'react'
import GifError from "../../img/404-error.gif"
import {Error404, Buttons} from "./NotFoundStyled"

const NotFound = () => {
  return (
    <Error404>
        <img src={GifError} alt="error"/>
        <h1>¡La página que buscas no está disponible!</h1>

        <Buttons> Ir al inicio </Buttons>
    </Error404>
  )
}

export default NotFound