import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import "./assets/header-slider.scss"

import logo from './assets/photo1.jpg'
import { useTranslation } from 'react-i18next';
import style from './assets/Coorparation.module.css'
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
// import card1 from './assets/biatlon.svg'
import card2 from './assets/motosport.svg'
import {Row, Col} from 'antd'
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
              <div className="containerr">
                  <div className="hamkorlik-info">
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
                     
                          display:'flex',
                          alignItems:'center',
                    
                          
                       }}
                      >
                        <Image className='red' style={{height:'auto', width:"100%" }} src={logo}/>  
                      </div>
                      </SwiperSlide></Swiper>
                     <p>{t('xamq')}</p>  
                     <p>{t('xamw')}</p>
                     <p>{t('xame')}</p>
                     <p>{t('xamr')}</p>
                  </div>
                  
                  <Row>
                  <Col xl={4} lg={4} md={6} sm={12}>
                      <div className={style.card}>
<div className={style.img}>
    <img src={logo}/>

</div>
<h1>O'q otish sporti</h1>
                      </div>
                  </Col>
          
              </Row>
              </div>
              
          </div>
     
      </div></Image.PreviewGroup>
  );
}

export default  Cooperation;
