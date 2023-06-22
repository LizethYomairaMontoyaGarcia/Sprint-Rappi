import styled from "styled-components";

export const FooterIcone = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  transition: 0.5s;
  border-radius: 10px;
  width: 100%;
  height:50px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(255, 224, 49, 1);
  @media screen and (max-width: 375px) {
  }
`;

export const DIV = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  @media screen and (max-width: 375px) {
  }
`;

//para los iconos
export const Icono = styled.img`
  width: 30px;
  height: auto;
  /* height: 30px; */
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;

  @media screen and (max-width: 375px) {
  }
`;

export const Active = styled.div`
  position: relative;
  width: 7px;
  height: 7px;
  background-color: var(--Main-color);
  border-radius: 50%;
  top: 20px;
  left: -53%;
  @media screen and (max-width: 375px) {
  }
`;
