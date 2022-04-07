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
import { BsBank, BsBuilding,  BsEnvelope,  BsFillEnvelopeFill,  BsFillTelephoneFill,  BsPerson } from "react-icons/bs";
import {  AiOutlineFieldNumber, AiOutlinePhone } from "react-icons/ai";
import {  GiBanknote, GiMailbox, GiReceiveMoney } from "react-icons/gi";
import { MdFormatListNumbered, MdOutlinePlace } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiBankCard2Line, RiBankCardFill, RiBankFill } from "react-icons/ri";
import { FaBuilding, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { regionI } from "../../host";

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
     
     
      a.push(res.data.filter((data: any) => data.regionId === regionI))
     

      setData(a)

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
                      <Collapse onChange={callback} accordion>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, key: any) =>
                                  
                              <Panel className={`${key===Number(number)?"Active":''} panel`}  style={{zIndex:-1}} key={key} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className="headId">{key+1}</div>
                              <div style={{zIndex:-1}} className="headName"><BsBuilding color="#133165"/> {t('check')?item.branchName:item.branchNameRu}</div>
                            </div>}>
<Row>
<Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <BsPerson size='1.3rem'  color="#133165" /><span className="salomText"> {item.ranchPresident===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.ranchPresident}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <AiOutlinePhone size='1.3rem'  color="#133165" /><span className="salomText"> {item.phoneNumber===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.phoneNumber}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <HiOutlineMailOpen size='1.3rem'  color="#133165" /><span className="salomText"> {item.email==="null"?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.email}</span>
  </Col>

 
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <RiBankFill  color="#133165" size='1.3rem' /> <span className="salomText">{item.bankName===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.bankName}</span>
  </Col>
 
  
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <FaMapMarkerAlt  color="#133165" size='1.3rem' />  <span className="salomText">{item.branchAdress===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.branchAdress}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <RiBankCardFill  color="#133165" size='1.3rem' /> <span className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.bankAccount.slice(0, 4)+" "+item.bankAccount.slice(4, 8)+" "+item.bankAccount.slice(8, 12)+" "+item.bankAccount.slice(12, 16)+" "+item.bankAccount.slice(16, 20)} </span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <b style={{color:'#133165'}}>INN</b> <span style={{top:'0px'}} className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.inn.slice(0, 3)+" "+item.inn.slice(3, 6)+" "+item.inn.slice(6, 9)} </span>
  </Col>
 
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
   <b style={{color:'#133165'}}>MFO</b> <span style={{top:'0px'}} className="salomText">{item.bankMfo===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.bankMfo} </span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <BsFillEnvelopeFill color="#133165" size='1.3rem'/> <span className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.mailIndex} </span>
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
   
<h1 style={{fontSize:'25px', paddingTop:'18px'}}>{t("Viloyatlar")}</h1>
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
   
<div className="content">
        <table className="content-table table1" >
            <thead style={{backgroundColor:'white', height:'65px',}}  className={style.the}>
                          <tr>
                         <th className={style.id}>
                         <MdFormatListNumbered size='2rem' color="#133165"/>

                           </th>    
                <th className={style.name}>
                <FaBuilding  size='2rem' color="#133165"/>
                  </th>
              
                <th className={style.person} style={{paddingLeft:'40px'}}>
                <ImUserTie  size='2.1rem' color="#133165" />
                </th>
               
                <th className={style.phone}>
                <BsFillTelephoneFill size='2rem' color="#133165" />
                  </th>
                <th className={style.email}>
                <BsFillEnvelopeFill  size='2rem' color="#133165" />
                  </th>
                
              </tr>   
            </thead></table>
<div className={style.op}>
                      <Collapse onChange={callback} accordion>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, key: any) =>
                                  {
                                    
                                    return(
                              <Panel className={`${key===Number(number)?"Active":''} panel`}  style={{zIndex:-1}} key={key} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className={style.headId}>{key+1}</div>
                              <div style={{zIndex:-1}} className={style.headName}> {t('check')?item.branchName:item.branchNameRu}</div>
                              <div style={{zIndex:-1}} className={style.headPerson}>{item.branchPresident===null?"-":item.branchPresident}</div>
                              <div style={{zIndex:-1}} className={style.headPhone}>{item.phoneNumber===null?"-":item.phoneNumber}</div>
                              <div style={{zIndex:-1}} className={style.headEmail}>{item.email==="null"?"-":item.email}</div>
                            </div>}>
                            <Row>
<Col className="colAcc" md={12} sm={24}>
  <RiBankFill  color="#133165" size='1.4rem' /> <span className="salomText">{item.bankName===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.bankName}</span>
  </Col>
 
  
  <Col className="colAcc" md={12} sm={24}>
  <FaMapMarkerAlt  color="#133165" size='1.4rem' />  <span className="salomText">{item.branchAdress===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.branchAdress}</span>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <RiBankCardFill  color="#133165" size='1.4rem' /> <span className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.bankAccount.slice(0, 4)+" "+item.bankAccount.slice(4, 8)+" "+item.bankAccount.slice(8, 12)+" "+item.bankAccount.slice(12, 16)+" "+item.bankAccount.slice(16, 20)} </span>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <b style={{color:'#133165'}}>INN</b> <span style={{top:'0px'}} className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.inn.slice(0, 3)+" "+item.inn.slice(3, 6)+" "+item.inn.slice(6, 9)} </span>
  </Col>
 
  <Col className="colAcc" md={12} sm={24}>
   <b style={{color:'#133165'}}>MFO</b> <span style={{top:'0px'}} className="salomText">{item.bankMfo===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.bankMfo} </span>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <BsFillEnvelopeFill color="#133165" size='1.4rem'/> <span className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>Ma'lumot mavjud emas</span>:item.mailIndex} </span>
  </Col>
  
</Row>
                            </Panel>
                    )}
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
