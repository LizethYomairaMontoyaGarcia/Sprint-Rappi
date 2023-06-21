import React from "react";
// import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../js/actions/userActions";
import { Link } from "react-router-dom";
import { Form, Div, DivInput, Input, Action, Click} from "./LoginStyled";

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
          <button type="submit">ingresar</button>

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
