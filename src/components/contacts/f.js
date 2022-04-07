import React, { useState , useEffect } from "react";
//import ReactExport from "react-data-export";
import { PageTitle } from "../ui/PageTitle";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./assets/contacts.scss";
import style from  "./assets/style.module.css";
import styles from  "./assets/tel.module.css";
import { useTranslation } from 'react-i18next';
import http from "../ui/Services";
import logo from '../home/assets/logo.gif'

// import BounceLoader from "react-spinners/BounceLoader";



//const ExcelFile = ReactExport.ExcelFile
//const ExcelSheet = ReactExport.ExcelFile.ExcelSheet

SwiperCore.use([Navigation, Autoplay]);


function Contacts() {
  const [index, setIndex]= useState(1)
  const {t} = useTranslation();
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
      setLoader(false)
      
  }
  
useEffect(()=>{
    getContacts();
  },[])
  
  
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
       
        {/*<ExcelFile filename={*/}
        {/*  index===1?"Qoraqalpog'iston":index===2?"Andijon":index===3?"Buxoro":index===4?"Jizzax":index===5?"Qashqadaryo":index===6?"Navoi":index===7?"Namangan":index===8?"Samarqand":index===9?"QORAQALPOG'ISTON":index===10?"Surxondaryo":index===11?"Sirdaryo":index===12?"Toshkent vil":index===13?"Farg'ona":index===14?"Toshkent sh":""*/}
        {/*}*/}
        {/*element={<button className={style.but}>Excel faylni ko'chirish</button>}>*/}
        {/*  <ExcelSheet dataSet={DataSet} name={*/}
        {/*  index===1?"Qoraqalpog'iston":index===2?"Andijon":index===3?"Buxoro":index===4?"Jizzax":index===5?"Qashqadaryo":index===6?"Navoi":index===7?"Namangan":index===8?"Samarqand":index===9?"QORAQALPOG'ISTON":index===10?"Surxondaryo":index===11?"Sirdaryo":index===12?"Toshkent vil":index===13?"Farg'ona":index===14?"Toshkent sh":""*/}
        {/*}></ExcelSheet>*/}
        {/*</ExcelFile>*/}
        <div className="content komp">
        <table className="content-table table1" >
            <thead  className={style.the}>
                          <tr>
                         <th  className={style.id}>
                         {t("T/r")}
                           </th>    
                <th className={style.name}>
                {t("Tashkilot nomi")}
                  </th>
              
                <th className={style.person}>
                  {t("Rahbar")}
                </th>
                <th className={style.address}>
                {t("Manzil")}</th>
                <th className={style.phone}>
                {t("Telefon")}
                  </th>
                <th className={style.email}>
                {t("Email")}
                  </th>
                
              </tr>   
            </thead></table>

          <table className="content-table">
           
                      <tbody className={style.tab}>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, index: any) =>
                                  <tr style={{ padding: '20px' }} key={index}>
                                      <td className={style.id}>{index+1}</td>
                                      <td className={style.name}>{item.branchName}</td>
                                      <td className={style.person}>{item.branchPresident}</td>
                                      <td className={style.address}><p className={style.bir}>
                                        
                                        {item.branchAdress!==null?item.branchAdress.substring(0, 30):''}</p><div className={style.ikki}>
                                          {item.branchAdress}</div></td>
                                     
                                      <td className={style.phone}>{item.phoneNumber}</td>
                                      <td className={style.email}>{item.email}</td>
                    
                    </tr>
                    ):''
                  }
                  
            </tbody>
          </table>
        </div>
        <div className="tel">
        <div className={styles.table_wrapper}>
    <table className={styles.fl_table}>
    <thead>
                          <tr>
                         <th >
                         {t("T/r")}
                           </th>    
                <th>
                {t("Tashkilot nomi")}
                  </th>
                <th>
                {t("Manzil")}</th>
                <th>
                  {t("Ism")}
                </th>
                <th>
                {t("Telefon")}
                  </th>
                <th>
                {t("Email")}
                  </th>
                
              </tr>   
            </thead>
            <tbody>
                          {
                              data.length !== 0 ? data[index - 1].map((item: any, index: any) =>
                                  <tr style={{ padding: '20px' }} key={index}>
                                      <td>{index+1}</td>
                                      <td>{item.branchName}</td>
                                      <td><p>
                                        {item.branchAdress!==null?item.branchAdress.substring(0, 30):''}</p><div>
                                          {item.branchAdress}</div></td>
                                      <td>{item.branchPresident}</td>
                                      <td>{item.phoneNumber}</td>
                                      <td>{item.email}</td>
                    
                    </tr>
                    ):''
                  }
                  
            </tbody>
    </table>
</div>
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
