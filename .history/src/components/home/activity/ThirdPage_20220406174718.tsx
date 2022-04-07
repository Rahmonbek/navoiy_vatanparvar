import React from 'react'
import "./assets/acttivitypages.scss";
import img from '../assets/activity-3.jpg';
import { useTranslation } from "react-i18next";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
function ThirdPage() {
  const { t } = useTranslation();
  return (
    <div className="activity-page">
      <div className="container">
        <div className="containerr">
          <div className="title">
            <p dangerouslySetInnerHTML={{ __html: t("activity-title3") }}></p>
          </div>
          <div className="activity-img">
            <img src="https://vatanparvar.uz/img/1.jpg" alt="img" />
          </div>
          <div className="activity-text">
            <p dangerouslySetInnerHTML={{ __html: t("activity-text3") }}></p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default ThirdPage;