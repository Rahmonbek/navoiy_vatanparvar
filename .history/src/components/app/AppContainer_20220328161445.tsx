import React from 'react';
import { AppNavbar } from "./AppNavbar";
import { AppFooter } from "./AppFooter";
import { Home } from "../home/Home";
import {
    Routes,
    Route
} from "react-router-dom";
import Aparat from '../aboutus/Aparat/Aparat';
import History from '../aboutus/history/History';
import AllNews from '../information/allnews/AllNews';
import Contacts from '../contacts/Contacts';
import Kasbxunar from '../enquiries/VocationalEducation';
import FirstPage from '../home/activity/FirstPage';
import SecondPage from '../home/activity/SecondPage';
import ThirdPage from '../home/activity/ThirdPage';
import FourthPage from '../home/activity/FourthPage';
import Fifthpage from '../home/activity/Fifthpage';
import OpenNews from '../information/allnews/OpenNews';
import Regions from '../aboutus/regions/Regions';
import Cooperation from '../aboutus/cooperation/Cooperation';
import Central from '../aboutus/central/Central';
import Leaders from '../aboutus/leaders/Leaders';
import PhotoGallery from '../information/photoGallery/PhotoGallery';
import Subsidiaries from '../aboutus/subsidiaries/Subsidiaries';
import Documents from '../d-ocuments/Documents';
import ToDrivingSchool from '../enquiries/ToDrivingSchool';
import OnlineEnquiries from '../enquiries/OnlineEnquiries';
import Error from './Error';


export function AppContainer() {
    return (
        <div className="wrapper app">
            <AppNavbar />
            <main className="main"> <Routes>
            <Route path='*' element={<Error />} />
                <Route exact path="/allnews/:id" element={<OpenNews />} />
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/markaziy-kengash" element={<Central />} />
                <Route exact path="/rahbariyat" element={<Leaders />} />
                <Route exact path="/markaziy-aparat" element={<Aparat />} />
                <Route exact path="/filiallar" element={<Subsidiaries />} />
                {/* <Route exact path="/hududiy-kengashlar" element={<Regions />} /> */}
                {/* <Route exact path="/tashkilot-tarixi" element={<History />} /> */}
                <Route exact path="/tashkilot" element={<Cooperation />} />
                <Route exact path="/allnews" element={<AllNews />} />
                <Route exact path="/fotogalareya" element={<PhotoGallery />} />
                <Route exact path="/hujjatlar" element={<Documents />} />
                <Route exact path="/kontaktlar" element={<Contacts />} />
                <Route exact path="/onlayn-murojat" element={<OnlineEnquiries />} />
                <Route exact path="/haydovchilik-maktabiga-yozilish" element={<ToDrivingSchool />} />
                <Route exact path="/kasb-hunar-maktabiga-yozilish" element={<Kasbxunar />} />
                <Route exact path="/avtotransport-vositalari-haydovchilar" element={<FirstPage />} />
                <Route exact path="/bolalar-o'smirlar-va-chaqirilishga" element={<SecondPage />} />
                <Route exact path="/yoshlar-va-fuqorolarni-manaviy-ahloqiy" element={<ThirdPage />} />
                <Route exact path="/yoshlarga-va-fuqorolarga-mudofaa-sohasida" element={<FourthPage />} />
                <Route exact path="/sportning-texnik-va-amaliy" element={<Fifthpage />} />
            </Routes></main>
            <AppFooter />
        </div>
    );
}

