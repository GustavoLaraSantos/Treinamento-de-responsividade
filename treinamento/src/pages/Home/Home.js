import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <p className="homeTitle" >Escolha uma página</p>
      <div className="linksWrapper" >
        <Link to="estatico" className="homeLink" >Estatico</Link>
        <Link to="responsivo" className="homeLink" >Responsivo</Link>
      </div>
      <p className="homeFooter">
        Esse site tem a única função de apresentar técnicas de responsividade,
        quaisquer problemas de design devem ser ignorados ^^
      </p>
    </div>
  )
}

export default Home;