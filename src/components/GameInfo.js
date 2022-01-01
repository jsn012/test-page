import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gameListData from "../gameList.json";

function GameInfo() {
  const id = useParams().gameId;
  const navigate = useNavigate();

  const gameIcon = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].icon})` };
  const mainImg = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].img[0]}`};
  const pubDetailList = [
    <PubDetail upperLang="CN" lowerLang="cn" data={gameListData[id].pubCN} key="pubCn" />,
    <PubDetail upperLang="KR" lowerLang="kr" data={gameListData[id].pubKR} key="pubKr" />,
    <PubDetail upperLang="JP" lowerLang="jp" data={gameListData[id].pubJP} key="pubJp" />,
    <PubDetail upperLang="EN" lowerLang="en" data={gameListData[id].pubEN} key="pubEn" />
  ];

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
        <section className="app-info__section">
          <div className="app-info__dev">
            <a href="" className="company-detail__link">
              <span className="app-info__key">Developer</span>
              <span className="app-info__data">{gameListData[id].developer}</span>
            </a>
          </div>
          <div className="app-info__pub">
            <span className="app-info__key">Publisher</span>
            <div>
              {gameListData[id].pubCN == gameListData[id].pubKR 
                && gameListData[id].pubKR == gameListData[id].pubJP
                && gameListData[id].pubJP == gameListData[id].pubEN ?
                <PubAllDetail data={gameListData[id].pubCN} /> : pubDetailList
              }
            </div>
          </div>
          <div className="app-info__release">
            <span className="app-info__key">Release</span>
            <span className="app-info__data">
              {gameListData[id].releaseCn == 1 ? "CN  " : null}
              {gameListData[id].releaseKr == 1 ? "KR  " : null}
              {gameListData[id].releaseJp == 1 ? "JP  " : null}
              {gameListData[id].releaseEn == 1 ? "EN" : null}
              {gameListData[id].releaseCn != 1 && gameListData[id].releaseKr != 1 && gameListData[id].releaseJp != 1 && gameListData[id].releaseEn != 1 ?
                "-" : null}
            </span>
          </div>
        </section>
        <section className="game-info__section">
          {/* <div className="game-info__video">
            {gameListData[id].video}
          </div> */}
          <div className="game-info__info">
            {gameListData[id].info}
          </div>
        </section>
      </main>
    </div>
  );
}

function PubDetail(props) {
  return(
    <div className={`app-info__pub-detail pub-${props.lowerLang}`} style={props.data == "" ? { display: 'none' } : { display: '' }}>
      <a href="" className="company-detail__link">
        <span className="app-info__key key-pub">{props.upperLang}</span>
        <span className="app-info__data">
          {props.data}
        </span>
      </a>
    </div>
  );
}

function PubAllDetail(props) {
  return(
    <div className={`app-info__pub-detail pub-all`}>
      <a href="" className="company-detail__link">
        {/* <span className="app-info__key key-pub">ALL</span> */}
        <span className="app-info__data">
          {props.data}
        </span>
      </a>
    </div>
  );
}

export default GameInfo;