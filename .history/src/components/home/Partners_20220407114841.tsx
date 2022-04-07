import React from 'react';
import "./assets/partners.scss"
import {PageTitle} from "../ui/PageTitle";

import SwiperCore, {Navigation, Autoplay} from 'swiper';
import "./assets/header-slider.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'antd';
SwiperCore.use([Navigation,Autoplay]);

export function Partners() {
    const {t} = useTranslation();
    return (
        <div className="partners">
            <div className="containerr">
                <PageTitle title= {t('HAMKORLAR')}/>
                <Swiper  slidesPerView={1} spaceBetween={30}  autoplay={{
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
                        "slidesPerView": 4
                    },
                     "1401": {
                        "slidesPerView": 5
                    },
                }} loop={true} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <a target="_blank" href="https://mudofaa.uz/">
                       <Tooltip placement="top" title="mudofaa.uz">

                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src="https://vatanparvar.uz/Files/images/mv.7cb7e3f93508b087d6a2.png" alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('mv')}</p>
                            </div>
                        </div></Tooltip></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="https://milliygvardiya.uz/oz">
                       <Tooltip placement="top" title="milliygvardiya.uz">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src="https://vatanparvar.uz/Files/images/mg.20cc7d72ec1a6aa7ab91.png" alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('mg')}</p>
                            </div>
                        </div></Tooltip></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="https://iiv.uz/">
                       <Tooltip placement="top" title="iiv.uz">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src="https://vatanparvar.uz/Files/images/iiv.22f92b71185f5160fdc4.png" alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('iiv')}</p>
                            </div>
                        </div></Tooltip></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="http://yoshlar.gov.uz/uz/">
                       <Tooltip placement="top" title="yoshlar.gov.uz">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src="https://vatanparvar.uz/Files/images/uzb1.111a88e033cf19b6eede.png" alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('yi')}</p>
                            </div>
                        </div></Tooltip></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="http://minsport.uz/ru">
                       <Tooltip placement="top" title="minsport.uz">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src="https://vatanparvar.uz/Files/images/uzb1.111a88e033cf19b6eede.png" alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('os')}</p>
                            </div>
                        </div></Tooltip>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

