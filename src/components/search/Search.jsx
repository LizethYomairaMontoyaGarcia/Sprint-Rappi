import React from "react";
import { SearchResta, DivSearch, ImgIcon } from "./SearchStyled";
import Lupa from "../../img/lupa.png";

const Search = () => {
  return (
    <>
      <SearchResta>
        <DivSearch>
          <input type="text" placeholder="Busca tu plato favorito" />
          <ImgIcon src={Lupa} alt="" />
        </DivSearch>
      </SearchResta>
    </>
  );
};

export default Search;
