import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./components/app/AppContainer";
import "./assets/style.scss";
import "swiper/css";
import "swiper/css/pagination";
import 'antd/dist/antd.css'; 
import "swiper/css/navigation";
import "@n3/react-vision-panel/dist/vision-panel.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/ui/i18next";
//@ts-ignore

import { BrowserRouter } from "react-router-dom";

// import SimpleReactLightbox from "";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

@ant-design/icons @n3/react-vision-panel @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/axios @types/jest @types/node @types/react @types/react-dom @types/react-text-mask @types/simple-react-lightbox antd antd-mask-input axios bootstrap browser file-loader file-saver formik google-map-react i18next jquery node-sass react react-bootstrap react-countup react-data-export react-dom react-hook-form react-i18next react-icons react-multi-carousel react-paginate react-photo-gallery react-responsive-carousel react-reveal react-router-dom react-scripts react-spinners react-text-mask react-tsparticles react-visibility-sensor react-yandex-maps simple-react-lightbox string-mask swiper typescript validator web-vitals xlsx yup