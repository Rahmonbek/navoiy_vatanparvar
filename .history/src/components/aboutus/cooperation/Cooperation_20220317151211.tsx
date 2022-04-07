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
   <div></div>
  );
}

export default  Cooperation;
