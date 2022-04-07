import React, { useEffect, useState } from 'react';
import "./assets/statistics.scss";
import {PageTitle} from "../ui/PageTitle";
import BuildingIcon from "./assets/building.svg";
import RunIcon from "./assets/run.svg";
import GroupIcon from "./assets/group.svg";
import Person from "./assets/icon-4-1.svg";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTranslation } from 'react-i18next';
import http from '../ui/Services';
import { urlStat } from '../../host';
export function Statistic() {
    const {t, i18n} = useTranslation();
    const [data, setData] =useState<any>(null)
   useEffect(()=>{
    http.get<any>(`GetApi/GetStatisticItems/?regionId`)
        
    .then((res) => {setData(res.data); })
    .catch(e => console.log(e))
   },[])
   
   
    return (
        <div  className="statistics">
            <div className="container">
                <PageTitle title= {t('STATISTIKA')}/>
                <div className="statistics-list">
                   {data!==null?data.map((item:any, key:any)=>{
                       console.log(`${urlStat}/${item.image}`)
                       return(
    
                        <div className="statistics-list_item">
                        <div className="statistics-list_item-icon">
                            <img src={`${urlStat}/${item.image}`} alt=""/>
                        </div>
                        <div>
                            <h1 style={{fontWeight:'bold', fontSize:'26px'}}>
                                <CountUp end={item.value} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <p>{t('check')?item.nameUz:item.nameRu}</p>
                        </div>
                    </div>
                       )
                   }):''}
                   
               
                   
                </div>
            </div>
        </div>
    );
}

