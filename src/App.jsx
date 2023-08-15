import { useState } from "react";

import Perfil from "./components/Perfil/Index";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className="inicio">
        <input className="input" type="text" placeholder="Digite o nome do usuário" onBlur={(e) => setNomeUsuario(e.target.value)} />
        <button className="button" type="button">
          <img className="img"  src="https://cdn-icons-png.flaticon.com/512/73/73357.png" alt="Lupa"/>
        </button>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {FormularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
