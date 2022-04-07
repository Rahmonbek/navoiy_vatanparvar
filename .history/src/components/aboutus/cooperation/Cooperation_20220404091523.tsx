import React, { useEffect, useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import "./assets/header-slider.scss"

import logo1 from './assets/photo1.jpg'
import logo from './assets/logo.gif'
import { useTranslation } from 'react-i18next';
import style from './assets/Coorparation.module.css'
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import card1 from '../leaders/assets/user.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { api, region } from '../../../host';
import http from '../../ui/Services';

const responsive1 = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop1: {
    breakpoint: { max: 3000, min: 1500 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 664 },
    items: 3,
  },
  mobile1: {
    breakpoint: { max: 664, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Cooperation(props:any) {
  const {t} = useTranslation();
  const [prava, setprava]=useState<any>(null)
  const [kasb, setkasb]=useState<any>(null)
  const [sport, setsport]=useState<any>(null)
  const [loader, setLoader] = useState(true)
  const [error, seterror] = useState(false)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 0)
  }

  useEffect(()=>{
    var id=window.location.href
   
    if(!(/^[\wа-я]*$/.test(id.split('/')[id.split('/').length-1]))){
       window.location.href=api+'/error'

    }
    http.get<any>(`GetApi/GetOrganizationProfessionSections/${props.id}/`).then(res=>{
      setkasb(res.data)
    }).catch(err=>{
      seterror(true)
    })
    http.get<any>(`GetApi/GetOrganizationSportSections/${props.id}/`).then(res=>{
      setsport(res.data)
     
      loaderT()
    })
    http.get<any>(`GetApi/GetOrganizationCategories/${props.id}/`).then(res=>{
      setprava(res.data)
      
    })
  }, [])
  return (
    <Image.PreviewGroup>
      {  error?<Navigate to="/error" />:}      </Image.PreviewGroup>
  );
}

export default  Cooperation;
