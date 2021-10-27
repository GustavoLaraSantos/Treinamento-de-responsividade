import React from "react";
import "./Estatico.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Estatico() {
  return (
    <div className="estaticoContainer">
      <div className="estaticoTitle">
        Um produto qualquer
      </div>
      <div className="estaticoBody">
        <div className="estaticoLeftColumn">
          <p className="estaticoSubtitle">Descrição</p>
          <p className="estaticoDescrição">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="estaticoSubtitle">Comentários</p>
          <div className="estaticoComentarios">
            <div className="estaticoComentarioWrapper">
              <img src="/images/JohnDoe.jpeg" alt="perfil" className="estaticoFoto" />
              <div className="estaticoConteudo">
                <p className="estaticoNome">John Doe</p>
                <p className="estaticoTexto">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </p>
              </div>
            </div>
            <div className="estaticoComentarioWrapper">
              <img src="/images/JaneDoe.jpeg" alt="perfil" className="estaticoFoto" />
              <div className="estaticoConteudo">
                <p className="estaticoNome">Jane Doe</p>
                <p className="estaticoTexto">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </p>
              </div>
            </div>
          </div>
          <p className="estaticoSubtitle">Deixe seu comentário</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            placeholder="Deixe seu comentário aqui"
            rows={4}
            defaultValue=""
          />
        </div>
        <div className="estaticoRightColumn">
          <img src="/images/Produtos.jpeg" alt="produtos" className="estaticoProdutos" />
          <p className="estaticoSubtitle">Compre já por apenas X reais</p>
          <Link to="" className="estaticoFakeButton">Comprar</Link>
        </div>
      </div>
    </div>
  )
}

export default Estatico;