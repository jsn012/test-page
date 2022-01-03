import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import gameListData from "../gameList.json";
import GameInfo from "./GameInfo";
import GameMain from "./GameMain";
import '../Game.css';

function Game() {
  return(
    <>
      <Routes>
        <Route path="/" element={<GameMain />} />
        <Route path="/:gameId" element={<GameInfo />} />
      </Routes>
      <GameList />
    </>
  );
}

function GameList() {
  //게임 메뉴 아이템 클릭
  const navigate = useNavigate();
  let numList = [];

  const btnClick = (e) => {
    navigate(`/game/${e.target.value}`);
    window.scrollTo({top: 0});
  };

  //게임 리스트 아이템 추가
  for (let i = 0; i < gameListData.length; i++) {
    numList.push(
      <li className="game-list_item" id={i} key={'numList' + i}>
        <button type="button" value={`${i}`} onClick={btnClick}>{gameListData[i].titleKR}</button>
      </li>
    );
  }

  return(
    <div className="game-list">
      <ul>
        {numList}
      </ul>
    </div>
  );
}

export default Game;