import React from 'react'
import "./assets/acttivitypages.scss";
import { useTranslation } from "react-i18next";

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
            <img src="https://vatanparvar.uz/img/3.jpg" alt="img" />
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