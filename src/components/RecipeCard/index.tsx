import React from "react";

import { Container } from "./styles";
import star from "../../assets/star.png";
import { Recipe } from "../../utils/RecipeProps";

const RecipeCard: React.FC<Recipe> = ({
  name,
  category,
  difficulty,
  preparation_time,
  portion,
  rating,
  img_path,
}) => {
  return (
    <Container>
      <img src={img_path} alt="Recipe image" />
      <div className="recipe-info">
        <header>
          <div className="title">
            <h1>{name}</h1>
            <span>{category}</span>
          </div>
          <div className="rating">
            <img src={star} alt="Star image" />
            <span>{rating}</span>
          </div>
        </header>
        <footer>
          <p>{preparation_time} min</p>
          <p>{difficulty}</p>
          <p>{portion} porção</p>
        </footer>
      </div>
    </Container>
  );
};

export default RecipeCard;
