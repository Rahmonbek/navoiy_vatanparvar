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
import {Row, Col, Collapse, Tooltip} from 'antd'
import { BsBank, BsBuilding,  BsEnvelope,  BsFillEnvelopeFill,  BsFillTelephoneFill,  BsPerson } from "react-icons/bs";
import {  AiOutlineFieldNumber, AiOutlinePhone } from "react-icons/ai";
import {  GiBanknote, GiMailbox, GiReceiveMoney } from "react-icons/gi";
import { MdFormatListNumbered, MdOutlinePlace } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiBankCard2Line, RiBankCardFill, RiBankFill } from "react-icons/ri";
import { FaBuilding, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { region, regionI } from "../../host";

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
  const[regionD , setRegionD] = useState<any[]>([])

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
    await http.get('GetApi/GetRegionDContacts')
    .then((res) => {
       var b=[]
       console.log(res.data)
       b.push(res.data.filter((data: any) => data.regionId === region))

    
       setRegionD(b)
  
    })
    .catch(e => console.log(e))
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
        
        
        <div className="sal">
                      <Collapse onChange={callback} accordion>
                      <Panel className={`${0===Number(number)?"Active":''} panel`}  style={{zIndex:-1}} key={0} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className={style.headId}>{1}</div>
                              <div style={{zIndex:-1}} className={style.headName}> {regionD.length!==0?t('check')?regionD[index - 1][0].regionDName:regionD[index - 1][0].regionDNameRu:''}</div>
                             </div>}>
                             <Row>
<Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <BsPerson size='1.3rem'  color="#133165" /><span className="salomText">{regionD.length!==0?t('check')?(regionD[index - 1][0].regionDPresident && regionD[index - 1][0].regionDPresident!==null?regionD[index - 1][0].regionDPresident:regionD[index - 1][0].regionDPresidentRu && regionD[index - 1][0].regionDPresidentRu!==null?regionD[index - 1][0].regionDPresidentRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):regionD[index - 1][0].regionDPresidentRu && regionD[index - 1][0].regionDPresidentRu!==null?regionD[index - 1][0].regionDPresidentRu:regionD[index - 1][0].regionDPresident && regionD[index - 1][0].regionDPresident!==null?regionD[index - 1][0].regionDPresident:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:''}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <AiOutlinePhone size='1.3rem'  color="#133165" /><span className="salomText">{regionD.length!==0?regionD[index - 1][0].phoneNumber===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].phoneNumber:''}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <HiOutlineMailOpen size='1.3rem'  color="#133165" /><span className="salomText">{regionD.length!==0?regionD[index - 1][0].email==="null"?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].email:''}</span>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
<Tooltip placement="left" title={t("Bank nomi")}><RiBankFill  color="#133165" size='1.4rem' /> <span className="salomText">{regionD.length!==0?t('check')?(regionD[index - 1][0].bankName && regionD[index - 1][0].bankName!==null?regionD[index - 1][0].bankName:regionD[index - 1][0].bankNameRu && regionD[index - 1][0].bankNameRu!==null?regionD[index - 1][0].bankNameRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):regionD[index - 1][0].bankNameRu && regionD[index - 1][0].bankNameRu!==null?regionD[index - 1][0].bankNameRu:regionD[index - 1][0].bankName && regionD[index - 1][0].bankName!==null?regionD[index - 1][0].bankName:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:''}</span></Tooltip>
  </Col>
 
  
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Tashkilot manzili")}><FaMapMarkerAlt  color="#133165" size='1.4rem' />  <span className="salomText">{regionD.length!==0?t('check')?(regionD[index - 1][0].regionDAdress && regionD[index - 1][0].regionDAdress!==null?regionD[index - 1][0].regionDAdress:regionD[index - 1][0].regionDAdressRu && regionD[index - 1][0].regionDAdressRu!==null?regionD[index - 1][0].regionDAdressRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):regionD[index - 1][0].regionDAdressRu && regionD[index - 1][0].regionDAdressRu!==null?regionD[index - 1][0].regionDAdressRu:regionD[index - 1][0].regionDAdress && regionD[index - 1][0].regionDAdress!==null?regionD[index - 1][0].regionDAdress:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:''}</span></Tooltip>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Tashkilot hisob raqami")}><RiBankCardFill  color="#133165" size='1.4rem' /> <span className="salomText">{regionD.length!==0?regionD.length!==0?regionD[index - 1][0].bankAccount===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].bankAccount.slice(0, 4)+" "+regionD[index - 1][0].bankAccount.slice(4, 8)+" "+regionD[index - 1][0].bankAccount.slice(8, 12)+" "+regionD[index - 1][0].bankAccount.slice(12, 16)+" "+regionD[index - 1][0].bankAccount.slice(16, 20):'':''}</span></Tooltip>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("INN")}><b style={{color:'#133165'}}>INN</b> <span style={{top:'0px'}} className="salomText">{regionD.length!==0?regionD.length!==0?regionD[index - 1][0].inn===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].inn.slice(0, 3)+" "+regionD[index - 1][0].inn.slice(3, 6)+" "+regionD[index - 1][0].inn.slice(6, 9):'':''}</span></Tooltip>
  </Col>
 
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("MFO")}> <b style={{color:'#133165'}}>MFO</b> <span style={{top:'0px'}} className="salomText">{regionD.length!==0?regionD.length!==0?regionD[index - 1][0].bankMfo===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].bankMfo:'':''}</span></Tooltip>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Pochta indeks")}><BsFillEnvelopeFill color="#133165" size='1.4rem'/> <span className="salomText">{regionD.length!==0?regionD.length!==0?regionD[index - 1][0].mailIndex===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].mailIndex:'':''}</span></Tooltip>
  </Col>
  
