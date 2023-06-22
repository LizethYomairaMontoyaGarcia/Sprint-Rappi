import React from 'react'
import GifError from "../../img/404-error.gif"
import {Error404} from "./NotFoundStyled"

const NotFound = () => {
  return (
    <Error404>
        <img src={GifError} alt="error"/>
        <h1>¡La página que buscas no está disponible!</h1>
    </Error404>
  )
}

export default NotFound