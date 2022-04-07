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



import { message } from "antd";
import http from "./components/ui/Services";


export const Xarita=()=> {
  const [loading, setLoading] = useState(true);
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);

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
                }}
              >
                {data.length!==0?data.map((info:any, index) => {
                  return (
                    // <a href="http://maktablar.bogot47idum.uz/" traget="_blank">
                   info.lat!==null && info.long!==null? <Placemark
                      key={index}
                      className="placeMark"
                      geometry={
                          [Number(info.lat), Number(info.long)]
                      }
                     
                      options={{
                        preset: "islands#nightStretchyIcon",
                       
                      }}
                      properties={{
                        iconContent:t("check").info.regionName,
                        balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
                      }}
                      modules={["geoObject.addon.hint"]}
                    />:''
                    // </a>
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
                    key={-1}
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
              
              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
       
        </>
      )}
     
    </>
  );
}

