</Row>
  </Panel>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, key: any) =>
                                  
                              <Panel className={`${key-1===Number(number)?"Active":''} panel`}  style={{zIndex:-1}} key={key+1} header={
                                <div className={style.headAcc}>
                                <div style={{zIndex:-1}} className="headId">{key+2}</div>
                                <div style={{zIndex:-1}} className="headName"><BsBuilding color="#133165"/> {t('check')?item.branchName:item.branchNameRu}</div>
                              </div>}>
  <Row>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <BsPerson size='1.3rem'  color="#133165" /><span className="salomText"> {t('check')?item.branchPresident===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.branchPresident:item.branchPresidentRu===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.branchPresidentRu}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <AiOutlinePhone size='1.3rem'  color="#133165" /><span className="salomText"> {item.phoneNumber===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.phoneNumber}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <HiOutlineMailOpen size='1.3rem'  color="#133165" /><span className="salomText"> {item.email==="null"?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.email}</span>
  </Col>

 
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <RiBankFill  color="#133165" size='1.3rem' /> <span className="salomText">{t('check')?item.bankName===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.bankName:item.bankNameRu===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.bankNameRu}</span>
  </Col>
 
  
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <FaMapMarkerAlt  color="#133165" size='1.3rem' />  <span className="salomText">{t('check')?item.branchAdress===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.branchAdress:item.branchAdressRu===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.branchAdressRu}</span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <RiBankCardFill  color="#133165" size='1.3rem' /> <span className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.bankAccount.slice(0, 4)+" "+item.bankAccount.slice(4, 8)+" "+item.bankAccount.slice(8, 12)+" "+item.bankAccount.slice(12, 16)+" "+item.bankAccount.slice(16, 20)} </span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <b style={{color:'#133165'}}>INN</b> <span style={{top:'0px'}} className="salomText">{item.inn===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.inn.slice(0, 3)+" "+item.inn.slice(3, 6)+" "+item.inn.slice(6, 9)} </span>
  </Col>
 
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
   <b style={{color:'#133165'}}>MFO</b> <span style={{top:'0px'}} className="salomText">{item.bankMfo===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.bankMfo} </span>
  </Col>
  <Col style={{padding:'10px'}} className="colAcc" md={12} sm={24}>
  <BsFillEnvelopeFill color="#133165" size='1.3rem'/> <span className="salomText">{item.mailIndex===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.mailIndex} </span>
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

<Col style={{padding:'5px'}} lg={24} md={24} sm={24}>
     
