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
} from "./LoginStyled";
import { login, loginGoogle } from "../../js/actions/userActions";
import { FcGoogle } from "react-icons/fc";

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
        <h1>Iniciar sesion</h1>
        <DivInput>
          <Input type="text" id="email" name="email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <label htmlFor="email">Email:</label>
        </DivInput>

        <DivInput>
          <Input
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <label htmlFor="password">Contraseña:</label>
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
