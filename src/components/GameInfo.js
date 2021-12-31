import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import gameListData from "../gameList.json";

import '../Game.css';

function GameInfo() {
  const id = useParams();
  const navigate = useNavigate();

  const btnClick = () => {
    navigate('/test-page/game/main')
  };

  const gameIcon = {
    backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id.gameId].icon})`
  }

  return(
    <div className="game-info">
      <div className="game-video">
        {gameListData[id.gameId].video}
      </div>
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
      <div className="game-info">
        {gameListData[id.gameId].info}
      </div>
      <button type="button" onClick={btnClick}>Back</button>
    </div>
  );
}

export default GameInfo;