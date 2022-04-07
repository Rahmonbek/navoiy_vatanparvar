import React from 'react';
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import "./assets/header-slider.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import BG1 from "./assets/photo1.jpg";
import BG2 from "./assets/photo2.jpg";
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
SwiperCore.use([Navigation,Autoplay]);

  
export function HomeHeaderSlider() {
    
    const {t, i18n} = useTranslation();
    return (
        <div className="home-header">
{/*        
       <Carousel easing='linear' effect="fade" dotPosition='right' className="swiper mySwiper" autoplay>
       <div className='swiper-slide'> <div className="swiper-slide_body" style={{ height: '95vh',
  color: '#fff',
  lineHeight: '80px',
  textAlign: 'center',
 
                        background: `url(${BG1}) center center no-repeat`,
                        backgroundSize: "cover"
                    }}> <div className="swiper-slide_bg" />
                    <div className="swiper-slide_content">
                        <p className="swiper-slide_content_title">
                           {t('home_text1')} 
                        </p>
                    </div></div>
    </div>

    <div className='swiper-slide'> <div className="swiper-slide_body" style={{ height: '95vh',
  color: '#fff',
  lineHeight: '80px',
  textAlign: 'center',
 
                        background: `url(${BG2}) center center no-repeat`,
                        backgroundSize: "cover"
                    }}> <div className="swiper-slide_bg" />
                    <div className="swiper-slide_content">
                        <p className="swiper-slide_content_title">
                           {t('home_text2')} 
                        </p>
                    </div></div>
    </div>
   
   
  </Carousel>
  <div class="swiper-slide_body" style="background: url(&quot;/static/media/photo1.3d440f961e272c53ccd8.jpg&quot;) center center / cover no-repeat;"><div class="swiper-slide_bg"></div><div class="swiper-slide_content"><p class="swiper-slide_content_title">Yoshlar va fuqarolarni ma'naviy-axloqiy va harbiy-vatanparvarlik tarbiyasi, ularda vatanparvarlik, Vatanga muhabbat, mehnatga mas'uliyatli munosabat, harbiy xizmatga hurmat hissini tarbiyalash</p></div></div>
        */}
       
       
       
       
            <Swiper slidesPerView={1} spaceBetween={0}  autoplay={{
                "delay": 10000,
                "disableOnInteraction": false
            }} loop={true} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <div className="swiper-slide_body" style={{
                        background: `url(") center center no-repeat`,
                        backgroundSize: "cover"
                    }}>
                        <div className="swiper-slide_bg" />
                        <div className="swiper-slide_content">
                            <p className="swiper-slide_content_title">
                               {t('home_text1')} 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide_body" style={{
                        background: `url(${BG2}) center center no-repeat`,
                        backgroundSize: "cover"
                    }}>
                        <div className="swiper-slide_bg" />
                        <div className="swiper-slide_content">
                          <p className="swiper-slide_content_title">
                               {t('home_text1')} 
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

