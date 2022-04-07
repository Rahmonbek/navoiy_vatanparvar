import React from "react";
import { PageTitle } from "../ui/PageTitle";
import "./assets/hujjatlar.scss";
import { useTranslation } from 'react-i18next';
function Documents() {
  const {t} = useTranslation();
  return (
    <div className="hujjatlar">
      <div className="container">
        <PageTitle title={t('HUJJATLAR')} />
        <div className="containerr"><div className="hujjatlar-title">
          <p>
          {t('O’ZBEKISTON RESPUBLIKASI MUDOFAASIGA KO’MAKLASHUVCHI «VATANPARVAR» TASHKILOTI NIZOMI')}
          </p>
        </div>
        <div className="hujjatlar-rule">
          <strong>
            <p>{t('rule1')}</p>
          </strong>
        </div>
        
          <div className="hujjatlar-umumiy">
            <p dangerouslySetInnerHTML={{ __html:t("nizom1")}}>
            </p>
            <p dangerouslySetInnerHTML={{ __html:t("text1")}}>       
            </p>
            <p dangerouslySetInnerHTML={{ __html:t("nizom2")}}>       
            </p>     
            <div className="hujjatlar-rule">
               <strong>
                  <p className="rule-text">{t('rule2')}</p>
               </strong>
            </div>
            <p dangerouslySetInnerHTML={{ __html:t("nizom3")}}>
            </p>
          </div>
         <div className="hujjatlar-downloader">
           <a href="https://test.vitc.uz/Files/Ustav.pdf" target="_blank">{t('ruleq')}</a>
           <a href={t("check")?"https://lex.uz/ru/docs/-4103217":"https://lex.uz/ru/docs/4103219"} target="_blank">{t('Batafsil')}</a>
        
         </div>
         
        </div>
      </div>
    </div>
  );
}

export default Documents;
