import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import gameListData from "../gameList.json";

import '../Game.css';

function GameInfo() {
  const id = useParams();
  const navigate = useNavigate();

  const gameIcon = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id.gameId].icon})` };
  const mainImg = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id.gameId].img[0]}`};

  return(
    <div className="game-detail">
      <div className="game-img__cover" style={mainImg}></div>
      <div className="game-detail__header">
        <div className="game-detail__icon" style={gameIcon}>
        </div>
        <div className="game-detail__title">
          <div className="game-title title-kr">
            <h1>
              <span>{gameListData[id.gameId].titleKR}</span>
            </h1>
          </div>
          <div className="other-lang">
            <div className="game-title title-cn">
              <span>{gameListData[id.gameId].titleCN}</span>
            </div>
            <div className="game-title title-en">
              <span>{gameListData[id.gameId].titleEN}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="game-detail__main">
        <div className="game-detail__video">
          {gameListData[id.gameId].video}
        </div>
        <div className="game-detail__info">
          {gameListData[id.gameId].info}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;