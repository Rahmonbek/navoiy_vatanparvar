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

import GridLoader from "react-spinners/GridLoader";
import person from "./boy.png";
import person1 from './components/home/assets/placeHolder.png'
import { Modal } from "./components/ui/Modal";
import {HiOutlineLocationMarker, 
    HiMail,} from "react-icons/hi";
    import { FaUserTie,} from 'react-icons/fa'
    import { BsTelephoneFill,} from 'react-icons/bs'
    import { ImPrinter} from 'react-icons/im'
    import {  MdLanguage} from 'react-icons/md'

    import { MdAlternateEmail,} from 'react-icons/md'

import http from "./components/ui/Services";
import { useTranslation } from 'react-i18next';
import { coorV } from "./M";
// import { coorB } from "./F";
import { colorA} from "./yandexmapKor";

export const Xarita=()=> {
    const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [school, setSchool] = useState([]);
  const [user, setUser] = useState([]);
;
const [showModalRegion, setShowModalRegion] = useState(false)
const [region, setRegion] = useState({})
  const [center, setcenter] = useState([41.614159,63.914271]);
  

 
  const mapRef = useRef(null);

  const COLORS = colorA;



  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      var objectManager = new ymaps.ObjectManager();
      ["001"].map(item=>{
     
        ymaps.borders
        .load(item, {
    quality:3,
    lang:'en'
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
                
            }else{
                region.options.fillColor = "#f9f6f0";
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

    http.get(`/GetApi/GetRegionContacts`).then(res=>{
      setData(res.data)
          })
          http.get(`/GetApi/GetBranchContacts`).then(res=>{
            setSchool(res.data)
                })
             
          setTimeout(()=>{
      setLoading(false);
    }, 1000)

  }, []);

  const openModalRegion=(item)=>{
      setcenter([Number(item.lat), Number(item.long)])
     setRegion(item)
     setShowModalRegion(true)
  }
 
  return (
    <>
      {loading ? (
        <div>
        <GridLoader
color="violet" loading={loading} size={40} />
        </div>
        ) : (
        <>
        
          <YMaps>
            <Map
   
         instanceRef={mapRef!==null?mapRef:{}}
  
       
         onLoad={ymaps => getRegions(ymaps)}
        options={{
          minZoom:7,
          restrictMapArea:[[36, 54], [45.7,76]]
        }}
         modules={["borders", "ObjectManager"]}
              width="100vw"
              height="100vh"
              state={{
                center: center,
                zoom:6,
               
              
              }}
           
              
              
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                  preset: "islands#invertedNightClusterIcons",
                
                }}
               
              >
                {data.length!==0?data.map((info, index) => {
                  return (
                   info.lat!==null && info.long!==null? <Placemark
                   onClick={()=>{openModalRegion(info)}}
                      key={index}
                      className="placeMark"
                      geometry={
                          [Number(info.lat), Number(info.long)]
                      }
                     
                      options={{
                        preset: "islands#nightDotIcon",
                 

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
                 {school.length!==0?school.map((info, index) => {
                  return (
                   info.lat!==null && info.long!==null? <Placemark
                   onClick={()=>{openModalRegion({regionName:info.branchName, nameRu:info.branchNameRu, email:info.email, phone:info.phoneNumber})}}
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
                      iconImageHref: person,
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
               {/* <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={[41.328926, 69.280004]}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: person1,
                      iconImageSize: [50, 80],
                      iconImageOffset: [-25, -90],
                    }}
                   
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer> */}
                  {/* <GeoObject
                 
                 geometry={{
                   type: "Polygon",
                   coordinates: coorB,
                   fillRule: 1,
                 }}
                 options={{
                   fillColor: `#a19f9d`,
                   strokeColor: "#000000",
                   opacity: 0.5,
                   strokeWidth: 5,
                  
                   iconLayout: "default#image",
                 //   iconImageHref: pin,
                   iconImageSize: [40, 40],
                   hideIconOnBalloonOpen: false,
                   balloonOffset: [3, -40],
                 }}
               /> */}
                 <GeoObject
                 
                 geometry={{
                   type: "Polygon",
                   coordinates: coorV,
                   fillRule: 1,
                 }}
                 options={{
                   fillColor: `rgba(251, 247, 241, 0)`,
                   strokeColor: "#0000FF",
                   opacity: 0.4,
                   strokeWidth: 11,
                  
                   iconLayout: "default#image",
                 //   iconImageHref: pin,
                   iconImageSize: [40, 40],
                   hideIconOnBalloonOpen: false,
                   balloonOffset: [3, -40],
                 }}
               />
              
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl constraints={[7, 10]} options={{ float: "left" }} />
              <FullscreenControl/>
              <RulerControl/>
            </Map>
          </YMaps>
          <Modal show={showModalRegion} onClose={() => setShowModalRegion(false)}>
                {/* {
                    data.map((item, index) => */}
                        <div className="map-modal_content" >
                            <h2 className="region_name">{t("check")?region.regionName!==null?region.regionName:region.regionNameRu:region.regionNameRu!==null?region.regionNameRu:region.regionName}</h2>
                            <ul className="region_info">
                                <li>
                                    <strong><HiOutlineLocationMarker className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {t("check")?region.regionAdress!==null?region.regionAdress:region.regionAdressRu:region.regionAdressRu!==null?region.regionAdressRu:region.regionAdress}
                                </li>
                                <li>
                                    <strong><FaUserTie className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {t("check")?region.regionPresident!==null?region.regionPresident:region.regionPresidentRu:region.regionPresidentRu!==null?region.regionPresidentRu:region.regionPresident}
                                </li>
                                <li>
                                    <strong> <BsTelephoneFill className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {region.phoneNumber}
                                </li>
                                <li>
                                <strong> <ImPrinter className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {region.fax}
                                </li>
                                <li>
                                <strong> <MdAlternateEmail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {region.email}
                                </li>
                                <li>
                                <strong> <HiMail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                {region.mailIndex}
                                </li>
                                <li>
                                <strong> <MdLanguage className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                   
                                    <a target="_blank" style={{color:"#133165"}} href={`https://${region.webSite}`}>{region.webSite}</a>
                                </li>
                            </ul>

                        </div>
                    {/* )
                } */}

            </Modal>
        </>
      )}
     
    </>
  );
}

































