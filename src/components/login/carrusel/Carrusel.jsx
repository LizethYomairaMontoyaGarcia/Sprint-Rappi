import React from "react";
import Comestible from "../../../img/ComestiblesLinea.svg";
import Travel from "../../../img/PideViaje.svg";
import Maps from "../../../img/maps.svg";
import { Section, Img, P, Button } from "./CarruselStyled";
import Carousel from "react-bootstrap/Carousel";

function Carrusel() {
  return (
    <Section>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Img src={Comestible} alt="" />
          <Carousel.Caption>
            <P>
              Elige qué comer eligiendo entre una variedad de restaurantes de la
              lista.
            </P>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Img src={Maps} alt="" />
          <Carousel.Caption>
            <P>Elige dónde quieres entregar indicando en el mapa.</P>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Img src={Travel} alt="" />
          <Carousel.Caption>
            <P>Entregaremos lo antes posible</P>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Button>Siguiente</Button>
    </Section>
  );
}

export default Carrusel;
