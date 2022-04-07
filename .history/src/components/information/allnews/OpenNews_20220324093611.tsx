import React from 'react'
import { useEffect, useState } from 'react';
import { Image } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./assets/OpenNews.scss";
import { Link, useParams } from 'react-router-dom';
import http from '../../ui/Services';
import { MdVisibility } from 'react-icons/md';
import { MdOutlineDateRange } from 'react-icons/md';
import { FcShare } from 'react-icons/fc';
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { api, region, url, urlV } from '../../../host';




function OpenNews() {
    const { t } = useTranslation();
    const [data, setData] = useState<any>({})
    const [news, setnews] = useState<any>([])
   
    const params = useParams();
    const { id } = params;
    const [idT, setidT] = useState<any>(id)

  
    //    @ts-ignore
    const getOpenNews=(id)=>{
      
        http.get<any>(`/GetApi/GetNewsById/${id}`)
          .then((res)=>{
              var config=res.data
            var textUz=config.mainTextUz  
            var textRu=config.mainTextRu
            var date=config.newsDate.substring(0, 10)
            var d=date.substring(8, 10)+'.'+date.substring(5, 7)+'.'+date.substring(0, 4)
            config.newsDate=d
            var Uz=""  
            var Ru=""  
            textUz.split("</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>").map((item:any)=>{
                Uz+=item+"<br/><br/>"
                            })
                            textRu.split("</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>").map((item:any)=>{
                                Ru+=item+"<br/><br/>"
                                            })
                                            textUz=""
                                            textRu=""
            Uz.split("</p>\r\n\r\n<p>").map((item:any)=>{
                
                textUz+=item+"<br/>"
                            })
                            Ru.split("</p>\r\n\r\n<p>").map((item:any)=>{
                                textRu+=item+"<br/>"
                                            })

                                                                            config.mainTextUz=textUz
                                                                            config.mainTextRu=textRu
            setData(config); console.log(config)})
           .catch(e =>console.log(e))
           http.get<any>(`/GetApi/GetNews/?regionId=${region}`)
           .then((res) => {
            var f=res.data.splice(0, 6)
            var a:any=[]
            f.map((item:any)=>{
var b=item
b.newsDate=b.newsDate.substring(8, 10)+'.'+b.newsDate.substring(5, 7)+'.'+b.newsDate.substring(0, 4)
a.push(b)

            })   
            setnews(a)
        }).catch(e => console.log(e))
    }
    useEffect(() => {
       
        getOpenNews(idT)
    }, []);
    return (

        <div className="open-news" style={{padding:'50px 18%'}}>
            <div className="container" >
                <Row >
<Col lg={17} md={24} sm={24}>

<div className="open-news-title">
                    {Object.keys(data).length !== 0 &&
                      <h5>{t('lang') === 'uz' ? data.titleUz : data.titleRu}</h5>
      
                    }
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    
                <div className="open-news-visites">
                <a target="_blank" >
                        <p><FcShare className='icon' size='1.4rem' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p className="yoz"></p>
                        }
                    </a>
                <a target="_blank" href={`https://www.facebook.com/sharer.php?u=https://test.vitc.uz/GetApi/GetNewsById/6`} className="date">
                        <p><FaFacebookF className='icon' size='1.4rem' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p className="yoz"></p>
                        }
                    </a>
                <a target="_blank" href={`https://telegram.me/share/url?url=https://test.vitc.uz/allnews/${data.id}/&text=${t('lang') === 'uz' ? data.titleUz : data.titleRu}`} className="date">
                        <p><FaTelegramPlane className='icon' size='1.4rem' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p  className="yoz"></p>
                        }
                    </a>
                    </div>
                    <div className="open-news-visites">
                    <div className="date">
                        <p><MdOutlineDateRange className='icon' size='1.4rem' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p>{data.newsDate.substring(0, 10)}</p>
                        }
                    </div>
                    <div className="visites">
                        <p><MdVisibility className='icon' size='1.4rem' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p>{data.visits}</p>
                        }
                    </div>


                </div>
                
                </div>
                <Image.PreviewGroup>
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
                        <Image className='red' style={{height:'auto', width:"100%" }} src={`${(data.regionId==='null'?urlV:url)+(data.titleImage)}`}/>  
                      </div>
                      </SwiperSlide>
                  
                  {data.newsImage && data.newsImage.length!==0?data.newsImage.map((item: any, index: any)=>{
                      return(<SwiperSlide><div
                        className="swiper-slide_body"
                        style={{
                            display:'flex',
                            alignItems:'center',
                            
                    
                        
                           


                        }}
                      >
                             <Image className='red' style={{height:'auto', width:"100%"}} src={`${(item.regionId===null?urlV:url)+'/Files/News/'+(item.imageUrl)}`}/>  
                      </div>
                       </SwiperSlide>)

                  }):''}
                
             
             
              
              
            </Swiper>

                <div className="open-news-text">
                    {Object.keys(data).length !== 0 &&
                        <p>
                            <p className='salomText' style={{textAlign:'justify', lineHeight:"2", fontSize:'18px', textIndent:'50px'}} dangerouslySetInnerHTML={{__html: t('lang') === 'uz' ? data.mainTextUz : data.mainTextRu}}>

                            </p>
                        </p>
                    }
                </div>
            </Image.PreviewGroup>
    </Col>
    <Col lg={7} md={0} sm={0} className="newTabCol">
   <ul className="newTab">
       <h4>{t("So'ngi yangiliklar")}</h4>
       {news.length!==0?news.map((item:any, key:any)=>{
           return( <li onClick={()=>{getOpenNews(item.id)}}>
           <Link to={"/allnews/" + item.id} className="news_list-item1" key={key}>
            <div className='icons'>
            <p className='tabDate'><MdOutlineDateRange className='icon' size='1rem' />{
                                        item.newsDate.substring(0, 10)
                                    }</p>
            <p className='tabDate'>{
                                        item.visits
                                    }<MdVisibility className='icon' size='1rem' /></p>
            </div>   
            <div className='titles'>             
            <p className='tabTitle'>{t('lang') === 'uz' ? item.titleUz : item.titleRu}</p>
            </div></Link>
            </li>)
       }):''}
  
   </ul>
        </Col>

                </Row>
      
<br/>
<br/>

            </div>
          
        </div>
    )
}

export default OpenNews;