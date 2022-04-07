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
  const [data, setData] = useState([
    {params:[41.003480,71.659285],
      nomi:'1-maktab'},
      {params:[41.002962,71.638672],
        nomi:'2-maktab'},
        {params:[40.995966,71.655163],
          nomi:'3-maktab'},
          {params:[41.016433,71.665813],
            nomi:'4-maktab'},
            {params:[41.000889,71.583360],
              nomi:'5-maktab'},
              {params:[40.985859,71.578894],
                nomi:'6-maktab'},
                {params:[41.001925,71.516711],
                  nomi:'7-maktab'},
                  {params:[40.994152,71.509840],
                    nomi:'8-maktab'},
                    {params:[41.004257,71.476516],
                      nomi:'9-maktab'},
                      {params:[41.002184,71.235686],
                        nomi:'101-maktab'},
                        {params:[40.995448,71.230709],
                          nomi:'92-maktab'},
                          {params:[40.986896,71.238955],
                            nomi:'83-maktab'},
                            {params:[40.980935,71.212845],
                              nomi:'64-maktab'},
                              {params:[41.068740,71.214563],
                                nomi:'115-maktab'},
                                {params:[41.069775,71.188032],
                                  nomi:'56-maktab'},
                                  {params:[41.074693,71.234927],
                                    nomi:'47-maktab'},
                                    {params:[41.058385,71.198682],
                                      nomi:'28-maktab'},
                                      {params:[41.089443,71.184253],
                                        nomi:'19-maktab'},
  ]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);

  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    http.get<any>(`/GetApi/`).then(res=>{

    })
    setTimeout(()=>{
      setLoading(false);
    }, 6000)

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
                zoom:7,
              }}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                }}
              >
                {data.map((info:any, index) => {
                  return (
                    // <a href="http://maktablar.bogot47idum.uz/" traget="_blank">
                    <Placemark
                      key={index}
                      className="placeMark"
                      geometry={
                        info.params !== null
                          ? info.params
                          : message.info("Param mavjuda emas")
                      }
                     
                      options={{
                        preset: "islands#greenDotIconWithCaption",
                        iconColor: "#aeca3b",
                        iconLayout: "default#image",
                      }}
                      properties={{
                        hintContent: `<h6><b className="personStyle">${info.nomi}</b></h6>`,
                      }}
                      modules={["geoObject.addon.hint"]}
                    />
                    // </a>
                  );
                })}
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

































