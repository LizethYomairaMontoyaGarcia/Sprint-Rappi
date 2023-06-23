import styled from "@emotion/styled";

export const Error404 = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffe031;

  img {
    margin-top: 50px;
    margin-bottom: 50px;
    width: 550px;
  }

  h1 {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 765px) {
    img {
      width: 350px;
    }
    h1 {
      font-size: 1.5rem;
      justify-content: center;
    }
  }
  @media screen and (max-width: 375px) {
    img {
      width: 200px;
    }
    h1 {
      font-size: 1.5rem;
      justify-content: center;
    }
  }
`;

export const Buttons = styled.button`
  background: #ffffff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  flex: 0 0 auto;
  width: 150px;
  height: 50px;
  margin-right: 10px;
`;
