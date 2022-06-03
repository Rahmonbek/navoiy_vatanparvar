import React, { useState, useEffect, useRef } from "react";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
  FullscreenControl,
  RulerControl,
} from "react-yandex-maps";
import "./Xarita.css"
import {region} from './host' 
import person from "./boy.png";
import { Modal } from "./components/ui/Modal";
import {HiOutlineLocationMarker, 
    HiMail,} from "react-icons/hi";
    import { FaUserTie, FaBuilding} from 'react-icons/fa'
    import { BsTelephoneFill,} from 'react-icons/bs'
    import { ImPrinter} from 'react-icons/im'
    import {  MdLanguage} from 'react-icons/md'

    import { MdAlternateEmail,} from 'react-icons/md'

import http from "./components/ui/Services";
import { useTranslation } from 'react-i18next';

// import { coorB } from "./F";
import { colorA} from "./yandexmapKor";
import { Form, SplitButton } from "react-bootstrap";

export const Xarita=()=> {
    const { t } = useTranslation();
  const [loader, setLoader] = useState(true);

  const [data, setData] = useState([]);
 const [id, setId]=useState(Number(window.location.href.split('/')[window.location.href.split('/').length-1]))

  const [dataRegion, setDataRegion] = useState(null);

  const [zoom, setzoom] = useState([[32, 43], [50, 86]]);
  const [zoomA, setzoomA] = useState(7);
  const [school, setSchool] = useState([]);
  const [user, setUser] = useState([]);
;
const [showModalRegion, setShowModalRegion] = useState(false)
const [regionG, setRegion] = useState({})
  const [center, setcenter] = useState([40.327178,64.192237]);
  

 
  const mapRef = useRef(null);

  const COLORS = colorA;



  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      var objectManager = new ymaps.ObjectManager();
      ["001"].map(item=>{
     
        ymaps.borders
        .load(item, {
    quality:3,
    lang:'uz'
        })
        .then(function(result) {
            
          // Очередь раскраски.
          var queue = [];
          // Создадим объект regions, где ключи это ISO код региона.
          var regions = result.features.reduce(function(acc, feature) {
            // Добавим ISO код региона в качестве feature.id для objectManager.
            var iso = feature.properties.iso3166

            feature.id = iso;
            // Добавим опции региона по умолчанию.
            feature.options = {
              fillOpacity: 1,
              strokeColor: "#FFF",
              strokeOpacity: 0
            };
            acc[iso] = feature;
            return acc;
          }, {});
          // Функция, которая раскрашивает регион и добавляет всех нераскрасшенных соседей в очередь на раскраску.
          function paint(iso) {
            var allowedColors = COLORS.slice();
            // Получим ссылку на раскрашиваемый регион и на его соседей.
            var region = regions[iso];
            
            // Раскрасим регион в первый доступный цвет.
          
            if(region.id==="UZ"){
       
                region.options.fillColor = "#f330";
                region.options.strokeColor = "#6c7e9d";
                region.options.strokeOpacity = "1";
                region.options.strokeWidth = "3";
                
            }else{
                region.options.fillColor = "#f9f6f0";
                region.options.strokeOpacity = "0";
                region.options.strokeWidth = "5";
            }
            
          }
          for (var iso in regions) {
            // Если регион не раскрашен, добавим его в очередь на раскраску.
            if (!regions[iso].options.fillColor) {
              queue.push(iso);
            }
            // Раскрасим все регионы из очереди.
            while (queue.length > 0) {
              paint(queue.shift());
            }
          }
          // Добавим регионы на карту.
          result.features = [];
          for (var reg in regions) {
            result.features.push(regions[reg]);
          }
          objectManager.add(result);
          mapRef.current.geoObjects.add(objectManager);
        })});
   
    
    }
  };

  
  useEffect(() => {
    if(window.location.href[window.location.href.length-1]==="/"){
      var linkR=window.location.href
        window.location.href=linkR.slice(0, linkR.lastIndexOf("/"))  }
    if(window.screen.width<1600 && window.screen.width>1025){
      setzoomA(6)
console.log('sasasasas')
            setzoom([[32, 43], [50, 86]])
          }
    if(window.screen.width<1024){
setzoomA(2)
      setzoom([[25, 54], [50,76]])
    }
    
    http.get(`/GetApi/GetRegionContacts`).then(res=>{
    
      var g=[null, 1735, 1703, 1706, 1708, 1710, 1712, 1714, 1718, 1722, 1724, 1727, 1730, 1733, 1726]
      var h=[]
      var regs=res.data.sort((a,b) => (a.regionName > b.regionName) ? 1 : ((b.regionName > a.regionName) ? -1 : 0))

      if(id===0){
        h.push(regs)
      
      }else{
        if(id>=1 && id<=14 && id.length!==0){
          h.push(regs.filter((data) => data.regionId === id))
      
        }
      }
 
      setData(h)
      setDataRegion(regs)
    
  http.get(`/GetApi/GetBranchContacts`).then(res1=>{
    var f=[]
  if(id===0){
    f.push(res1.data)
  
  }else{
    if(id>=1 && id<=14 && id.length!==0){
      f.push(res1.data.filter((data) => data.regionId === g[id]))
  
    }else{
      var linkR=window.location.href
      window.location.href=linkR.slice(0, linkR.indexOf('xarita'))+"xarita/0"
    }

  
  }

 console.log(f)
 setSchool(f)
    setTimeout(()=>{
      setLoader(false);
    }, 500)
        })
          })
      
             
          

  }, []);

  const openModalRegion=(item)=>{
      setcenter([Number(item.lat), Number(item.long)])
     setRegion(item)
     setShowModalRegion(true)
  }
