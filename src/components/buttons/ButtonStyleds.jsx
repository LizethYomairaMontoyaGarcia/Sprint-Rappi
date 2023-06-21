import styled from "styled-components";

export const Filters = styled.div`
  display: flex;
  margin-top: 20px;
  div {
    display: flex;
  }
  @media screen and (max-width: 375px) {
  }
`;

export const Buttons = styled.button`
  cursor: pointer;
  background: #eeeeee;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  flex: 0 0 auto;
  width: 90%;
  max-width: 90px;
  height: 40px;
  margin-right: 10px;
  transition: all 1s ease;
  @media screen and (max-width: 375px) {
    width: 50px;
    height: 30px;
    font-size: 10px;
  }

  :hover {
    background: #ffe031;
  }
`;
