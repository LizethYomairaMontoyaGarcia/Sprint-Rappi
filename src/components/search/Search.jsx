import React from "react";
import { SearchResta, DivSearch, ImgIcon } from "./SearchStyled";
import Lupa from "../../img/lupa.jpg";

const Search = () => {
  return (
    <>
      <SearchResta>
        <DivSearch>
          <ImgIcon src={Lupa} alt="" />
          <input type="text" placeholder="Busca tu plato favorito" />
        </DivSearch>
      </SearchResta>
    </>
  );
};

export default Search;
