import React from 'react';
import UZ from "./assets/uz.svg";
import RU from "./assets/ru.svg";
import "./assets/lang-switcher.scss";
import i18n from '../ui/i18next';
import { t } from 'i18next';


//@ts-ignore
const changeLanguage = (ln) => {
    return () => {
      
   if(ln==="ru"){
    if(window.location.href.split('/')[window.location.href.split('/').length-2]==="allnews" || window.location.href.split('/')[window.location.href.split('/').length-2]==="xarita" || window.location.href.split('/')[window.location.href.split('/').length-2]==="tashkilot"){
        var a=window.location.href
        if(window.location.href[window.location.href.length-1]==="/"){
        a=window.location.href.slice(0, window.location.href.length-1)
        }
        var b=a.slice(0, a.lastIndexOf("/"))+'/ru'+a.slice(a.lastIndexOf('/'), a.length)
window.location.href=b
i18n.changeLanguage(ln)
    }else{
        if(window.location.href[window.location.href.length-1]==="/"){
            window.location.href=window.location.href+'ru'
            i18n.changeLanguage(ln)
        }
        else{
        window.location.href=window.location.href+'/ru'
        i18n.changeLanguage(ln)
        }
    }
  
  
  
   }else{
    i18n.changeLanguage(ln)
    if(window.location.href.split('/')[window.location.href.split('/').length-2]==="ru"){
var a=window.location.href
window.location.href=a.slice(0, a.indexOf("/", a.lastIndexOf("/")-4))+a.slice(a.lastIndexOf('/'), a.length)
    }else{
    window.location.href=window.location.href.slice(0,window.location.href.length-3)

    }
   }

    }
}

export function LanguageSwitcher() {
    return (
        <div className="lang-switcher">
            {!t("check")?<img className="lang-item" onClick={changeLanguage("uz")} width={23} height={16.5} src={UZ} alt="uz lang" />:<img className="lang-item" onClick={changeLanguage("ru")} width={23} height={16.5} src={RU} alt="uz lang" />}
            
            
        </div>
    );
}

