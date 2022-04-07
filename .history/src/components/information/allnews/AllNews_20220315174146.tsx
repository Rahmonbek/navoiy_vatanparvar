//@ts-ignorets-ignore
// import moment from 'moment';
import './assets/AllNews.scss';
import http from '../../ui/Services';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import { useTranslation } from 'react-i18next';
import { Image } from 'antd';

import logo from './assets/logo.gif'

import Pagination from '../../pagination/Pagination';
import { AiFillRightCircle, AiOutlineEye } from 'react-icons/ai';
import { FiCalendar } from 'react-icons/fi';
import { url } from '../../../host';
function AllNews() {
    const { t } = useTranslation();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [data, setData] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);
  const [postsPerPage] = useState<number>(6);
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [bosh, setbosh] = useState<number>(0);
    const getNews = () => {
        http.get<any>(`/GetApi/GetNews/3/`)
            .then((res) => {  var f=res.data.reverse()
                var a:any=[]
                f.map((item:any)=>{
    var b=item
    b.createDate=b.createDate.substring(8, 10)+'.'+b.createDate.substring(5, 7)+'.'+b.createDate.substring(0, 4)
    a.push(b)
    
                })   
                setData(a); setLoader(false)})
            .catch(e => console.log(e))
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber: number) => {setCurrentPage(pageNumber)};
    const slider = (pageNumber: number) => {
        
        if(pageNumber===-1 && bosh>0){ 
            setbosh(bosh+pageNumber)
    setCurrentPage(currentPage+pageNumber)

     }
    
if(pageNumber===1 && bosh+6<data.length/6){
    setCurrentPage(currentPage+pageNumber)
    setbosh(Number(bosh)+Number(pageNumber))
 


}

};
    useEffect(() => {
        getNews();
    }, [])
    return (
        <div className="all-news tnew">
           
            <div className="container">
            <PageTitle title={t('YANGILIKLAR')} />
            <section className="cards-wrapper">

{
    currentPosts.map((item, index) =>

            
            <div className="card-grid-space">
    
    <a className="card" style={{backgroundImage: `url(${url}/${item.titleImage})`}}>
      <div className='blackPar'>
        {/* <h1>HTML Syntax</h1> */}
        <div className="date"><FiCalendar  size="1em" style={{position:'relative',  top:'-5px', marginRight:'5px'}} className="icon"/>{item.createDate.substring(0, 10)}</div>
        
        <div className="visit">{item.visits}<AiOutlineEye  size="1em" style={{position:'relative',  top:'-10px', marginLeft:'5px'}} className="icon"/></div>
        <div className='black'> </div>
        <p>{t("check")?item.titleUz:item.titleRu}</p>
       
        <div className="tags">
            
        <Link to={"/allnews/" + item.id} className="news_list-item1" key={index}>
          <div className="tag"><AiFillRightCircle size="2em" style={{position:'relative',  top:'-10px'}} className="icon"/></div>
          </Link>
         
          </div>    
          </div>
          </a>
        </div>
      
  
 
       
    )
}
</section>
                
                <Pagination
                        paginate={paginate}
                        totalPosts={data.length}
                        postsPerPage={postsPerPage}
                        page={currentPage}
                        slider={slider}
                        start={bosh}
                    />
            </div>
            {loader?<div className="loader">
            <div className="bef">
      <img src={logo} alt="..."/>
      </div>
      
   </div>
        :''}
        </div>
    );
}

export default AllNews;