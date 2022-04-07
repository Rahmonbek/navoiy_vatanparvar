import React from 'react';
import "./assets/partners.scss"
import {PageTitle} from "../ui/PageTitle";
import Gerb from "./assets/uzb1.png";
import Mv from "./assets/mv.png";
import Mg from "./assets/mg.png";
import iiv from "./assets/iiv.png";
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import "./assets/header-slider.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import { useTranslation } from 'react-i18next';
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
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src={Mv} alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('mv')}</p>
                            </div>
                        </div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="https://milliygvardiya.uz/oz">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src={Mg} alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('mg')}</p>
                            </div>
                        </div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="https://iiv.uz/">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src={iiv} alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('iiv')}</p>
                            </div>
                        </div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="http://yoshlar.gov.uz/uz/">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src={Gerb} alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('yi')}</p>
                            </div>
                        </div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a target="_blank" href="http://minsport.uz/ru">
                        <div className="swiper-slide_body">
                            <div className="slider-item_img">
                                <img src={Gerb} alt=""/>
                            </div>
                            <div>
                                <p className='partNew'>{t('os')}</p>
                            </div>
                        </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

