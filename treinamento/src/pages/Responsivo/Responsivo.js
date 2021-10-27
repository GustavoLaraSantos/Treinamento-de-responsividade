import React from "react";
import "./Responsivo.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Responsivo() {
  return (
    <div className="responsivoContainer">
      <div className="responsivoTitle">
        Um produto qualquer
      </div>
      <div className="responsivoBody">
        <div className="responsivoLeftColumn">
          <p className="responsivoSubtitle">Descrição</p>
          <p className="responsivoDescrição">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="responsivoSubtitle">Comentários</p>
          <div className="responsivoComentarios">
            <div className="responsivoComentarioWrapper">
              <img src="/images/JohnDoe.jpeg" alt="perfil" className="responsivoFoto" />
              <div className="responsivoConteudo">
                <p className="responsivoNome">John Doe</p>
                <p className="responsivoTexto">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </p>
              </div>
            </div>
            <div className="responsivoComentarioWrapper">
              <img src="/images/JaneDoe.jpeg" alt="perfil" className="responsivoFoto" />
              <div className="responsivoConteudo">
                <p className="responsivoNome">Jane Doe</p>
                <p className="responsivoTexto">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </p>
              </div>
            </div>
          </div>
          <p className="responsivoSubtitle">Deixe seu comentário</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            placeholder="Deixe seu comentário aqui"
            rows={4}
            defaultValue=""
          />
        </div>
        <div className="responsivoCompraInfo">
          <img src="/images/Produtos.jpeg" alt="produtos" className="responsivoProdutos" />
          <p className="responsivoSubtitle">Compre já por apenas X reais</p>
          <Link to="" className="responsivoFakeButton">Comprar</Link>
        </div>
      </div>
    </div>
  )
}

export default Responsivo;