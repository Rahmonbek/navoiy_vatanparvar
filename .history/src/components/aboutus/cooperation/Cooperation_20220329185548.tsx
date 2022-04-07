import React, { useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import "./assets/header-slider.scss"

import logo from './assets/photo1.jpg'
import { useTranslation } from 'react-i18next';
import style from './assets/Coorparation.module.css'
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import card1 from './assets/motosport.png'
import {Row, Col} from 'antd'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
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

function Cooperation() {
  const {t} = useTranslation();
  const [loader, setLoader] = useState(true)
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 0)
  }
  return (
    <Image.PreviewGroup>
      <div className="hamkorlik" onLoad={()=>{loaderT()}}>
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
                        <Image className='red' style={{height:'auto', width:"100%" }} src={logo}/>  
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
    <img src={card1}/>


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
<img src={card1}/>


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
<div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>

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
<div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>

</Carousel>
<br/><br/><br/>
<br/>
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
<div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>

<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>

<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>
  <div  style={{ padding:'40px 10px'}}>
    <div className={style.card1}>
      {/* <div className={style.lenta}>Chegirma !!!</div> */}
<div className={style.img1}>
<img src={card1}/>


</div>
<p className={style.narx}><b>Bepul</b></p>
<h1>Elektrogaz payvandchi</h1>
<ul>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
<li>guruhli parashut akrobatikasi</li>
<li>xizmat itlari bilan ko'pkurash</li>
</ul>
<Link to="/" className={style.but}>Ariza yuborish</Link>
    </div>
  </div>

</Carousel>
<br/><br/><br/><br/>
              <br/>
                  <br/>
<br/></div>
      </Image.PreviewGroup>
  );
}

export default  Cooperation;
