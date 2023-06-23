import React from "react";
// import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../js/actions/userActions";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Form,
  Div,
  DivInput,
  Input,
  Action,
  Click,
  ButtonGoggle,
  DivButtonGoggle,
  DivDiv,
} from "./LoginStyled";
import { login, loginGoogle } from "../../js/actions/userActions";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../img/Logo.png";

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = (dataForm) => {
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  };

  const handleLoginGoogle = async () => {
    await dispatch(loginGoogle());
    console.log("enviado con google");
  };
  return (
    <Form onSubmit={handleSubmit(logIn)}>
      <Div>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <DivDiv>
          <h3>Iniciar Sesión</h3>
          <p>Inicie sesión o cree una cuenta para comenzar a ordenar</p>
        </DivDiv>
        <DivInput>
          <label htmlFor="email">Email:</label>
          <Input type="text" id="email" name="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </DivInput>

        <DivInput>
          <label htmlFor="password">Contraseña:</label>
          <Input
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </DivInput>

        <Action>
          <DivButtonGoggle>
            <button type="submit">Ingresar</button>
          </DivButtonGoggle>

          <DivButtonGoggle onClick={() => handleLoginGoogle()}>
            <FcGoogle style={{ fontSize: "1.7rem" }} />
            <ButtonGoggle type="button">Ingresar con Goggle</ButtonGoggle>
          </DivButtonGoggle>

          <Click>
            <p>
              ¿No tienes una Cuenta?
              <Link to="/register">Haz click aqui!</Link>
            </p>
          </Click>
        </Action>
      </Div>
    </Form>
  );
};

export default Login;