<div className="content">
        <table className="content-table table1" >
            <thead style={{backgroundColor:'white', height:'65px',}}  className={style.the}>
                          <tr>
                         <th className={style.id}>
                          <Tooltip placement="top" title={t("Tartib raqam")}>
                         <MdFormatListNumbered size='2rem' color="#133165"/>
                         </Tooltip>

                           </th>    
                <th className={style.name}>
                 <Tooltip placement="top" title={t("Tashkilot nomi")}>
                <FaBuilding  size='2rem' color="#133165"/>
                </Tooltip>
                  </th>
              
                <th className={style.person} style={{paddingLeft:'40px'}}>
                 <Tooltip placement="top" title={t("Tashkilot rahbari")}>
                <ImUserTie  size='2.1rem' color="#133165" />
                </Tooltip>
                </th>
               
                <th className={style.phone}>
                 <Tooltip placement="top" title={t("Telefon raqam")}>
                <BsFillTelephoneFill size='2rem' color="#133165" />
                </Tooltip>
                  </th>
                <th className={style.email}>
                 <Tooltip placement="top" title={t("E-mail")}>
                <BsFillEnvelopeFill  size='2rem' color="#133165" />
                </Tooltip>
                  </th>
                
              </tr>   
            </thead></table>
<div className={style.op}>
                      <Collapse onChange={callback} accordion>
                      <Panel className={`${0===Number(number)?"Active":''} panel`}  style={{zIndex:-1}} key={0} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className={style.headId}>{1}</div>
                              <div style={{zIndex:-1}} className={style.headName}> {regionD.length!==0?t('check')?regionD[index - 1][0].regionDName:regionD[index - 1][0].regionDNameRu:''}</div>
                              <div style={{zIndex:-1}} className={style.headPerson}>{regionD.length!==0?t('check')?regionD[index - 1][0].regionDPresident:regionD[index - 1][0].regionDPresidentRu:''}</div>
                              <div style={{zIndex:-1}} className={style.headPhone}>{regionD.length!==0?regionD[index - 1][0].phoneNumber===null?"-":regionD[index - 1][0].phoneNumber:''}</div>
                              <div style={{zIndex:-1}} className={style.headEmail}>{regionD.length!==0?regionD[index - 1][0].email==="null"?"-":regionD[index - 1][0].email:''}</div>
                            </div>}>
                            <Row>
                            <Col className="colAcc" md={12} sm={24}>
<Tooltip placement="left" title={t("Bank nomi")}><RiBankFill  color="#133165" size='1.4rem' /> <span className="salomText">{regionD.length!==0?t('check')?(regionD[index - 1][0].bankName && regionD[index - 1][0].bankName!==null?regionD[index - 1][0].bankName:regionD[index - 1][0].bankNameRu && regionD[index - 1][0].bankNameRu!==null?regionD[index - 1][0].bankNameRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):regionD[index - 1][0].bankNameRu && regionD[index - 1][0].bankNameRu!==null?regionD[index - 1][0].bankNameRu:regionD[index - 1][0].bankName && regionD[index - 1][0].bankName!==null?regionD[index - 1][0].bankName:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:''}</span></Tooltip>
  </Col>
<Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Tashkilot manzili")}><FaMapMarkerAlt  color="#133165" size='1.4rem' />  <span className="salomText">{regionD.length!==0?t('check')?(regionD[index - 1][0].regionDAdress && regionD[index - 1][0].regionDAdress!==null?regionD[index - 1][0].regionDAdress:regionD[index - 1][0].regionDAdressRu && regionD[index - 1][0].regionDAdressRu!==null?regionD[index - 1][0].regionDAdressRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):regionD[index - 1][0].regionDAdressRu && regionD[index - 1][0].regionDAdressRu!==null?regionD[index - 1][0].regionDAdressRu:regionD[index - 1][0].regionDAdress && regionD[index - 1][0].regionDAdress!==null?regionD[index - 1][0].regionDAdress:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:''}</span></Tooltip>
  </Col>
<Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Tashkilot hisob raqami")}><RiBankCardFill  color="#133165" size='1.4rem' /> <span className="salomText">{regionD.length!==0?regionD[index - 1][0].bankAccount===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].bankAccount.slice(0, 4)+" "+regionD[index - 1][0].bankAccount.slice(4, 8)+" "+regionD[index - 1][0].bankAccount.slice(8, 12)+" "+regionD[index - 1][0].bankAccount.slice(12, 16)+" "+regionD[index - 1][0].bankAccount.slice(16, 20):''}</span></Tooltip>
  </Col>
<Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("INN")}><b style={{color:'#133165'}}>INN</b> <span style={{top:'0px'}} className="salomText">{regionD.length!==0?regionD[index - 1][0].inn===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].inn.slice(0, 3)+" "+regionD[index - 1][0].inn.slice(3, 6)+" "+regionD[index - 1][0].inn.slice(6, 9):''}</span></Tooltip>
  </Col>
<Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("MFO")}> <b style={{color:'#133165'}}>MFO</b> <span style={{top:'0px'}} className="salomText">{regionD.length!==0?regionD[index - 1][0].bankMfo===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].bankMfo:''}</span></Tooltip>
  </Col>
<Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Pochta indeks")}><BsFillEnvelopeFill color="#133165" size='1.4rem'/> <span className="salomText">{regionD.length!==0?regionD[index - 1][0].mailIndex===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:regionD[index - 1][0].mailIndex:''}</span></Tooltip>
  </Col>
  
</Row>
                            </Panel>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, key: any) =>
                                  {
                                    
                                    return(
                              <Panel className={`${key-1===Number(number)?"Active":''} panel`}  style={{zIndex:-1}} key={key+1} header={
                              <div className={style.headAcc}>
                              <div style={{zIndex:-1}} className={style.headId}>{key+2}</div>
                              <div style={{zIndex:-1}} className={style.headName}> {t('check')?item.branchName:item.branchNameRu}</div>
                              <div style={{zIndex:-1}} className={style.headPerson}>{item.branchPresident===null?"-":item.branchPresident}</div>
                              <div style={{zIndex:-1}} className={style.headPhone}>{item.phoneNumber===null?"-":item.phoneNumber}</div>
                              <div style={{zIndex:-1}} className={style.headEmail}>{item.email==="null"?"-":item.email}</div>
                            </div>}>
                            <Row>
                            <Col className="colAcc" md={12} sm={24}>
<Tooltip placement="left" title={t("Bank nomi")}><RiBankFill  color="#133165" size='1.3rem' /> <span className="salomText">{t('check')?(item.bankName && item.bankName!==null?item.bankName:item.bankNameRu && item.bankNameRu!==null?item.bankNameRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):item.bankNameRu && item.bankNameRu!==null?item.bankNameRu:item.bankName && item.bankName!==null?item.bankName:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>}</span></Tooltip>
  </Col>
 
  
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Tashkilot manzili")}><FaMapMarkerAlt  color="#133165" size='1.3rem' />  <span className="salomText">{t('check')?(item.branchAdress && item.branchAdress!==null?item.branchAdress:item.branchAdressRu && item.branchAdressRu!==null?item.branchAdressRu:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>):item.branchAdressRu && item.branchAdressRu!==null?item.branchAdressRu:item.branchAdress && item.branchAdress!==null?item.branchAdress:<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>}</span></Tooltip>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Tashkilot hisob raqami")}><RiBankCardFill  color="#133165" size='1.3rem' /> <span className="salomText">{item.bankAccount===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.bankAccount.slice(0, 4)+" "+item.bankAccount.slice(4, 8)+" "+item.bankAccount.slice(8, 12)+" "+item.bankAccount.slice(12, 16)+" "+item.bankAccount.slice(16, 20)} </span></Tooltip>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("INN")}><b style={{color:'#133165'}}>INN</b> <span style={{top:'0px'}} className="salomText">{item.inn===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.inn.slice(0, 3)+" "+item.inn.slice(3, 6)+" "+item.inn.slice(6, 9)} </span></Tooltip>
  </Col>
 
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("MFO")}><b style={{color:'#133165'}}>MFO</b> <span style={{top:'0px'}} className="salomText">{item.bankMfo===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.bankMfo} </span></Tooltip>
  </Col>
  <Col className="colAcc" md={12} sm={24}>
  <Tooltip placement="left" title={t("Pochta indeks")}><BsFillEnvelopeFill color="#133165" size='1.3rem'/> <span className="salomText">{item.mailIndex===null?<span style={{color:'#a2a0a0'}}>{t("Ma'lumot mavjud emas")}</span>:item.mailIndex} </span></Tooltip>
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
