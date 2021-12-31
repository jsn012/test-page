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
    <div className="game-info">
      <div className="game-img_main" style={mainImg}></div>
      <div className="game-info__inner">
        <div className="game-icon" style={gameIcon}>
        </div>
        <div className="game-title">
          <div className="game-title_kr">
            {gameListData[id.gameId].titleKR}
          </div>
          <div className="game-title_cn">
            {gameListData[id.gameId].titleCN}
          </div>
          <div className="game-title_en">
            {gameListData[id.gameId].titleEN}
          </div>
        </div>
        <div className="game-video">
          {gameListData[id.gameId].video}
        </div>
        <div className="game-info">
          {gameListData[id.gameId].info}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;