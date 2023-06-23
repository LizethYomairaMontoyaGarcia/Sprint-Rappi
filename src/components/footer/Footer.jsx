import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { TbHome } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
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
          <div className="icono">
            <TbHome
              onClick={handleHomeClick}
              style={{
                color: activeIcon === "home" ? "#FFE031" : "#414141",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
            {activeIcon === "home" && <Active />}
          </div>

          <div className="icono">
            <FiSearch
              onClick={handleSearchClick}
              style={{
                color: activeIcon === "search" ? "#FFE031" : "#414141",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
            {activeIcon === "search" && <Active />}
          </div>

          <div className="icono">
            <MdOutlineHistory
              onClick={handleHistoryClick}
              style={{
                color: activeIcon === "clock" ? "#FFE031" : "#414141",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
            {activeIcon === "clock" && <Active />}
          </div>

          <div className="icono">
            <FaRegUser
              onClick={handlePanelPersonClick}
              style={{
                color: activeIcon === "panelPerson" ? "#FFE031" : "#414141",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
            {activeIcon === "panelPerson" && <Active />}
          </div>
        </DIV>
      </FooterIcone>
    </>
  );
};

export default Footer;
