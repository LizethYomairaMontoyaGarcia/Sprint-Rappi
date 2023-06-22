import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../js/actions/userActions";
import {
  Panel,
  ImgAvatar,
  NamePerson,
  AccountEdit,
  Payment,
  Language,
  Logout,
  Location,
  FAQ,
  Support,
} from "./PanelPersonStyled";

const PanelPerson = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log("se guardo los cambios ", user);

  return (
    <Panel>
      <ImgAvatar src={user?.avatar} alt={user?.name} />

      <NamePerson>{user?.name}</NamePerson>

      <AccountEdit>
        <a href="#">Editar Cuenta</a>
      </AccountEdit>

      <Payment>
        <a href="#">Pago</a>
      </Payment>

      <Language>
        <a href="#">Lenguaje</a>
      </Language>

      <Location>
        <a href="#">Ubicación</a>
      </Location>

      <FAQ>
        <a href="#">FAQ</a>
      </FAQ>

      <Support>
        <a href="#">Soporte</a>
      </Support>

      <Logout>
        <button onClick={() => dispatch(logoutActionAsync())}>
          Cerrar Sesión
        </button>
      </Logout>
    </Panel>
  );
};

export default PanelPerson;
