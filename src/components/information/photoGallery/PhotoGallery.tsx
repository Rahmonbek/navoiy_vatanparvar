import React from "react";
import { PageTitle } from "../../ui/PageTitle";


  import { useEffect, useState } from "react";
  import { Image } from 'antd';
import "./assets/fotogalereriya.scss";
//@ts-ignore

import { useTranslation } from 'react-i18next';
import http from "../../ui/Services";
import { region, urlFoto } from "../../../host";
function PhotoGallery() {
  const {t, i18n} = useTranslation();
  const [loader, setLoader] = useState(true)
  const [data1, setData1] = useState<any>(null)
  const [data2, setData2] = useState<any>(null)
  const [data3, setData3] = useState<any>(null)
  const [data4, setData4] = useState<any>(null)
 

useEffect(()=>{
	http.get<any>(`GetApi/GetPhotogalleryImages/?regionId=${region}`).then((res) => {
		var length=Math.ceil(res.data.length/4)
		 setData1(res.data.slice(0, length));
	
	setData2(res.data.slice(length, length+length));

	setData3(res.data.slice(2*length, length*3)); setData4(res.data.slice(3*length, res.data.length));   setTimeout(()=>{
		setLoader(false)
	},0); })
	.catch(e => console.log(e))
}, [])


  return (
	<Image.PreviewGroup>
    <div className="fotogalereya">
	{loader?<div className="loader">
            <div className="bef">
      <img src="https://vatanparvar.uz/Files/images/logo.gif" alt="..."/>
      </div>
   </div>
        :''}
        <PageTitle title={t('FOTOGALEREYA')} />
       <br/>
       <br/>
       <br/>
<div className="gallery">
<div className="gallery__column">
		{data1!==null?data1.map((item:any,key:any)=>{
	
			return(
				<a target="_blank" className="gallery__link" style={{width:'100%', padding:'0px', height:'auto'}}>
					<figure className="gallery__thumb">
						<Image height="100%" src={`${urlFoto}/${item.fileName}`} alt={item.description} className="gallery__image img1"/>
						<figcaption className="gallery__caption">{item.description}</figcaption>
					</figure>
				</a>
		)
		}):''}
		
		
	</div>
	<div className="gallery__column">
		{data2!==null?data2.map((item:any,key:any)=>{
		
			return(
				<a target="_blank" className="gallery__link" style={{width:'100%', padding:'0px', height:'auto'}}>
					<figure className="gallery__thumb">
						<Image height="100%" src={`${urlFoto}/${item.fileName}`} alt={item.description} className="gallery__image img1"/>
						<figcaption className="gallery__caption">{item.description}</figcaption>
					</figure>
				</a>
		)
		}):''}
		</div>
		<div className="gallery__column">
		{data3!==null?data3.map((item:any,key:any)=>{
			
			return(
				<a target="_blank" className="gallery__link" style={{width:'100%', padding:'0px', height:'auto'}}>
					<figure className="gallery__thumb">
						<Image height="100%" src={`${urlFoto}/${item.fileName}`} alt={item.description} className="gallery__image img1"/>
						<figcaption className="gallery__caption">{item.description}</figcaption>
					</figure>
				</a>
		)
		}):''}
		
		
	</div>
	<div className="gallery__column">
		{data4!==null?data4.map((item:any,key:any)=>{
			
			return(
				<a target="_blank" className="gallery__link" style={{width:'100%', padding:'0px', height:'auto'}}>
					<figure className="gallery__thumb">
						<Image height="100%" src={`${urlFoto}/${item.fileName}`} alt={item.description} className="gallery__image img1"/>
						<figcaption className="gallery__caption">{item.description}</figcaption>
					</figure>
				</a>
		)
		}):''}
		
		
	</div>

      </div>
    </div></Image.PreviewGroup>
  );
}

export default PhotoGallery;
