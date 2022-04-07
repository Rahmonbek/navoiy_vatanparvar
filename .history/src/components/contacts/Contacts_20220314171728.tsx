import React, { useState , useEffect } from "react";
//import ReactExport from "react-data-export";
import { PageTitle } from "../ui/PageTitle";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./assets/contacts.scss";
import style from  "./assets/style.module.css";

import { useTranslation } from 'react-i18next';
import http from "../ui/Services";
import logo from '../home/assets/logo.gif'
import {Row, Col, Collapse} from 'antd'
import { BsBuilding, BsPerson } from "react-icons/bs";
import {  AiOutlineFieldNumber, AiOutlinePhone } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

// import BounceLoader from "react-spinners/BounceLoader";
const { Panel } = Collapse;


//const ExcelFile = ReactExport.ExcelFile
//const ExcelSheet = ReactExport.ExcelFile.ExcelSheet

SwiperCore.use([Navigation, Autoplay]);


function Contacts() {
  const [index, setIndex]= useState(1)
  const {t} = useTranslation();
  const [number, setNumber]=useState(0)
  const[data , setData] = useState<any[]>([])
  const [loader, setLoader] = useState(true)

//  const DataSet=[{
//    columns:[

//{title:'T/r', style:{font: {sz:'16', bold:true}}},
//{title:'Tashkilot nomi',style:{font: {sz:'16', bold:true}}},
//{title:'Manzil',style:{font: {sz:'16', bold:true}}},
//{title:'Ism',style:{font: {sz:'16', bold:true}}},
//{title:'Telefon',style:{font: {sz:'16', bold:true}}},
//{title:'Email',style:{font: {sz:'16', bold:true}}},

//    ],
//    data:data[index - 1].map((item, index)=>[
//      {value:item.index+1, style:{font:{sz:"14"}}},
//      {value:item.item.branchName, style:{font:{sz:"14"}}},
//      {value:item.item.branchAdress, style:{font:{sz:"14"}}},
//      {value:item.item.branchPresident, style:{font:{sz:"14"}}},
//      {value:item.item.phoneNumber, style:{font:{sz:"14"}}},
//      {value:item.item.email, style:{font:{sz:"14"}}},
//    ])
//  }]
  async function getContacts(){
    const res = await http('/GetApi/GetBranchContacts/')
    // console.log(res)
    //@ts-ignore
      var a=[]
     
     
      a.push(res.data.filter((data: any) => data.regionId === 1))
      
      a.push(res.data.filter((data:any) => data.regionId === 2))
     
      a.push(res.data.filter((data:any) => data.regionId === 3))
     
      a.push(res.data.filter((data:any) => data.regionId === 4))
     
      a.push(res.data.filter((data:any) => data.regionId === 5))
     
      a.push(res.data.filter((data:any) => data.regionId === 6))
     
      a.push(res.data.filter((data:any) => data.regionId === 7))
      
      a.push(res.data.filter((data:any) => data.regionId === 8))
     
      a.push(res.data.filter((data:any) => data.regionId === 9))
     
      a.push(res.data.filter((data:any) => data.regionId === 10))
      
      a.push(res.data.filter((data:any) => data.regionId === 11))
     
      a.push(res.data.filter((data:any) => data.regionId === 12))
     
      a.push(res.data.filter((data:any) => data.regionId === 13))
     
      a.push(res.data.filter((data:any) => data.regionId === 14))

      setData(a)
     console.log(a)
      setLoader(false)
      
  }
  
useEffect(()=>{
    getContacts();
  },[])
  const callback=(key:any)=> {
    setNumber(key)
    console.log(key)
  }
  
  
  return (
    <div className="contacts tr">
      
      {loader?<div className={style.loader}>
      <div className={style.bef}>
      <img src={logo} alt="..."/>
      </div>
      </div>
      :''}
      <div className="containerr">
      
        <PageTitle title={t("KONTAKTLAR")}/>
        <div className="tel">
        <div className="slider1"  style={{ zIndex:'333',  backgroundColor:'white'}}>
          <Swiper 
          slidesPerView={1} spaceBetween={0} breakpoints={{
              "670": {
                slidesPerView: 2,
              },
              "960": {
                slidesPerView: 3,
              },
              "1200": {
                slidesPerView: 5,
              },
            }}
            loop={true}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===1?`active`:null}`}  onClick={()=> setIndex(1)} >
                     <p>
                     {t("Qoraqalpog'iston")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>   
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===2?`active`:null}`}  onClick={()=>setIndex(2)}  >
                     <p>
                     {t("Andijon")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===3?`active`:null}`} onClick={()=>setIndex(3)} >
                     <p>
                     {t("Buxoro")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===4?`active`:null}`} onClick={()=>setIndex(4)} >
                     <p>
                     {t("Jizzax")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===5?`active`:null}`} onClick={()=>setIndex(5)} >
                     <p>
                     {t("Qashqadaryo")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===6?`active`:null}`} onClick={()=>setIndex(6)} >
                     <p>
                     {t("Navoi")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===7?`active`:null}`} onClick={()=>setIndex(7)} >
                     <p>
                     {t("Namangan")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===8?`active`:null}`} onClick={()=>setIndex(8)} >
                     <p>
                     {t("Samarqand")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===9?`active`:null}`} onClick={()=>setIndex(9)} >
                     <p>
                     {t("Surxondaryo")}
                 
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===10?`active`:null}`} onClick={()=>setIndex(10)} >
                     <p>
                     {t(" Sirdaryo")}

                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===11?`active`:null}`} onClick={()=>setIndex(11)} >
                     <p>
                     {t(" Toshkent vil")}

                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===12?`active`:null}`} onClick={()=>setIndex(12)} >
                     <p>
                     {t("Farg'ona")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===13?`active`:null}`} onClick={()=>setIndex(13)} >
                     <p>
                     {t("Xorazm")}
                       
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===14?`active`:null}`} onClick={()=>setIndex(14)} >
                     <p>
                     {t("Toshkent sh")}
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
        <div className="sal">
                      <Collapse onChange={callback} defaultActiveKey={[data.length !== 0 ?data[index - 1][0].id:0]} accordion>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, index: any) =>
                                  
                              <Panel className={`${index===number?"Active":''} panel`}  style={{zIndex:-1}} key={index} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className="headId">{index+1}</div>
                              <div style={{zIndex:-1}} className="headName"><BsBuilding color="#133165"/> {item.branchName}</div>
                            </div>}>
