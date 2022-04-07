import React, { useState } from 'react';
import Logo from "./assets/logo.gif";
import "./assets/navbar.scss";
import { RiMenu2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { NavLink } from "react-router-dom";
// @ts-ignore
import { SettingsModal } from '@n3/react-vision-panel';
import { BsFillEyeFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

export function AppNavbar() {
    const [open, setOpen] = useState(false);
    const [showVisionPanel, setShowVisionPanel] = useState(false);
    const [isActivemarkaziy, setisActivemarkaziy] = useState(false)
    const [isActiverahbariyat, setisActiverahbariyat] = useState(false)
    const [isActivemarkaziy_aparat, setisActivemarkaziy_aparat] = useState(false)
    const [isActivetassarufidagi, setisActivetassarufidagi] = useState(false)
    const [isActivehududiy, setisActivehududiy] = useState(false)
    const [isActivetashkilot, setisActivetashkilot] = useState(false)
    const [isActivexalqaro, setisActivexalqaro] = useState(false)
    const [isActivebarcha_yangiliklar, setisActivebarcha_yangiliklar] = useState(false)
    const [isActivefotogalereya, setisActivefotogalereya] = useState(false)
    const [isActivehujjatlar, setisActivehujjatlar] = useState(false)
    const [isActivekantaktlar, setisActivekantaktlar] = useState(false)
    const [isActiveonlayn, setisActiveonlayn] = useState(false)
    const [isActiveh, setisActiveh] = useState(false)
    const [isovv, setisovv] = useState(false)
    const [isActivek, setisActivek] = useState(false)
    const [isbiz_haqimizda, setisbiz_haqimizda] = useState(false)
    const [isaxborot_xizmati, setisaxborot_xizmati] = useState(false)
    const [ismurojat_qilish, setismurojat_qilish] = useState(false)
 
 
 

const setFalse=()=>{
setisActivemarkaziy(false)
setisActiverahbariyat(false)
setisActivemarkaziy_aparat(false)
setisActivetassarufidagi(false)
setisActivehududiy(false)
setisActivetashkilot(false)
setisActivexalqaro(false)
setisActivebarcha_yangiliklar(false)
setisActivefotogalereya(false)
setisActivehujjatlar(false)
setisActivekantaktlar(false)
setisActiveonlayn(false)
setisActiveh(false)
setisActivek(false)
setisbiz_haqimizda(false)
setisaxborot_xizmati(false)
setismurojat_qilish(false)
setisovv(false)
}











  
    const { t } = useTranslation();
    const closeNavbar = () => {
        setOpen(false)
    }
    return (
        <nav className="app_nav">

            <div className="container">
                <div className="app_nav-info">
                    <NavLink to="/" className="app_nav-logo">
                        <img src={Logo} alt="logo" />
                    </NavLink>
                    <p dangerouslySetInnerHTML={{ __html: t("logo_header") }}>
                    </p>
                </div>
                <div className={`app_nav-links ${open && "open"}`}>

                    <ul className="app_nav-list">
                        <li className="app_nav-list_item with_sublist">

                            <p  className={isbiz_haqimizda?"active":''}><a className="app_nav-list_link">{t('biz_haqimizda')}</a> </p>
                            <ul className="app_nav-sub_list"> 
                            <div className='chiz1'></div>

                                <div className='chiz'></div>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisbiz_haqimizda(true);setisActivemarkaziy(true) }} className={isActivemarkaziy?"active":''}  to="/markaziy-kengash"><a className="app_nav-sub_list-link" href="../home/Markaziy">{t('markaziy_kengash')}</a></NavLink>
                                </li>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisbiz_haqimizda(true);setisActiverahbariyat(true) }} className={isActiverahbariyat?"active":''}  to="/rahbariyat"> <a className="app_nav-sub_list-link">{t('rahbariyat')}</a></NavLink>
                                </li>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisbiz_haqimizda(true);setisActivemarkaziy_aparat(true) }} className={isActivemarkaziy_aparat?"active":''}  to="/markaziy-aparat" > <a className="app_nav-sub_list-link">{t('markaziy_aparat')}</a></NavLink>
                                </li>
                               
                                {/* <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisbiz_haqimizda(true);setisActivehududiy(true) }} className={isActivehududiy?"active":''}  to="/hududiy-kengashlar"><a className="app_nav-sub_list-link">{t('hududiy_kengashlar')}</a></NavLink>
                                </li> */}
                                {/* <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisbiz_haqimizda(true);setisActivetashkilot(true) }} className={isActivetashkilot?"active":''}  to="/tashkilot-tarixi" > <a className="app_nav-sub_list-link">{t('tashkilot_tarixi')}</a></NavLink>
                                </li> */}
                                {/* <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisbiz_haqimizda(true);setisActivexalqaro(true) }} className={isActivexalqaro?"active":''}  to="/xalqaro-hamkorlik">  <a className="app_nav-sub_list-link" dangerouslySetInnerHTML={{ __html: t("xalqaro_hamkorlik") }}></a></NavLink>
                                </li> */}
                            </ul>
                        </li>
                        <li className="app_nav-list_item with_sublist">
                            <p  className={isaxborot_xizmati?"active":''}><a className="app_nav-list_link">{t('axborot_xizmati')}</a></p>
                            <ul className="app_nav-sub_list"> 
                            <div className='chiz1'></div>

