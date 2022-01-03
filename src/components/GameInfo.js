import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import gameListData from "../gameList.json";
import 'swiper/css';

function GameInfo() {
  const id = useParams().gameId;
  const navigate = useNavigate();

  const gameIcon = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].icon})` };
  const mainImg = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].img[0]}`};
  const releaseCheck = (release) => {
    if (release === 0) { return ('non-release'); }
    else if (release === 1) { return ('release-on'); }
    else if (release === 2) { return ('release-ready'); }
  }
  const pubDataCheck = (pubData) => {
    if (
      gameListData[id].pubCN === gameListData[id].pubKR &&
      gameListData[id].pubKR === gameListData[id].pubJP &&
      gameListData[id].pubJP === gameListData[id].pubEN
    ) { return ('non-pub'); }
    else { 
      if (pubData !== "") { return ('in-pub'); }
      else { return ('non-pub'); }
    }
  }
  const pubDataAllCheck = () => {
    if (
      gameListData[id].pubCN === gameListData[id].pubKR &&
      gameListData[id].pubKR === gameListData[id].pubJP &&
      gameListData[id].pubJP === gameListData[id].pubEN
    ) { return ('in-pub'); }
    else { return ('non-pub'); }
  }

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
              <PubDetail data={["CN", "cn", gameListData[id].pubCN, pubDataCheck(gameListData[id].pubCN)]} />
              <PubDetail data={["KR", "kr", gameListData[id].pubKR, pubDataCheck(gameListData[id].pubKR)]} />
              <PubDetail data={["JP", "jp", gameListData[id].pubJP, pubDataCheck(gameListData[id].pubJP)]} />
              <PubDetail data={["EN", "en", gameListData[id].pubEN, pubDataCheck(gameListData[id].pubEN)]} />
              <PubAllDetail data={gameListData[id].pubCN} style={pubDataAllCheck()} />
            </div>
          </div>
          <div className="app-info__release">
            <span className="app-info__key">Release</span>
            <span className={`app-info__data ${releaseCheck(gameListData[id].releaseCn)}`}>CN </span>
            <span className={`app-info__data ${releaseCheck(gameListData[id].releaseKr)}`}>KR </span>
            <span className={`app-info__data ${releaseCheck(gameListData[id].releaseJp)}`}>JP </span>
            <span className={`app-info__data ${releaseCheck(gameListData[id].releaseEn)}`}>EN</span>
          </div>
        </section>
        <section className="game-detail__section detail-img">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </section>
        <section className="game-detail__section">
          <header>
            <div className="section__header-title">
              <h2>소개</h2>
            </div>
          </header>
          <main>
            <div className="game-tag">
              <Swiper
                slidesPerView={'auto'}
              >
                <SwiperSlide><a>Slide 1</a></SwiperSlide>
                <SwiperSlide><a>Slide 1</a></SwiperSlide>
                <SwiperSlide><a>Slide 1</a></SwiperSlide>
                <SwiperSlide><a>Slide 1</a></SwiperSlide>
                <SwiperSlide><a>Slide 1</a></SwiperSlide>
              </Swiper>
            </div>
            <div className="game-info__info">
              {gameListData[id].info}
            </div>
          </main>
        </section>
      </main>
    </div>
  );
}

function PubDetail(props) {
  return(
    <div className={`app-info__pub-detail pub-${props.data[1]} ${props.data[3]}`}>
      <a href="" className="company-detail__link">
        <span className="app-info__key key-pub">{props.data[0]}</span>
        <span className="app-info__data">
          {props.data[2]}
        </span>
      </a>
    </div>
  );
}

function PubAllDetail(props) {
  return(
    <div className={`app-info__pub-detail pub-all ${props.style}`}>
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