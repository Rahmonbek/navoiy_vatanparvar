import React from 'react'
import { useTranslation } from "react-i18next";
import "./assets/acttivitypages.scss";
import img from '../assets/activity-5.jpg';
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
function Fifthpage() {
  const { t } = useTranslation();
  return (
    <div className="activity-page">
      <div className="container">
        <div className="containerr">
          <div className="title">
            <p dangerouslySetInnerHTML={{ __html: t("activity-title5") }}></p>
          </div>
          <div className="activity-img">
            <img src="" alt="img" />
          </div>
          <div className="activity-text">
            <p dangerouslySetInnerHTML={{ __html: t("activity-text5") }}></p>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Fifthpage