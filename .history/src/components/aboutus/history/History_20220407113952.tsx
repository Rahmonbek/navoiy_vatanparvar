import React, { useState } from "react";
import { PageTitle } from "../../ui/PageTitle";
import "./assets/history.scss";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img8 from "./assets/7.png";
import img7 from "./assets/8.png";
import logo from './assets/logo.gif'

import Abduqahhorov from './assets/Abduqahhorov.png'
import Batirov from './assets/Batirov.png'
import Mamedov from './assets/Mamedov.png'
import Niyazov from './assets/Niyazov.png'
import Shaxmardonov from './assets/Shaxmardonov.png'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import {Row, Col} from "antd"
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { useTranslation } from 'react-i18next';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
SwiperCore.use([Navigation, Autoplay]);

function History() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 0)
  }
  return (
    <div className="history" onLoad={()=>{loaderT()}}>
    {loader?<div className="loaderG">
    <div className="befG">
<img src="https://vatanparvar.uz/static/media/logo.b738048fbb88a43a64ff.gif" alt="..."/>
</div>

</div>
:''}
      <div className="container">
        {" "}
        <PageTitle title={t('TASHKILOTI TARIXI')} />
        <div className="containerr">
          <div className="history-slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/7.png"})center center no-repeat `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('historya')}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img2"}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('historyb')}{" "}
                      <br /> {t('hisc')}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img3"}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('hisd')}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img4"}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('hise')} 
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img5"}) center center no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('hisf')} 
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img6"}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('hisg')}  
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img7"}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('hisj')} 
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url("https://vatanparvar.uz/Files/images/img1"}) center center no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                    {t('hisk')}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="section-two">
            <p>
            {t('hisq')} 
            </p>
            <p>
              {" "}
              {t('hisw')}
            </p>
            <p>
            {t('hisr')} 
            </p>
            <div className="section-title">
              <strong>
                <p> {t('hist')} </p>
              </strong>
            
<Row style={{display:'flex', justifyContent:'center'}}>
<Col lg={8} md={12} sm={24}>
<div style={{padding:'10px'}}>
                  <div className="hisRah" style={{backgroundImage:`url("https://vatanparvar.uz/Files/images/Shaxmardonov"})`}}>
                    <div className="hisBlack">
<p className="kasb">{t("hisy")}</p>
<h2 className="ism">{t("hisyI")}</h2>
<p className="yil">{t("hisu")}</p>
                    </div>
                    </div>
                </div>
    
</Col>
<Col lg={8} md={12} sm={24}>
<div style={{padding:'10px'}}>
                  <div className="hisRah" style={{backgroundImage:`url("https://vatanparvar.uz/Files/images/Abduqahhorov"})`}}>
                    <div className="hisBlack">
<p className="kasb">{t("hisi")}</p>
<h2 className="ism">{t("hisiI")}</h2>
<p className="yil">{t("hiso")}</p>
                    </div>
                    </div>
                </div>
    
  </Col>
  <Col lg={8} md={12} sm={24}>
<div style={{padding:'10px'}}>
                  <div className="hisRah" style={{backgroundImage:`url("https://vatanparvar.uz/Files/images/Mamedov"})`}}>
                    <div className="hisBlack">
<p className="kasb">{t("hisp")}</p>
<h2 className="ism">{t("hispI")}</h2>
<p className="yil">{t("hiss")}</p>
                    </div>
                    </div>
                </div>
    
</Col>
<Col style={{marginTop:'-20px'}} lg={8} md={12} sm={24}>
<div style={{padding:'10px'}}>
                  <div className="hisRah" style={{backgroundImage:`url("https://vatanparvar.uz/Files/images/Niyazov"})`}}>
                    <div className="hisBlack">
<p className="kasb">{t("hish")}</p>
<h2 className="ism">{t("hishI")}</h2>
<p className="yil">{t("hisj")}</p>
                    </div>
                    </div>
                </div>
    
  </Col>
  <Col style={{marginTop:'-20px'}} lg={8} md={12} sm={24}>
<div style={{padding:'10px'}}>
                  <div className="hisRah" style={{backgroundImage:`url("https://vatanparvar.uz/Files/images/Batirov"})`}}>
                    <div className="hisBlack">
<p className="kasb">{t("hisk")}</p>
<h2 className="ism">{t("hiskI")}</h2>
<p className="yil">{t("hisl")}</p>
                    </div>
                    </div>
                </div>
    
</Col>
</Row>
           
                
                
                
                
                
                
               
            
            
            
<br/>
            <br/>
            <br/>
              
            
      
            
            
            
            
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
