import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import img4 from "./assets/image4.png";
import "./assets/partners.scss"
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import "./assets/header-slider.scss"
import { Image } from 'antd';
import logo from './assets/logo.gif'

import {Swiper, SwiperSlide} from 'swiper/react';
import img5 from "./assets/image5.png";
import img6 from "./assets/image6.png";
import { useTranslation } from 'react-i18next';
function Cooperation() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 0)
  }
  return (
    <Image.PreviewGroup>
      <div className="hamkorlik" onLoad={()=>{loaderT()}}>
      {loader?<div className="loaderG">
      <div className="befG">
  <img src={logo} alt="..."/>
  </div>
  
  </div>
  :''}
          <div className="container">
              <PageTitle title={t('XALQARO HAMKORLIK')}/>
              </div>
          <div className="partners">
            <div className='containerg'>
                <PageTitle title= {t('HAMKORLAR')}/>
                <Swiper  slidesPerView={1} spaceBetween={40}  autoplay={{
                    "delay": 4500,
                    "disableOnInteraction": false
                }} breakpoints={{
                    "670": {
                        "slidesPerView": 2
                    },
                    "960": {
                        "slidesPerView": 3
                    },
                   
                    "1400": {
                        "slidesPerView": 5
                    },
                     "1401": {
                        "slidesPerView": 6
                    },
                }} loop={true} navigation={true} className="mySwiper">
                    <SwiperSlide className='sw'>
                        
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <Image className="img"  src={img1} alt=""/>
                            </div>
                            <div>
                                <p>{t('xamt')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='sw'>
                        
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <Image className="img"  src={img2} alt=""/>
                            </div>
                            <div>
                                <p>{t('xamy')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='sw'>
                        
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <Image className="img"  src={img3} alt=""/>
                            </div>
                            <div>
                                <p>{t('xamu')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='sw'>
                        
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <Image className="img"  src={img4} alt=""/>
                            </div>
                            <div>
                                <p>{t('xami')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='sw'>
                        
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <Image className="img"  src={img5} alt=""/>
                            </div>
                            <div>
                                <p>{t('xamo')}</p>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className='sw'>
                        
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <Image className="img"  src={img6} alt=""/>
                            </div>
                            <div>
                                <p>{t('xamp')}</p>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
      </div></Image.PreviewGroup>
  );
}

export default  Cooperation;
