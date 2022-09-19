import React from "react";

import { Container } from "./styles";
import addIcon from "../../assets/add-icon.png";

const ButtonNewRecipe: React.FC = () => {
  return (
    <Container>
      <img src={addIcon} alt="Icone de mais" />
      <span>Nova receita</span>
    </Container>
  );
};

export default ButtonNewRecipe;
