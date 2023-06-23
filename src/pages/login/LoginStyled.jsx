import styled from "styled-components";

export const Form = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Div = styled.div`
  width: 100%;
  box-sizing: border-box;
  h1 {
    font-weight: 700;
    margin-bottom: 45px;
  }

  @media screen and (max-width: 426px) {
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 10px 0 10px;
  p {
    margin-bottom: 20px;
    margin-top: -10px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  height: 45px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  margin-bottom: 20px;
`;

export const Action = styled.div`
  position: absolute;
  top: 160%;
  right: 10px;
  left: 10px;
  button {
    color: #000;
    font-size: 1.2rem;
    background: #fcde33;
    border: none;
    border-radius: 0.2em;
  }
`;

export const Click = styled.div`
  text-align: center;
  font-size: 1rem;
  margin-top: 25px;
`;
export const DivButtonGoggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 3% 0;
  border-radius: 10px;
  background: #fcde33;
  height: 45px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const ButtonGoggle = styled.button`
  color: #000;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.2em;
`;