const editMapRegion=()=>{
  var a=document.querySelector('.xaritaRegion').value
  var linkR=window.location.href
window.location.href=linkR.slice(0, linkR.lastIndexOf("/"))+"/"+a
}
  return (
    <div className="mapR">
    
     {loader?<div className="loaderG">
      <div className="befG">
  <img src="https://vatanparvar.uz/Files/images/logo.gif" alt="..."/>
  </div>
  
  </div>
  :''}
        <>
        <select style={{position: 'absolute', top:'110px', left:'50px', height:'30px', backgroundColor: 'white', border: 'none', outline: 'none', zIndex:20, boxShadow: '0 1px 2px 1px rgb(0 0 0 / 15%), 0 2px 5px -3px rgb(0 0 0 / 15%)'}} onChange={()=>{editMapRegion()}} className="xaritaRegion">
        <option value={0}>{t("check")?"Barcha tashkilotlar":"Все организации"}</option>
          {dataRegion!==null?dataRegion.map((item, key)=>{
            return(<option value={item.regionId} selected={id===item.regionId?true:false}>{t("check")?item.regionId!==1 && item.regionId!==14?item.regionName.slice(0, item.regionName.indexOf('kengashi')-1)+"i":item.regionName.slice(0, item.regionName.indexOf('kengashi')-1):item.regionId!==1?item.regionId!==14?item.regionNameRu.slice(0, item.regionNameRu.indexOf('кий'))+"кая область":"город Ташкент":"Республика Каракалпакстан"}</option>)
          }):''}
        </select>
        <YMaps  query={{
      lang: t("check")?"uz":"ru"
    }}>
            <Map
   
         instanceRef={mapRef!==null?mapRef:{}}
  
       
         onLoad={ymaps => getRegions(ymaps)}
        options={{
          minZoom:zoomA-1,
          restrictMapArea:zoom
        }}
         modules={["borders", "ObjectManager"]}
              width="100vw"
              height="100vh"
              state={{
                center: center,
                zoom:zoomA,
               
              
              }}
           
              
              
            >
             
             <Clusterer
              options={{
                groupByCoordinates: true,
                preset: "islands#invertedNightClusterIcons",
              
              }}
             
            >
              {data.length!==0 && data[0].length!==0?data[0].map((info, index) => {
                
                  return (
                    info.lat!==null && info.long!==null? <Placemark
                    onClick={()=>{var a=info;a.type='region';openModalRegion(a)}}
                       key={index}
                       className="placeMark"
                       geometry={
                           [Number(info.lat), Number(info.long)]
                       }
                      
                       options={{
                         preset:info.regionId===region?"islands#redDotIcon":"islands#nightDotIcon",
                  
   
                         strokeColor: "#F008"
                       }}
                       properties={{
                         iconContent:t("check")?info.regionName:info.regionNameRu,
                         balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
                       }}
                       modules={["geoObject.addon.hint"]}
                       
                     />:''
                  
                   );
                
                
              }):''}</Clusterer>


              
                      <Clusterer
                       options={{
                         groupByCoordinates: false,
                         preset: 'islands#invertedDarkGreenClusterIcons',
                       
                       }}
                      
                     >
                        {school.length!==0 && school[0].length!==0?school[0].map((info, index) => {
                         return (
                          info.lat!==null && info.long!==null? <Placemark
                          onClick={()=>{openModalRegion({regionName:info.branchName, regionNameRu:info.branchNameRu, lat:info.lat, long:info.long, email:info.email, type:"school", regionAdress:info.branchAdress, regionAdressRu:info.branchRu, fax:null, phoneNumber:info.phoneNumber, mailIndex:info.mailIndex, regionPresident:info.branchPresident, regionPresidentRu:info.branchPresidentRu})}}
                             key={index}
                             className="placeMark"
                             geometry={
                                 [Number(info.lat), Number(info.long)]
                             }
                            
                             options={{
                               preset: 'islands#darkGreenDotIcon',
                        
         
                               strokeColor: "#F008"
                             }}
                             properties={{
                               
                               balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
                             }}
                             modules={["geoObject.addon.hint"]}
                             
                           />:''
                        
                         );
                       }):''}
                     </Clusterer>
              
              {isNaN(user[0]) || isNaN(user[1]) ? (
                ""
              ) : (
                <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-2}
                    geometry={user !== null ? user : []}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: {person},
                      iconImageSize: [40, 60],
                      iconImageOffset: [-1, -28],
                    }}
                    properties={{
                      hintContent: `<h6><b className="personStyle">Siz</b></h6>`,
                    }}
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
              )}
              
              
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
             
              <ZoomControl constraints={[7, 10]} options={{ float: "left" }} />
              <FullscreenControl/>
              <RulerControl/>
            </Map>
          </YMaps>
        
          <Modal show={showModalRegion} onClose={() => setShowModalRegion(false)}>
                {/* {
                    data.map((item, index) => */}
                        <div className="map-modal_content" >
                            <h2 style={{fontSize:regionG.type==="school"?'24px':'32px'}} className="region_name">{t("check")?regionG.regionName!==null?regionG.regionName:regionG.regionNameRu:regionG.regionNameRu!==null?regionG.regionNameRu:regionG.regionName}</h2>
                            <ul className="region_info">
                                <li>
                                    <strong><FaBuilding className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {t("check")?regionG.regionAdress!==null?regionG.regionAdress:regionG.regionAdressRu:regionG.regionAdressRu!==null?regionG.regionAdressRu:regionG.regionAdress}
                                </li>
                                <li>
                                    <strong><FaUserTie className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {t("check")?regionG.regionPresident!==null?regionG.regionPresident:regionG.regionPresidentRu:regionG.regionPresidentRu!==null?regionG.regionPresidentRu:regionG.regionPresident}
                                </li>
                                <li>
                                    <strong> <BsTelephoneFill className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {regionG.phoneNumber!==null?regionG.phoneNumber:" - "}
                                </li>
                                {regionG.type!=="school"?<li>

<strong> <ImPrinter className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

{regionG.fax!==null?regionG.fax:" - "}

</li>
:''}
                                <li>
                                <strong> <MdAlternateEmail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                {regionG.email!=="null" && regionG.email!==null?regionG.email:" - "}

                                </li>
                                <li>
                                <strong> <HiMail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                {regionG.emailIndex!==null?regionG.emailIndex:" - "}

                                </li>
                                {regionG.type!=="school"?<li>
                                <strong> <MdLanguage className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                   
                                    <a target="_blank" style={{color:"#133165"}} href={`https://${regionG.webSite}`}>{regionG.webSite}</a>
                                </li>:''}
                                <li>
                                <strong> <HiOutlineLocationMarker className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                   
                                    <a target="_blank" style={{color:"#133165"}} href={`https://yandex.uz/maps/?ll=${regionG.long}%2C${regionG.lat}8&mode=search&sll=${regionG.long}%2C${regionG.lat}&text=${regionG.lat}%2C${regionG.long}`}>{t('check')?"Xaritada ko'rish":'Посмотреть на карте'}</a>
                                </li>
                                
                                
                            </ul>

                        </div>
                    {/* )
                } */}

            </Modal>
        
        </>
        <div className="nav1">
        <div className="nav">
  <input type="checkbox"/>
    <span></span>
    <span></span>
    <div className="menu">
      <li><img src="https://yastatic.net/s3/locdoc/freeze/maps/freeze/Jq-cChaOJpF6wxbhDLhWkAboFKk.png" alt="..."/>  - {t("Vatanparvar tashkilotining viloyat kengashlari")}</li>
      <li><img src="https://yastatic.net/s3/locdoc/freeze/maps/freeze/IxosgnNNo94f08dCpai1R3tLzsk.png" alt="..."/>  - {t("Vatanparvar tashkilotining o'quv sport-texnik kulublari")}</li>

    </div>
</div>
</div>
     
    </div>
  );
}

































