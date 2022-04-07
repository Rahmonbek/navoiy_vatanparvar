import React, { useEffect, useState } from "react";
import { PageTitle } from "../../ui/PageTitle";
import rRais from "./assets/Kamolov-1M.jpg";

import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import "../leaders/assets/rahbariyat.scss";
import { Image } from 'antd';
import logo from './assets/logo.gif'

import { useTranslation } from 'react-i18next';
import http from "../../ui/Services";
import { MdLanguage } from "react-icons/md";
import { region, urlPer } from "../../../host";
//@ts-ignore
function Leaders() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const [data, setData] = useState<any>(null)
  const loaderT=()=>{
     
  }
  useEffect(()=>{
    http.get<any>(`/GetApi/Personal/?id=2&regionId=${region}`)
        
    .then((res) => {console.log(res.data); setData(res.data); setTimeout(()=>{
      setLoader(false)
  }, 0) })
    .catch(e => console.log(e))
  },[])
  return (
    <Image.PreviewGroup>
    <div className="rahbariyat" onLoad={()=>{loaderT()}}>
    {loader?<div className="loaderG">
    <div className="befG">
<img src={logo} alt="..."/>
</div>

</div>
:''}
      <div className="container">
      <PageTitle title={t('markaziy_aparat')} />
        <div className="rahbariyat-info">
        
        {data!==null?data.map((item:any, index:any)=>{
          return(
            <div className="rahbariyat-list">
              
             <div className="content-wrapper">
             <div? className="rahbariyat-list-text" style={{display:"flex", padding:'0px', alignItems:'center', justifyContent:'center'}}> 
              <Image  className="img" src={`${urlPer}/${item.photo}`} alt="img" />
              </div?
              <div className="rahbariyat-list-text">
                <p  className="rahbariyat-list-text-position">
                  <b>
                              {t('check')?item.fullNameUz:item.fullNameRu}
                </b></p>
  
                <p  className="rahbariyat-list-text-name">
                {t('check')?item.positionUz:item.positionRu}
                </p>
                <div className="icons" style={{marginTop:'20px'}}>
                  <FaRegCalendarCheck  className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                  <p  style={{position:'relative', top:'-14px'}}>{t('check')?item.openDaysUz:item.openDaysRu}</p>
                </div>
                <div className="icons">
                  <FiPhone className="icon"  size="1.5rem" color="#244BA4" cursor="pointer"/>
                  <p  style={{position:'relative', top:'-14px'}}><a href={`tel: ${item.phone}`}>{item.phone}</a></p>
                </div>
                <div className="icons">
                  <HiOutlineMail className="icon iconn" size="1.5rem" color="#244BA4" cursor="pointer"/>
                  <p  style={{position:'relative', top:'-14px'}}><a href={`mailto: ${item.email}`}>{item.email}</a></p>
                </div>
              
                
              </div>
              </div> 
            </div>
          )
        }):''}
        
        
        </div>
      </div>
    </div>
    </Image.PreviewGroup>
  );
}

export default Leaders;
