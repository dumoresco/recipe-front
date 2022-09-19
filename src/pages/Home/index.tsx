import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonNewRecipe from "../../components/ButtonNewRecipe";
import RecipeCard from "../../components/RecipeCard";
import { Recipe } from "../../utils/RecipeProps";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/v1/recipe").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <Container>
      <header>
        <div className="total-recipes">({data.length} receitas)</div>
        <div className="filter-container">
          <input type="text" placeholder="Nome da receita" />
          <select name="categoria" id="">
            <optgroup>
              <option value="" defaultValue={"Categoria"}>
                Categoria
              </option>
            </optgroup>
          </select>
        </div>
      </header>
      <div className="recipes">
        <ButtonNewRecipe />
        {data.map((recipe: Recipe) => (
          <RecipeCard
            name={recipe.name}
            category={recipe.category}
            difficulty={recipe.difficulty}
            img_path={recipe.img_path}
            portion={recipe.portion}
            preparation_time={recipe.preparation_time}
            rating={recipe.rating}
            preparing={recipe.preparing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
