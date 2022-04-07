import "./assets/map.scss"
import http from '../ui/Services';
import { Modal } from "../ui/Modal";
import {HiOutlineLocationMarker, 
    HiMail,} from "react-icons/hi";
    import { FaUserTie,} from 'react-icons/fa'
    import { BsTelephoneFill,} from 'react-icons/bs'
    import { ImPrinter} from 'react-icons/im'
    import {  MdLanguage} from 'react-icons/md'
   
    import { MdAlternateEmail,} from 'react-icons/md'
import { useEffect, useState } from 'react';
import { PageTitle } from "../ui/PageTitle";
import { ParticlesWrapper } from "../ui/ParticlesWrapper";
import { useTranslation } from 'react-i18next';
export function Map() {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [currentRegion, setCurrentRegion] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const [currentName, setCurrentName] = useState("");
    const [currentPhone, setCurrentPhone] = useState("");
    const [currentFaks, setCurrentFaks] = useState("");
    const [currentEmail, setCurrentEmail] = useState("");
    const [currentVeb, setCurrentVeb] = useState("");
    const [currentIndex, setCurrentIndex] = useState("");

    const [data, setData] = useState<any[]>([])
    const getNews = async () => {
       vvv
    }
    useEffect(() => {
        getNews();
    }, [])
    
    return (
        <div className="map">
            <div className="map-bg">
                <ParticlesWrapper />
            </div>
            <div className="container">
                <PageTitle title={t('HUDUDLAR')} />
                <div>
                    <svg className="map-svg" style={{ width: "100%", }} xmlns="http://www.w3.org/2000/svg"
                        baseProfile="tiny"
                        fill="grey" height="652" stroke="white"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" version="1.2"
                        viewBox="0 0 1000 652"
                        width="1000">
                      {data.length!==0?data.map((item, key)=>{
                          return( <path key={key} onClick={(e) => {
                            setShowModal(true);
                            //@ts-ignore
                            setCurrentRegion(item.regionName)
                               //@ts-ignore
                                setCurrentAddress(item.regionAdress)
                                console.log(data[6].regionAdress)
                                //@ts-ignore
                                setCurrentName(item.regionPresident)
                                //@ts-ignore
                                setCurrentPhone(item.phoneNumber)
                                //@ts-ignore
                                setCurrentFaks(item.fax)
                                //@ts-ignore
                                setCurrentEmail(item.email)
                                setCurrentVeb(item.webSite)
                                //@ts-ignore
                                setCurrentIndex(item.mailIndex)
                            
            
                        }}
                            d={item.svgCoord}
                            id={item.code} name={item.regionName}>
                                </path>)
                      }):''}



                      


                        <circle cx="673.4" cy="626" id="0">
                        </circle>
                        <circle cx="637.6" cy="506" id="1">
                        </circle>
                        <circle cx="636" cy="498.9" id="2">
                        </circle>
                    </svg>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                {/* {
                    data.map((item, index) => */}
                        <div className="map-modal_content" >
                            <h2 className="region_name">{currentRegion}</h2>
                            <ul className="region_info">
                                <li>
                                    <strong><HiOutlineLocationMarker className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {currentAddress}
                                </li>
                                <li>
                                    <strong><FaUserTie className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                    {currentName}
                                </li>
                                <li>
                                    <strong> <BsTelephoneFill className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentPhone}
                                </li>
                                <li>
                                <strong> <ImPrinter className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentFaks}
                                </li>
                                <li>
                                <strong> <MdAlternateEmail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentEmail}
                                </li>
                                <li>
                                <strong> <HiMail className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>

                                    {currentIndex}
                                </li>
                                <li>
                                <strong> <MdLanguage className="icon" size="1.8rem" color="#133165" cursor="pointer"/></strong>
                                   
                                    <a target="_blank" style={{color:"#133165"}} href={`https://${currentVeb}`}>{currentVeb}</a>
                                </li>
                            </ul>

                        </div>
                    {/* )
                } */}

            </Modal>
        </div>
    );
}

