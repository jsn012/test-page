import React, { useLayoutEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import gameListData from "../gameList.json";
import 'swiper/css';

function GameInfo() {
  const id = useParams().gameId;
  const navigate = useNavigate();

  const gameIcon = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].icon})` };
  const mainImg = { backgroundImage: `url(${process.env.PUBLIC_URL + gameListData[id].img[0]}`};
  const releaseCheck = (release) => {
    if (release === 1) { return ('release-on'); }
    else { return ('non-release'); }
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
        <section className="game-detail__section app-info">
          <div className="app-info__dev">
            <span className="app-info__key">Developer</span>
            <a href="" className="company-detail__link">
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
          <GameDetailImg id={id}/>
        </section>
        <section className="game-detail__section">
          <header>
            <div className="section__header-title">
              <h2>소개</h2>
            </div>
          </header>
          <main>
            <div className="section__swiper game-tag no-drag">
              <Swiper slidesPerView={'auto'}>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
                <SwiperSlide><Link to="" className="game-tag__router">
                  Slide 1
                </Link></SwiperSlide>
              </Swiper>
            </div>
            <div className="game-detail__info">
              <p>{gameListData[id].info}</p>
            </div>
          </main>
        </section>
        <section className="game-detail__section game-link">
          <header>
            <div className="section__header-title">
              <h2>링크</h2>
            </div>
          </header>
          <main>
            <div className="game-link__nav">
              <div className="link-nav__wrap">
                <div className="link-nav__item">
                  <span>CN</span>
                </div>
                <div className="link-nav__item">
                  <span>KR</span>
                </div>
                <div className="link-nav__item">
                  <span>JP</span>
                </div>
                <div className="link-nav__item">
                  <span>EN</span>
                </div>
                <span className="link-nav__line"></span>
              </div>
            </div>
            <GameDetaLink id={id} />
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

function GameDetailImg(props) {
  const id = props.id;
  let imgList = [];

  useLayoutEffect(() => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.update();
    swiper.slideTo(0, 0);
  });

  for (let i = 1; i < gameListData[id].img.length; i++) {
    imgList.push(
      <SwiperSlide key={'img' + i}>
        <div className="game-detail__img">
          <img className="game-img" src={process.env.PUBLIC_URL + gameListData[id].img[i]}></img>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="section__swiper img-swiper">
      <Swiper slidesPerView={'auto'}>
        {imgList}
      </Swiper>
    </div>);
}

function GameDetaLink(props) {
  const id = props.id;

  return(
    <div className="game-link link-cn">
      <div className="download-link">
        <div className="link-button bilibili">
          <a href={gameListData[id].bilibili} target="_blank"></a>
          BiliBili
        </div>
        <div className="link-button taptap">
          <a href={gameListData[id].taptap} target="_blank"></a>
          TapTap
        </div>
        <div className="link-button app-store">
          <a href={gameListData[id].appstoreCn} target="_blank"></a>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
          </svg>
        </div>
      </div>
      <div className="official-link">
        <div className="link-button website-cn">
          <a href={gameListData[id].websiteCn}></a>
          website
        </div>
        <div className="link-button weibo">
          <a href={gameListData[id].weibo}></a>
          weibo
        </div>
        <div className="link-button bili-space">
          <a href={gameListData[id].biliSpace}></a>
          space
        </div>
      </div>
    </div>
  );
}

export default GameInfo;