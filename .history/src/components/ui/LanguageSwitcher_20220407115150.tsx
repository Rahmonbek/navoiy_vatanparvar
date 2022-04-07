import React from 'react';
import UZ from "./assets/uz.svg";
import RU from "./assets/ru.svg";
import "./assets/lang-switcher.scss";
import i18n from '../ui/i18next';
import { t } from 'i18next';


//@ts-ignore
const changeLanguage = (ln) => {
    return () => {
        i18n.changeLanguage(ln)
       
    }
}

export function LanguageSwitcher() {
    return (
        <div className="lang-switcher">
            {!t("check")?<img className="lang-item" onClick={changeLanguage("uz")} width={23} height={16.5} src="https://vatanparvar.uz/Files/images/uz.svg" alt="uz lang" />:<img className="lang-item" onClick={changeLanguage("ru")} width={23} height={16.5} src="uz.svg" alt="uz lang" />}
            
            
        </div>
    );
}

