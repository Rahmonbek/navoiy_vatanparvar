import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";

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
              <div className="containerr">
                  <div className="hamkorlik-info">
                     <div className="img">
                     </div>
                     <p>{t('xamq')}</p>  
                     <p>{t('xamw')}</p>
                     <p>{t('xame')}</p>
                     <p>{t('xamr')}</p>
                  </div>
                  
             
              </div>
          </div>
     
      </div></Image.PreviewGroup>
  );
}

export default  Cooperation;
