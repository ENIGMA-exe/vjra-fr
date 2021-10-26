import React ,{useEffect}from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import './Home.css';
import Banner from '../../Components/BannerHeader/BannerHeader';
import SimpleCardSlider from '../../Components/CardSlider-a/SmpCrdSlider';
import BannerCardSlider from '../../Components/CardSlider-b/BnrCrdSlider';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import PokiDetailsForm from '../../Components/PokiDetailsForm/PokiForm';


var HomePage = () => {

    var history = useHistory()
    useEffect(() => {
        if(Cookies.get('userID') === undefined || Cookies.get('userID') === ''){
            history.push("/");
            document.title = 'welcome page'
        }else{document.title = 'home'}
    },[])
    return (
        <>
            <div className='home-popup'>
                <PokiDetailsForm/>
            </div>
            
            <NavBar />
            <Banner />
            <SimpleCardSlider />
            <BannerCardSlider />
            <SimpleCardSlider />
            <SimpleCardSlider />
            <BannerCardSlider />
            <Footer />
        </>
    )
}

export default HomePage;