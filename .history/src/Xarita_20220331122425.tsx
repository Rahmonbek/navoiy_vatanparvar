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
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    http.get<any>(`/GetApi/GetRegionContacts`).then(res=>{
console.log(res.data)
setData(res.data)
    })
    setTimeout(()=>{
      setLoading(false);
    }, 1000)

  }, []);

  const openModalRegion=(id:any)=>{
     setRegion(data[id])
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
                center: [41.614159,63.914271],
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
                   onClick={()=>{openModalRegion(index)}}
                      key={index}
                      className="placeMark"
                      geometry={
                          [Number(info.lat), Number(info.long)]
                      }
                     
                      options={{
                        preset: "islands#nightDotIcon",
                        // preset: "islands#nightStretchyIcon",

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
                            <h2 className="region_name">{t("check")?region.regionName!==null?region.regionName}</h2>
                            <ul className="region_info">
                                <li>
                                    <strong><HiOutlineLocationMarker className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {currentAddress}
                                </li>
                                <li>
                                    <strong><FaUserTie className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {currentName}
                                </li>
                                <li>
                                    <strong> <BsTelephoneFill className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentPhone}
                                </li>
                                <li>
                                <strong> <ImPrinter className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentFaks}
                                </li>
                                <li>
                                <strong> <MdAlternateEmail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentEmail}
                                </li>
                                <li>
                                <strong> <HiMail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentIndex}
                                </li>
                                <li>
                                <strong> <MdLanguage className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                   
                                    <a target="_blank" style={{color:"#133165"}} href={`https://${currentVeb}`}>{currentVeb}</a>
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

































