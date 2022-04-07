import React, { useEffect, useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import "./assets/header-slider.scss"

import logo1 from './assets/photo1.jpg'
import logo from './assets/logo.gif'
import { useTranslation } from 'react-i18next';
import style from './assets/Coorparation.module.css'
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import card1 from '../leaders/assets/user.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, Navigate } from 'react-router-dom';
import { api, region, regionI } from '../../../host';
import http from '../../ui/Services';

const responsive1 = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop1: {
    breakpoint: { max: 3000, min: 1500 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 664 },
    items: 3,
  },
  mobile1: {
    breakpoint: { max: 664, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Cooperation=()=> {
  const {t} = useTranslation();
  const [prava, setprava]=useState<any>(null)
  const [kasb, setkasb]=useState<any>(null)
  const [sport, setsport]=useState<any>(null)
  const [loader, setLoader] = useState(true)
  const [error, seterror] = useState(false)
  const [data, setdata] = useState<any>(null)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 0)
  }

  useEffect(()=>{
    var id=window.location.href.split("/")[window.location.href.split("/").length-1]
   
    if(!(/^[\wа-я]*$/.test(id.split('/')[id.split('/').length-1]))){
       window.location.href=api+'/error'

    }
    http.get<any>(`GetApi/GetOrganizationProfessionSections/${id}/`).then(res=>{
      setkasb(res.data)
    }).catch(err=>{
      seterror(true)
    })
    http.get<any>(`GetApi/GetOrganizationSportSections/${id}/`).then(res=>{
      setsport(res.data)
     
      loaderT()
    })
    http.get<any>(`GetApi/GetOrganizationCategories/${id}/`).then(res=>{
      setprava(res.data)
      
    })
    http.get(`/GetApi/GetBranchContacts/`)
    .then((res) => {
      var a=[]
      a.push(res.data.filter((data: any) => data.regionId === regionI))
    setdata(a)
    console.log(a)
  
    })
      
    
  }, [])
  return (
    <Image.PreviewGroup>
      {  error?<Navigate to="/error" />:
      <>
      <div className="hamkorlik">
      {loader?<div className="loaderG">
      <div className="befG">
  <img src={logo} alt="..."/>
  </div>
  
  </div>
  :''}
          <div className="container">
              <PageTitle title={t('Fillial haqida')}/>
              <div className="containerr">
                  <div className="hamkorlik-info">
                  <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
              <div
                        className="swiper-slide_body"
                       style={{
                     
                          display:'flex',
                          alignItems:'center',
                    
                          
                       }}
                      >
                        <Image className='red' style={{height:'auto', width:"100%" }} src={{}}/>  
                      </div>
                      </SwiperSlide></Swiper>
                     <p>{t('xamq')}</p>  
                     <p>{t('xamw')}</p>
                     <p>{t('xame')}</p>
                     <p>{t('xamr')}</p>
                  </div>
                
                  {/* <Row>
                  <Col style={{ padding:'40px 60px'}} xl={8} lg={8} md={12} sm={24}>
                      <div className={style.card}>
<div className={style.blue}></div>

<div className={style.img}>
    <img src={item.image!==null?item.image:card1}/>


</div>
<h1>O'q otish sporti</h1>
<ul>
    <li> - xizmat itlari bilan ko'pkurash</li>
    <li> - xizmat itlari bilan ko'pkurash</li>
    <li> - xizmat itlari bilan ko'pkurash</li>
    <li> - xizmat itlari bilan ko'pkurash</li>
</ul>
                      </div>
                  </Col>
          
                 
          

              </Row> */}
             
{/* <Carousel
style={{justifyContent:'center'}}
swipeable={false}
draggable={false}
showDots={true}
responsive={responsive}
ssr={true} // means to render carousel on server-side.
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}
keyBoardControl={true}
customTransition="all .5"
transitionDuration={500}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet", "mobile"]}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
>
<div style={{ padding:'40px 60px'}} >
<div className={style.card}>
<div className={style.blue}></div>

<div className={style.img}>
<img src={item.image!==null?item.image:card1}/>


</div>
<h1>O'q otish sporti</h1>
<ul>
<li> - xizmat itlari bilan ko'pkurash</li>
<li> - xizmat itlari bilan ko'pkurash</li>
<li> - xizmat itlari bilan ko'pkurash</li>
<li> - xizmat itlari bilan ko'pkurash</li>
</ul>
        </div>
</div>

</Carousel>
<br/><br/><br/> */}

                
              </div>
             
          </div>
     
      </div>
      <div style={{padding:'40px'}}>
      <PageTitle title={t("Sport to'garaklari")}/>
<Carousel
            
            swipeable={true}     
   showDots={true}
   responsive={responsive1}
   ssr={true} // means to render carousel on server-side.
   infinite={true}
   autoPlay={true}
   autoPlaySpeed={2000}
   
   containerClass="carousel-container"
   dotListClass="custom-dot-list-style"
   itemClass="carousel-item-padding-40-px"
   >
   {sport!==null?sport.map((item:any)=>{
     return(<div  style={{ padding:'40px 10px'}}>
     <div className={style.card2}>
       {/* <div className={style.lenta}>Chegirma !!!</div> */}
   <div className={style.img1}>
   <img alt="..." src={item.image!==null?item.image:card1}/>
   
   
   </div>
   <p className={style.narx}><b>{t("Bepul")}</b></p>
   <h1>{t("check")?item.nameUz!==null?item.nameUz:item.nameRu:item.nameRu!==null?item.nameRu:item.nameUz}</h1>
   
   <ul>
     {item.sportSections!==null && item.sportSections.length!==0?item.sportSections.map((item1:any)=>{
return( <li>{t("check")?item1.nameUz!==null?item1.nameUz:item1.nameRu:item1.nameRu!==null?item1.nameRu:item1.nameUz}</li>)
     }):''}
   
   </ul>
   <Link to="/" className={style.but}>Ariza yuborish</Link>
     </div>
   </div>)
   }):<div></div>}
   
   
   </Carousel>
<br/><br/><br/><br/>
              <br/>
      <PageTitle title={t("Haydovchilik guvohnomasiga tayyorlash")}/>
      <Carousel
            
            swipeable={true}     
   showDots={true}
   responsive={responsive1}
   ssr={true} // means to render carousel on server-side.
   infinite={true}
   autoPlay={true}
   autoPlaySpeed={2000}
   
   containerClass="carousel-container"
   dotListClass="custom-dot-list-style"
   itemClass="carousel-item-padding-40-px"
   >
   {prava!==null?prava.map((item:any)=>{
     return(<div  style={{ padding:'40px 10px'}}>
     <div className={style.card1}>
       {/* <div className={style.lenta}>Chegirma !!!</div> */}
   <div className={style.img1}>
   <img alt="..." src={item.image!==null?item.image:card1}/>
   
   
   </div>
   <p className={style.narx}><b>{item.price===null?t("Bepul"):item.price+" so'm"}</b></p>
   <h1>{t("check")?item.nameUz!==null?item.nameUz:item.nameRu:item.nameRu!==null?item.nameRu:item.nameUz}</h1>
   <h3>3 oy</h3>
   
   <Link to="/" className={style.but}>Ariza yuborish</Link>
     </div>
   </div>)
   }):<div></div>}
   
   
   </Carousel>
<br/><br/><br/>
<br/>
<PageTitle title={t("Kasbga tayyorlash")}/>
              <Carousel
            
         swipeable={true}     
showDots={true}
responsive={responsive1}
ssr={true} // means to render carousel on server-side.
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}

containerClass="carousel-container"
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
>
{kasb!==null?kasb.map((item:any)=>{
  return(<div  style={{ padding:'40px 10px'}}>
  <div className={style.card3}>
    {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img alt="..." src={item.image!==null?item.image:card1}/>


</div>
<p className={style.narx}><b>{item.price===null?t("Bepul"):item.price+" so'm"}</b></p>
<h1>{t("check")?item.nameUz!==null?item.nameUz:item.nameRu:item.nameRu!==null?item.nameRu:item.nameUz}</h1>
<h3>3 oy</h3>

<Link to="/" className={style.but}>Ariza yuborish</Link>
  </div>
</div>)
}):<div></div>}


</Carousel>
<br/><br/><br/>
<br/>

                  <br/>
<br/></div>
</>
}      </Image.PreviewGroup>
  );
}

export default  Cooperation;
