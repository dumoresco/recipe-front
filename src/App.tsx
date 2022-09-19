import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/v1/recipe")
      .then((response) => console.log(response.data));
  }, []);
  return <div className="App">teste</div>;
}

export default App;

// Codar página principal
// Codar formulario de cadastro
// Criar página da receita
// Implementar o crud
