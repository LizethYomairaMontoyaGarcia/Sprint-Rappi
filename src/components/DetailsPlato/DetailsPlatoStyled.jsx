import styled from "styled-components";

export const DivContador = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 3rem 1.5rem 3rem;
  button {
    border: none;
    background-color: transparent;

  }
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 0.5% 0;
    width: 40%;
    span {
      font-size: 1rem;
    }
  }
  .price {
    background-color: #ffe031;
    display: flex;
    width: 50%;
    margin-left: 3rem;
    padding: 0.5% 0;
    border-radius: 10px;
    justify-content: space-around;
 
    span {
      font-size: 1rem;
    }
  }
`;