<Row>
<Col className="colAcc" md={12} sm={24}>
  <BsPerson  color="#133165" /> {item.branchPresident}
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <AiOutlinePhone  color="#133165" /> {item.phoneNumber}
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <HiOutlineMailOpen  color="#133165" /> {item.email}
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <MdOutlinePlace  color="#133165" /> {item.branchAdress}
  </Col>
</Row>
                             
                            </Panel>
                    
                    ):''
                  }
                    </Collapse>
                    </div>
        </div>
        <div className="komp">
        <Row style={{width:'100%'}}>
<Col style={{padding:'5px'}} lg={6} md={24} sm={24}>
  <ul className={style.ulTab}>
  <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===1?`active`:null}`}  onClick={()=> setIndex(1)} >
                     <p>
                     {t("Qoraqalpog'iston")}
                    </p> 
                 </div>     
              </div>
</li>
<li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===2?`active`:null}`}  onClick={()=>setIndex(2)}  >
                     <p>
                     {t("Andijon")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===3?`active`:null}`} onClick={()=>setIndex(3)} >
                     <p>
                     {t("Buxoro")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===4?`active`:null}`} onClick={()=>setIndex(4)} >
                     <p>
                     {t("Jizzax")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===5?`active`:null}`} onClick={()=>setIndex(5)} >
                     <p>
                     {t("Qashqadaryo")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===6?`active`:null}`} onClick={()=>setIndex(6)} >
                     <p>
                     {t("Navoi")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===7?`active`:null}`} onClick={()=>setIndex(7)} >
                     <p>
                     {t("Namangan")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===8?`active`:null}`} onClick={()=>setIndex(8)} >
                     <p>
                     {t("Samarqand")}
                    </p> 
                 </div>     
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===9?`active`:null}`} onClick={()=>setIndex(9)} >
                     <p>
                     {t("Surxondaryo")}
                 
                    </p> 
                 </div> 
                    </div>      
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===10?`active`:null}`} onClick={()=>setIndex(10)} >
                     <p>
                     {t(" Sirdaryo")}

                    </p> 
                 </div> 
                    </div>      
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===11?`active`:null}`} onClick={()=>setIndex(11)} >
                     <p>
                     {t(" Toshkent vil")}

                    </p> 
                 </div> 
                    </div>      
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===12?`active`:null}`} onClick={()=>setIndex(12)} >
                     <p>
                     {t("Farg'ona")}
                    </p> 
                 </div> 
                        
              </div>
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===13?`active`:null}`} onClick={()=>setIndex(13)} >
                     <p>
                     {t("Xorazm")}
                       
                    </p> 
                 </div>   
                 </div>   
    </li>
    <li>
 <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===14?`active`:null}`} onClick={()=>setIndex(14)} >
                     <p>
                     {t("Toshkent sh")}
                    </p> 
                 </div>     
              </div>
    </li>
  
  </ul>
</Col>
<Col style={{padding:'5px'}} lg={18} md={24} sm={24}>
   
<div className="content" style={{zIndex:'434'}}>
        <table className="content-table table1" >
            <thead style={{backgroundColor:'white', height:'65px', zIndex:343}}  className={style.the}>
                          <tr>
                         <th className={style.id}>
                         <AiOutlineFieldNumber size='2rem' color="#133165"/>

                           </th>    
                <th className={style.name}>
                <BsBuilding  size='2rem' color="#133165"/>
                  </th>
              
                <th className={style.person}>
                <BsPerson  size='2rem' color="#133165" />
                </th>
               
                <th className={style.phone}>
                <AiOutlinePhone  size='2rem' color="#133165" />
                  </th>
                <th className={style.email}>
                <MdOutlinePlace  size='2rem' color="#133165" />
                  </th>
                
              </tr>   
            </thead></table>
<div className={style.op}>
                      <Collapse onChange={callback} defaultActiveKey={[data.length !== 0 ?data[index - 1][0].id:0]} accordion>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, index: any) =>
                                  
                              <Panel className={`${index===number?"Active":''} panel`}  style={{zIndex:-1}} key={index} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className={style.headId}>{index+1}</div>
                              <div style={{zIndex:-1}} className={style.headName}>{item.branchName}</div>
                              <div style={{zIndex:-1}} className={style.headPerson}>{item.branchPresident}</div>
                              <div style={{zIndex:-1}} className={style.headPhone}>{item.phoneNumber}</div>
                              <div style={{zIndex:-1}} className={style.headEmail}>{item.email}</div>
                            </div>}>

                              <p className={style.Add}> {item.branchAdress}</p>
                            </Panel>
                    
                    ):''
                  }
                    </Collapse>
                    </div>
        </div>

        
</Col>
        </Row>
        </div>
      
                    
                   

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}
export default Contacts;
