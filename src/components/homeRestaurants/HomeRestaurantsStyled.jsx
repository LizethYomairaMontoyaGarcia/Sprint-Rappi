import styled from "styled-components";

export const DivHomeRestaurants = styled.div`
  padding-left: 10px;
  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }
`;

export const DivImages = styled.div`
  margin-top: 20px;
  .carouselAutoplay {
    div {
      height: 50vh;
      margin-right: 1%;
      border-radius: 10px;
    }
    img {
      width: 80%;
      border-radius: 10px;
    }
    .imgGirar {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }
  @media screen and (max-width: 375px) {
    width: 150px;
    height: 100px;
  }
`;

export const InfoResta = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  width: 310px;
  height: 200px;
  object-fit: cover;
  transition: 0.5s;
  border: none;
  margin-bottom: 10px;
  margin-top: 40px;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 375px) {
    width: 150px;
    height: 100px;
  }
`;

export const Container = styled.div`
  margin-left: 10px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  @media screen and (max-width: 375px) {
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 375px) {
  }
`;

export const Qualification = styled.img`
  width: 100px;

  @media screen and (max-width: 375px) {
  }
`;

export const DivNameAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  div {
    text-align: center;
  }
`;

export const Buttons = styled.button`
  background: #ffe031;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  width: 120px;
  height: 40px;
`;

export const Avatar = styled.img`
  /* border-radius: 5px;
  width: 90px;
  height: auto; */
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const NameAvatar = styled.h2`
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
`;
