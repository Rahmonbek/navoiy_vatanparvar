import React, {useState} from 'react';
import {HomeHeaderSlider} from "./HomeHeaderSlider";
import {Activity} from "./Activity";
import {News} from "./News";
import {Map} from "./Map";
import {Statistic} from "./Statistic";
import {Partners} from "./Partners";
import Location from './Location';
import logo from './assets/logo.gif'
import style from  "../contacts/assets/style.module.css";

import BounceLoader from "react-spinners/BounceLoader";


export function Home() {
  const [loader, setLoader] = useState(true)
const loaderT=()=>{
    setTimeout(()=>{
        setLoader(false)
    }, 1000)
}
    return (
        <div onLoad={()=>{loaderT()}}>
            {loader?<div className={style.loader}>
            <div className={style.bef}>
      <img src={logo} alt="..."/>
      </div>
   
        </div>
        :''}
            <HomeHeaderSlider/>
            <Activity />
            <Statistic />
            <News />
            <Map />
            <Partners />
            <Location/>
        </div>
    );
}

