import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/markaziy.scss";
import { useTranslation } from 'react-i18next';
import logo from './assets/logo.gif'

function Central() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 0)
  }
  return (
      <div className="markaziy" onLoad={()=>{loaderT()}}>
      {loader?<div className="loaderG">
      <div className="befG">
  <img src="https://vatanparvar.uz/static/media/logo.b738048fbb88a43a64ff.gif" alt="..."/>
  </div>
  
  </div>
  :''}
      
          <PageTitle title={t('markaziy_kengash1')}  />
          <div className="container">
            <div className="containerr">
            <div className="markaziy-img"></div>
            <div className="markaziy-text">
              <p>{t("marq")}</p>
              <p>{t("marw")}</p>
              <p>{t("mare")}</p>
               <p>{t("marr")}</p>
               <p>{t("mart")}</p>
               <p>{t("mary")}</p>
            </div>
            </div>
          </div>
      </div>
  );
}

export default Central;
