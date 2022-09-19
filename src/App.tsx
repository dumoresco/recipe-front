import axios from "axios";
import { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import { GlobalStyles } from "./styles";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/v1/recipe")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </>
  );
}

export default App;

// Codar página principal
// Codar formulario de cadastro
// Criar página da receita
// Implementar o crud
