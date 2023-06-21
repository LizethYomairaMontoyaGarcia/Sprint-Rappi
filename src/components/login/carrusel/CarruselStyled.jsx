import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  align-items: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 500px;
  height: auto;
  padding-bottom: 200px;
  text-align: center;

  @media screen and (max-width: 375px) {
    width: 85%;
    height: auto;
  }
`;

export const P = styled.p`
  display: flex;
  position: absolute;
  left: 22.31%;
  right: 22.31%;
  margin-top: 200px;
  bottom: 44.31%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  text-align: center;
  color: #0f0f0f;

  @media screen and (max-width: 375px) {
    position: absolute;
    left: 22.31%;
    right: 22.31%;
    top: 53.79%;
    bottom: 44.31%;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #0f0f0f;
  }
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  height: 50px;
  width: 150px;
  text-align: center;
  align-items: center;
  bottom: 7.11%;
  background: #ffe031;
  border-radius: 10px;
  font-size: 1.3rem;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  border: none;

  @media screen and (max-width: 375px) {
    background: #ffe031;
    border-radius: 10px;
    font-size: 1.3rem;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
  }
`;
