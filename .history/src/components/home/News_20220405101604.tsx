import { useState, useEffect } from 'react';
import "./assets/news.css"
import "./assets/news.scss"
import { PageTitle } from "../ui/PageTitle";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import http from '../ui/Services';
import { region, url, urlV } from '../../host';
import {Row, Col} from 'antd'

import { ArrowRightOutlined } from '@ant-design/icons';
import { AiFillRightCircle, AiOutlineEye } from 'react-icons/ai';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';

export function News() {
    const { t } = useTranslation();

    const [dataUz, setDataUz] = useState<any[]>([])
    const [dataUz, setDataUz] = useState<any[]>([])
    const [dataRu, setDataRu] = useState<any[]>([])
    const getNews = async () => {
        await http.get(`/GetApi/GetNews/?regionId=${region}`)
            .then((res) => {
              
                var b:any=[]
                res.data.map((item:any)=>{
                    var x=item
                    x.newsDate=x.newsDate.substring(8, 10)+'.'+x.newsDate.substring(5, 7)+'.'+x.newsDate.substring(0, 4)
                    b.push(x)
                    
                                })   
                var f:any=[]
                for(let i=0; i<b.length; i++){
                    if(b[i].titleUz!==null){
f.push(b[i])
                    }
                }
              
                setDataUz(f.slice(0,6))
                var b=res.data
                var a:any=[]
                var f:any=[]
                for(let i=0; i<b.length; i++){
                    if(b[i].titleRu!==null){
f.push(b[i])
                    }
                }
                
                setDataRu(f.slice(0,6))

            })
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getNews();
    }, [])
    return (
        <div className="news">
            <div className="container">
                <PageTitle title={t('YANGILIKLAR')} />
                {/* <div className="news_list">

                    {
                        dataUz.map((item, index) =>

                            <Link to={"/allnews/" + item.id} className="news_list-item" key={index}>
                                <div className="news_list-item_img">
                                    <img src={'https://test.vitc.uz/Files/News/' + item.titleImage} alt="img" />
                                </div>
                                <div className="news_list-item_content">
                                    <div className="news_list-item-link">
                                        {item.titleUz}
                                        <p className="news_list-item_date">{item.newsDate.substring(0, 10)}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div> */}
              <Row style={{ width:'100%'}}>

{
    t("check")?dataUz.map((item, index) =>

            
    <Col style={{padding:'10px'}} lg={8} md={12} sm={24}>

<Link to={"/allnews/" + item.id} className="news_list-item1" style={{width:'100%'}} key={index}>
    
    <a className="card" style={{backgroundImage: `url(${item.regionId===null?urlV:url}/${item.titleImage})`}}>
      <div className='blackPar'>
        {/* <h1>HTML Syntax</h1> */}
        <div className="date"><FiCalendar  size="1em" style={{position:'relative',  top:'-5px', marginRight:'5px'}} className="icon"/>{item.newsDate.substring(0, 10)}</div>
    
        <div className="visit">{item.visits}<AiOutlineEye  size="1em" style={{position:'relative',  top:'-10px', marginLeft:'5px'}} className="icon"/></div>
       
     
       
        <div className='black'> </div>
        
        <p>{t("check")?item.titleUz:item.titleRu}</p>
      
        <div className="tags">
        
          <div className="tag"><AiFillRightCircle size="2em" style={{position:'relative',  top:'-10px'}} className="icon"/></div>
          </div>
         
          
        
          </div> 
        
          </a>
          </Link>
       
       
    
          </Col>
        
      
  
 
       
    ):dataRu.map((item, index) =>

            
    <Col style={{padding:'10px'}} lg={8} md={12} sm={24}>

<Link to={"/allnews/" + item.id} className="news_list-item1" key={index}>

<a className="card" style={{backgroundImage: `url(${item.regionId===null?urlV:url}/${item.titleImage})`}}>
<div className='blackPar'>
{/* <h1>HTML Syntax</h1> */}
<div className="date"><FiCalendar  size="1em" style={{position:'relative',  top:'-5px', marginRight:'5px'}} className="icon"/>{item.newsDate.substring(0, 10)}</div>

<div className="visit">{item.visits}<AiOutlineEye  size="1em" style={{position:'relative',  top:'-10px', marginLeft:'5px'}} className="icon"/></div>



<div className='black'> </div>

<p>{t("check")?item.titleUz:item.titleRu}</p>

<div className="tags">

  <div className="tag"><AiFillRightCircle size="2em" style={{position:'relative',  top:'-10px'}} className="icon"/></div>
  </div>
 
  

  </div> 

  </a>
  </Link>



  </Col>





)
}
</Row>
                <Link to="/allnews"><a  className="allnewss">{t('barcha_yangiliklarga')}</a></Link>
            </div>
        </div>
    );
}

