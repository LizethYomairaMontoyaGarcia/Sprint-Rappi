import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import Home from "../../img/home.png";
import Lupa from "../../img/lupa.png";
import Clocck from "../../img/reloj.png";
import Persona from "../../img/person.png";
import { FooterIcone, Icono, DIV, Active } from "./FooterStyled";

const Footer = () => {
  const [activeIcon, setActiveIcon] = React.useState("");
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleSearchClick = () => {
    // navigate("/search");
    navigate("/search");
  };
  const handleHistoryClick = () => {
    navigate("/history");
  };

  const handlePanelPersonClick = () => {
    navigate("/panelPerson");
  };

  useEffect(() => {
    // Lógica para establecer el icono activo cuando cambia la ruta actual
    const currentPath = window.location.pathname;
    if (currentPath === "/home") {
      setActiveIcon("home");
    } else if (currentPath === "/search") {
      setActiveIcon("search");
    } else if (currentPath === "/clock") {
      setActiveIcon("clock");
    } else if (currentPath === "/panelPerson") {
      setActiveIcon("panelPerson");
    }
  }, []);

  return (
    <>
      <FooterIcone>
        <DIV>
          <Icono
            src={Home}
            onClick={handleHomeClick}
            className={classnames("IconoHome", {
              active: activeIcon === "home",
            })}
          />
          {activeIcon === "home" && <Active />}

          <Icono
            src={Lupa}
            onClick={handleSearchClick}
            className={classnames("IconoSearch", {
              active: activeIcon === "search",
            })}
          />
          {activeIcon === "search" && <Active />}

          <Icono
            src={Clocck}
            onClick={handleHistoryClick}
            className={classnames("IconoClock", {
              active: activeIcon === "clock",
            })}
          />
          {activeIcon === "clock" && <Active />}

          <Icono
            src={Persona}
            onClick={handlePanelPersonClick}
            className={classnames("IconoPerson", {
              active: activeIcon === "panelPerson",
            })}
          />
          {activeIcon === "panelPerson" && <Active />}
        </DIV>
      </FooterIcone>
    </>
  );
};

export default Footer;
