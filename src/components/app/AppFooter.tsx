import React from 'react';
import "./assets/footer.scss"
import { useTranslation } from 'react-i18next';

export function AppFooter() {
  const {t} = useTranslation();

    return (
        <footer className="app-footer">
            <div className="container">
                <div className="footer-bottom">
                  
                    <p>{t("foota")} <a target="_blank" href="https://vitc.uz/"> {t("footb")}</a></p>
                </div>
            </div>
        </footer>
    );
}

