import React, { useEffect, useState } from 'react';
import {PageTitle} from '../ui/PageTitle' ;
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
// import {AiOutlineInstagram} from "react-icons/ai";
import {FiPhone} from "react-icons/fi";
import {HiOutlineDocumentDownload} from "react-icons/hi";
import {RiFacebookFill} from "react-icons/ri"
import {BsInstagram} from "react-icons/bs"
import person from './assets/placeHolder.png'
import {FaTelegramPlane} from "react-icons/fa"
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, RouteButton, TrafficControl, ZoomControl, Clusterer} from 'react-yandex-maps';
import { useTranslation } from 'react-i18next';
import "./assets/location.scss";
import http from '../ui/Services';
import { region } from '../../host';

function Location() {
    const {t} = useTranslation();
    const [data, setData] = useState<any[]>([])
    const getNews = async () => {
        await http.get(`GetApi/GetRegionContacts/${region}`)
            .then((res) => {
                
                var a=[]
     
     
                a.push(res.data.filter((data: any) => data.regionId === region))
                
                setData(a)})
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getNews();
    }, [])
    return (
        <div className='location'>
            <PageTitle title={t('MAP')}/>
            <div className="container">
              <div className="location-container">
                <div className="location-info">
                    <div className="location-info-address">
                        <a href="https://goo.gl/maps/WnKiD14WoYxDTAqL7" target="_blank"  className='iconn'><HiOutlineLocationMarker className="icon" size="2.1rem" color="#133165" cursor="pointer"/></a>
                       <a href="https://goo.gl/maps/WnKiD14WoYxDTAqL7"  target="_blank" >{data.length!==0?t("check")?data[0].regionAdress:data[0].regionAdress:''} </a>  
                    </div>
                    <div className="location-info-email">
                        <p key="icon" className='iconn'><AiOutlineMail className="icon" size="2.1rem" color="#133165" cursor="pointer"/></p>
                        <p  key="email" className="email">buxorovk@mail.ru</p>  
                    </div>     
                    <div className="location-info-phone">
                        <div className="location-info-phone-icon">
                            <FiPhone className="icon" size="2.1rem" color="#133165" style={{marginTop:'10px'}} cursor="pointer"/>
                        </div>
                        <div className="location-info-phone-nuber">
                           <p className=""><a href="tel:+998553039849">+998 (55) 303 - 98 - 49</a></p>
                        </div>
                    </div>    
                    <div className="location-info-document">
                        <HiOutlineDocumentDownload className="icon" size="2.1rem" color="#133165" cursor="pointer"/>
                        <a href="https://test.vitc.uz/Files/BUXORO.docx" target="_blank">{t("Rekvizitlar")}</a>  
                    </div>     
                    <div className="location-info-social" style={{marginTop:'30px'}}>
                       <a target="_blank" href="https://www.facebook.com/Mudofaaga-komaklashuvchi-Vatanparvar-tashkiloti-108212348006242" className="location-info-social-item_item" >
                          <RiFacebookFill size="0.9em" />
                       </a>
                       <a target="_blank" href="https://www.instagram.com/vatanparvar.tashkiloti/" className="location-info-social-item_item" >
                            <BsInstagram size="0.9em" />
                        </a>
                        <a target="_blank" href="https://t.me/mudofaavatanparvartashkiloti" className="location-info-social-item_item" >
                            <FaTelegramPlane size="0.9em" />
                        </a>
                    </div>      
                </div>
                <div className="location-map">
       
                   <div   style={{borderRadius:"10px",boxShadow: " rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px", overflow:"hidden", width:"100%", height:"368px"}}>
                   <YMaps  className="map-sect">
                       <div  >
                           <Map  width="100%" height="368px" defaultState={{
                               center: [39.753049, 64.414738] ,
                               zoom:17,
                               }}
                               >
                              <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={[39.753049, 64.414738]}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: person,
                      iconImageSize: [50, 80],
                      iconImageOffset: [-25, -90],
                    }}
                   
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
                              <FullscreenControl options={{float: 'left'}}/>   
                              <GeolocationControl options={{float: 'left'}}/>
                              <RouteButton options={{float: 'right'}}/>
                              <TrafficControl options={{float: 'right'}}/>
                              <ZoomControl options={{float: 'left'}}
                              />
                            </Map>
                       </div>
                   </YMaps>
                   </div>
                </div> 
            </div>  
            
            </div>

        </div>
    )
}


export default Location;
