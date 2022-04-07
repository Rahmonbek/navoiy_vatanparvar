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
  const [pol, setPol]=useState( [
[
    [40.256273, 71.033345],
    [40.259496, 71.038569],
    [40.259001999999995, 71.042666],
    [40.257145, 71.04433399999999],
    [40.248951999999996, 71.04329],
    [40.247349, 71.04096799999999],
    [40.244389, 71.03992699999999],
    [40.240117999999995, 71.042427],
    [40.230821, 71.04242599999999],
    [40.227531, 71.04085599999999],
    [40.226198, 71.038066],
    [40.226707999999995, 71.034762],
    [40.233098, 71.032573],
    [40.237874999999995, 71.02754],
    [40.241282, 71.02644599999999],
    [40.249992999999996, 71.027487],
    [40.251965999999996, 71.031199]

],
[
    [39.954605, 71.717643],
    [39.962044999999996, 71.714857],
    [39.968254, 71.715908],
    [39.968430999999995, 71.721262],
    [39.976456, 71.738359],
    [39.977, 71.763915],
    [39.980962, 71.765675],
    [39.990981, 71.788259],
    [39.995132, 71.781371],
    [40.003657, 71.790053],
    [40.011846999999996, 71.78772],
    [40.02186, 71.775897],
    [40.02402, 71.780062],
    [40.022242999999996, 71.786148],
    [40.00371, 71.802998],
    [40.005233, 71.812219],
    [40.002741, 71.816189],
    [39.988597, 71.821124],
    [39.985577, 71.829321],
    [39.983149999999995, 71.86142199999999],
    [39.968061, 71.855456],
    [39.961256999999996, 71.848305],
    [39.95333, 71.850343],
    [39.944956999999995, 71.84622399999999],
    [39.953661, 71.829551],
    [39.953261, 71.815728],
    [39.957012, 71.80931799999999],
    [39.959216, 71.795628],
    [39.966649, 71.789624],
    [39.964045999999996, 71.778866],
    [39.956559999999996, 71.778638],
    [39.950821999999995, 71.774496],
    [39.93443, 71.753692],
    [39.933579, 71.74550099999999],
    [39.937725, 71.742588],
    [39.950657, 71.74779099999999],
    [39.955042, 71.74556],
    [39.960152, 71.725363],

],
]
    )

  
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

