<div className='chiz'></div>
                                {/* <li className="app_nav-sub_list-item">
                                    <a className="app_nav-sub_list-link">E'LONLAR</a>
                                </li> */}
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisaxborot_xizmati(true);setisActivebarcha_yangiliklar(true) }} className={isActivebarcha_yangiliklar?"active":''}  to="/allnews"><a className="app_nav-sub_list-link">{t('barcha_yangiliklar')}</a></NavLink>
                                </li>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisaxborot_xizmati(true);setisActivefotogalereya(true) }} className={isActivefotogalereya?"active":''}  to="/fotogalareya"><a className="app_nav-sub_list-link">{t('fotogalereya')}</a></NavLink>
                                </li>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <p  onClick={()=>{setFalse();setisaxborot_xizmati(true);setisovv(true) }} className={isovv?"active":''}><a className="app_nav-sub_list-link" href="https://www.youtube.com/channel/UCI41Xe2P3GPUz5YK-TzEJZg" target="_blank">{t('ovv_biz_haqimizda')}</a></p>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="app_nav-list_item" onClick={closeNavbar}>
                            <NavLink onClick={()=>{setFalse();setisActivehujjatlar(true) }} className={isActivehujjatlar?"active":''}  to="/hujjatlar"><a className="app_nav-list_link">{t('hujjatlar')}</a></NavLink>
                        </li> */}
                         <li className="app_nav-list_item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setisActivetassarufidagi(true) }} className={isActivetassarufidagi?"active":''}  to="/filiallar"><a className="app_nav-list_link" dangerouslySetInnerHTML={{ __html: t("tassarufidagi_tashkilotlar") }}></a></NavLink>
                                </li>
                                <li className="app_nav-list_item" onClick={closeNavbar}>
                            <NavLink onClick={()=>{setFalse();setisActivekantaktlar(true) }} className={isActivekantaktlar?"active":''}  to="/kontaktlar"><a className="app_nav-list_link">{t('kantaktlar')}</a></NavLink>
                        </li>
                       
                        <li className="app_nav-list_item with_sublist">
                            <p  className={ismurojat_qilish?"active":''}><a className="app_nav-list_link">{t('murojat_qilish')}</a></p>
                            <ul className="app_nav-sub_list"> 
                            <div className='chiz1'></div>

<div className='chiz'></div>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setismurojat_qilish(true);setisActiveonlayn(true) }} className={isActiveonlayn?"active":''}  to="/onlayn-murojat"><a className="app_nav-sub_list-link">{t('onlayn_murojat')}</a></NavLink>
                                </li>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setismurojat_qilish(true);setisActiveh(true) }} className={isActiveh?"active":''}  to="/haydovchilik-maktabiga-yozilish"><a className="app_nav-sub_list-link">{t('h_maktabga')}</a></NavLink>
                                </li>
                                <li className="app_nav-sub_list-item" onClick={closeNavbar}>
                                    <NavLink onClick={()=>{setFalse();setismurojat_qilish(true);setisActivek(true) }} className={isActivek?"active":''}  to="/kasb-hunar-maktabiga-yozilish"> <a className="app_nav-sub_list-link" dangerouslySetInnerHTML={{ __html: t("k_maktabga") }}></a></NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="app_nav-list_item" onClick={closeNavbar}>
                            <NavLink onClick={()=>{setFalse();setisActivekantaktlar(true) }} className={isActivekantaktlar?"active":''}  to="/kontaktlar"><a className="app_nav-list_link">{t('kantaktlar')}</a></NavLink>
                        </li>
                        <div className="menu_lang-switcher">
                            <LanguageSwitcher />
                            <BsFillEyeFill style={{ marginLeft: "10px", fontSize: 20, color:"#133165", lineHeight: "100%" }} onClick={() => setShowVisionPanel(true)} />
                        </div>
                    </ul>
                    <div className="app_nav-close_btn" onClick={() => setOpen(false)}>
                        <GrClose size="2.5em" />
                    </div>
                </div>
                <div className="app_lang-switcher">
                    <LanguageSwitcher />
                    <BsFillEyeFill style={{ marginLeft: "10px", fontSize: 20, color:"#133165", lineHeight: "100%" }} onClick={() => setShowVisionPanel(true)} />
                </div>
                <div className="app_nav-burger_btn" onClick={() => setOpen(true)}>
                    <RiMenu2Line size="2.5em" />
                </div>
            </div>
           
            <SettingsModal show={showVisionPanel} onHide={(e:any) => { console.log(e); setShowVisionPanel(false)}} />
           
           
        </nav>
    );
}

