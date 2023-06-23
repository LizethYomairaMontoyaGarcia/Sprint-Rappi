import React from "react";
// import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import fileUpLoad from "../../services/fileUpLoad";
import { useDispatch } from "react-redux";
import { registerActionAsync } from "../../js/actions/userActions";
import { Link } from "react-router-dom";
import {
  Form,
  Div,
  DivInput,
  Input,
  Registers,
  DivSession,
} from "./registerStyles";
import { DivDiv } from "../login/LoginStyled";
import Logo from "../../img/Logo.png";

const schema = yup.object({
  name: yup.string().required("Por favor ingresar su nombre"),
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres.")
    .max(16, "La contraseña no puede contener más de 16 caracteres")
    .oneOf(
      [yup.ref("repeatPassword")],
      "Las contraseñas ingresadas no coinciden"
    ),
  repeatPassword: yup
    .string()
    .required("Este campo es obligatorio")
    .min(8, "La contraseña debe contener al menos 8 caracteres.")
    .max(16, "La contraseña no puede contener más de 16 caracteres")
    .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
  avatar: yup
    .mixed()
    .test("file", "Por favor ingrese una imagen", (value) =>
      value.length > 0 ? true : false
    ),
});

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser = async (dataForm) => {
    const avatar = await fileUpLoad(dataForm.avatar[0]);
    const newUser = {
      ...dataForm,
      avatar: avatar,
    };
    console.log(newUser);
    dispatch(registerActionAsync(newUser));
  };
  return (
    <Form onSubmit={handleSubmit(handleCreateUser)}>
      <Div>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <DivDiv>
          <h1>Crear nuevo usurio</h1>
        </DivDiv>

        <DivInput>
          <label>Nombre:</label>
          <Input type="text" name="name" {...register("name")} />
          <p>{errors.name?.message}</p>
        </DivInput>

        <DivInput>
          <label>Email:</label>
          <Input type="text" name="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </DivInput>

        <DivInput>
          <label>Contraseña:</label>
          <Input type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </DivInput>

        <DivInput>
          <label>Confirme Contraseña:</label>
          <Input type="password" {...register("repeatPassword")} />
          <p>{errors.repeatPassword?.message}</p>
        </DivInput>

        <DivInput>
          <Input type="file" {...register("avatar")} />
          <p>{errors.avatar?.message}</p>
        </DivInput>

        <Registers>
          <button type="submit">Registrarse</button>

          <DivSession>
            <p>
              ¿Ya tienes una Cuenta?
              <Link to="/"> Inicia sesion con tu cuenta!</Link>
            </p>
          </DivSession>
        </Registers>
      </Div>
    </Form>
  );
};

export default Register;
