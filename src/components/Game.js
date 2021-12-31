import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import gameListData from "../gameList.json";
import GameInfo from "./GameInfo";
import GameMain from "./GameMain";

import '../Game.css';

function Game() {
  return(
    <main>
      <Routes>
        <Route path="/main" element={<GameMain />} />
        <Route path="/info/:gameId" element={<GameInfo />} />
      </Routes>
      <GameList />
    </main>
  );
}

function GameList() {
  //게임 리스트 메뉴 열고닫기
  const btnIconO =
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-up" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" strokeWidth="4" />
    </svg>;
  const btnIconC =
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" strokeWidth="4" />
    </svg>;

  const [height, setHeight] = useState(0);
  const [listOpenCheck, setListOpenCheck] = useState(false);
  const [openBtnIcon, setOpenBtnIcon] = useState(btnIconC);
  const listHeight = { maxHeight: height };

  const listOpen = () => {
    if (listOpenCheck === false) {
      setHeight(280);
      setOpenBtnIcon(btnIconO);
      setListOpenCheck(true);
    } else {
      setHeight(0);
      setOpenBtnIcon(btnIconC);
      setListOpenCheck(false);
    }
  }

  //게임 메뉴 아이템 클릭
  const navigate = useNavigate();
  let numList = [];

  const btnClick = (e) => {
    navigate(`/test-page/game/info/${e.target.value}`);
    if (listOpenCheck === true) {
      setHeight(0);
      setOpenBtnIcon(btnIconC);
      setListOpenCheck(false);
    }
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
      <ul style={listHeight}>
        {numList}
      </ul>
      <div className="list-open_btn" onClick={listOpen}>
        {openBtnIcon}
      </div>
    </div>
  );
}

export default Game;