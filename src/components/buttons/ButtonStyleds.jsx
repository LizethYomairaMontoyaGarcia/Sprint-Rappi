import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  margin-top: 5px;
  div {
    display: flex;
  }
  @media screen and (max-width: 375px) {
  }
`;

export const Buttons = styled.button`
  background: #eeeeee;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  flex: 0 0 auto;
  width: 100%;
  max-width: 110px;
  height: 40px;
  margin-right: 9px;
  justify-content: center;

  /* width: 25%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: #f2f2f2;
      border-radius: 5px; */
  img {
    width: 20.8%;
    margin-right:5px;
  }
  @media screen and (max-width: 375px) {
    width: 50px;
    height: 30px;
    font-size: 10px;
  }
`;
