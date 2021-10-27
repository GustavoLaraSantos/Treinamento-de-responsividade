import React from "react";
import "./Medias.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Medias() {
  return (
    <div className="mediasContainer">
      <div className="mediasTitle">
        Um produto qualquer
      </div>
      <div className="mediasBody">
        <div className="mediasLeftColumn">
          <p className="mediasSubtitle">Descrição</p>
          <p className="mediasDescrição">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mediasSubtitle">Comentários</p>
          <div className="mediasComentarios">
            <div className="mediasFlexBox">
              <img src="/images/JohnDoe.jpeg" alt="perfil" className="mediasFoto" />
              <div className="mediasConteudoFlex">
                <p className="mediasNomeFlex">John Doe</p>
                <p className="mediasComentarioFlex">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </p>
              </div>
            </div>
            <div className="mediasFlexBox">
              <img src="/images/JaneDoe.jpeg" alt="perfil" className="mediasFoto" />
              <div className="mediasConteudoFlex">
                <p className="mediasNomeFlex">Jane Doe</p>
                <p className="mediasComentarioFlex">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </p>
              </div>
            </div>
          </div>
          <p className="mediasSubtitle">Deixe seu comentário</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            placeholder="Deixe seu comentário aqui"
            rows={4}
            defaultValue=""
          />
        </div>
        <div className="mediasRightColumn">
          <img src="/images/Produtos.jpeg" alt="produtos" className="mediasProdutos" />
          <p className="mediasSubtitle">Compre já por apenas X reais</p>
          <Link to="" className="mediasFakeButton">Comprar</Link>
        </div>
      </div>
    </div>
  )
}

export default Medias;