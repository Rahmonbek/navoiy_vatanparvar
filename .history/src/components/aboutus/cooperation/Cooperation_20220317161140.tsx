import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import "./assets/header-slider.scss"

import logo from './assets/logo.gif'
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
              <Image.PreviewGroup>
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
                        <Image className='red' style={{height:'auto', width:"100%" }} src={`${(api)+'/Files/News/'+(data.titleImage)}`}/>  
                      </div>
                      </SwiperSlide>
                  
          
              
                
             
             
              
              
            </Swiper>

                <div className="open-news-text">
                    {Object.keys(data).length !== 0 &&
                        <p>
                            <p className='salomText' style={{textAlign:'justify', lineHeight:"2", fontSize:'18px', textIndent:'50px'}} dangerouslySetInnerHTML={{__html: t('lang') === 'uz' ? data.mainTextUz : data.mainTextRu}}>

                            </p>
                        </p>
                    }
                </div>
            </Image.PreviewGroup>
                  <Row>
                  <Col xl={3} lg={4} md={6} sm={12}>
                      <div className={style.card}>
<div className={style.img}>
    {/* <img src={card1}/> */}
    salom
</div>
                      </div>
                  </Col>
          
              </Row>
              </div>
              
          </div>
     
      </div></Image.PreviewGroup>
  );
}

export default  Cooperation;
