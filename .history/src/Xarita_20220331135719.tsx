import React, { useState, useEffect } from "react";
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

export const Xarita=()=> {
    const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);
const [showModalRegion, setShowModalRegion] = useState<any>(false)
const [region, setRegion] = useState<any>({})
  const [center, setcenter] = useState([41.614159,63.914271]);
  const [pol, setPol]=useState( [[71.033345, 40.256273]
    , [71.038569, 40.259496]
    , [71.042666, 40.259001999999995]
    , [71.04433399999999, 40.257145]
    , [71.04329, 40.248951999999996]
    , [71.04096799999999, 40.247349]
    , [71.03992699999999, 40.244389]
    , [71.042427, 40.240117999999995]
    , [71.04242599999999, 40.230821]
    , [71.04085599999999, 40.227531]
    , [71.038066, 40.226198]
    , [71.034762, 40.226707999999995]
    , [71.032573, 40.233098]
    , [71.02754, 40.237874999999995]
    , [71.02644599999999, 40.241282]
    , [71.027487, 40.249992999999996]
    , [71.031199, 40.251965999999996]])

  
  useEffect(() => {
    http.get<any>(`/GetApi/GetRegionContacts`).then(res=>{
console.log(res.data)
setData(res.data)
    })
    setTimeout(()=>{
      setLoading(false);
    }, 1000)

  }, []);

  const openModalRegion=(item:any)=>{
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
              width="100vw"
              height="95vh"
              state={{
                center: center,
                zoom:6,
              }}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                  preset: "islands#invertedNightClusterIcons",
                  strokeColor: "#F008"
                }}
               
              >
                {data.length!==0?data.map((info:any, index) => {
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
                 <GeoObject
                geometry={{
                  type: "Polygon",
                  coordinates: pol,
                  fillRule: 1,
                }}
                options={{
                  fillColor: `rgba(255,255,0,0.4)`,
                  strokeColor: "#0000FF",
                  opacity: 0.5,
                  strokeWidth: 5,
                  strokeStyle: "shortdash",
                  iconLayout: "default#image",
                  iconImageHref: pin,
                  iconImageSize: [40, 40],
                  hideIconOnBalloonOpen: false,
                  balloonOffset: [3, -40],
                }}
              />
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
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

































