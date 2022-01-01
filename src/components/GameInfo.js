import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import gameListData from "../gameList.json";

function GameInfo() {
  const id = useParams().gameId;
  const navigate = useNavigate();

  const gameIcon = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].icon})` };
  const mainImg = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].img[0]}`};

  return(
    <div className="game-detail">
      <div className="game-img__cover" style={mainImg}></div>
      <header className="game-detail__header">
        <div className="game-detail__icon" style={gameIcon}>
        </div>
        <div className="game-detail__title">
          <div className="game-title title-kr">
            <h1>
              <span>{gameListData[id].titleKR}</span>
            </h1>
          </div>
          <div className="other-lang">
            <div className="game-title title-cn">
              <span>{gameListData[id].titleCN}</span>
            </div>
            <div className="game-title title-en">
              <span>{gameListData[id].titleEN}</span>
            </div>
          </div>
        </div>
      </header>
      <main className="game-detail__main">
        <section className="app-info__wrap">
          <div className="app-info__dev">
            <span>Developer</span>
            <span>{gameListData[id].developer}</span>
          </div>
          <div className="app-info__pub">
            <span>Publisher</span>
            <span>{gameListData[id].publisher}</span>
          </div>
        </section>
        <section className="game-info__wrap">
          <div className="game-info__video">
            {gameListData[id].video}
          </div>
          <div className="game-info__info">
            {gameListData[id].info}
          </div>
        </section>
      </main>
    </div>
  );
}

export default GameInfo;