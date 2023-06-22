import styled from "styled-components";

export const DivDetailsProducts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  @media screen and (max-width: 375px) {
  }
`;

export const ImgFlecha = styled.img`
  transform: rotate(180deg);
  width: 20px;
  @media screen and (max-width: 375px) {
  }
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 375px) {
  }
`;

export const DivDiv = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  text-align: center;
`;

export const ImgProducts = styled.img`
  cursor: pointer;
  width: 320px;
  height: 200px;
  object-fit: cover;
  transition: 0.5s;
  margin-bottom: 10px;
  margin-top: 50px;

  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 375px) {
    padding-left: 30px;
  }
`;

export const InfoResta = styled.div`
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 50px;
  @media screen and (max-width: 375px) {
    position: absolute;
    width: 358px;
    height: 106px;
    left: 16px;
    top: 302px;
  }
`;

export const ImgResta = styled.img`
  cursor: pointer;
  width: 350px;
  height: 230px;
  object-fit: cover;
  transition: 0.5s;
  border: none;
  margin-bottom: 30px;
  margin-top: 50px;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 375px) {
    width: 150px;
    height: 100px;
  }
`;

export const Container = styled.div`
  margin-left: -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  margin-bottom: -45px;
  @media screen and (max-width: 375px) {
  }
`;

export const P = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  text-align: center;
  color: #414141;

  @media screen and (max-width: 375px) {
  }
`;

export const PPrice = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  line-height: 16px;
  text-align: center;
  color: #414141;

  @media screen and (max-width: 375px) {
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 375px) {
  }
`;

export const Qualification = styled.img`
  width: 130px;

  @media screen and (max-width: 375px) {
  }
`;
