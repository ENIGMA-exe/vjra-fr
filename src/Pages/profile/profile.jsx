import React,{useEffect,useState}from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

import NavBar from '../../Components/NavBar/NavBar';
import './PRF.css';
import bannerLogo from './Pokemon-go-banner-2.png'


var Profile = () => {

    const [edBlockCss, setEdBlockCss] = useState({display:"none"})

    var history = useHistory()

    var Logout = ()=>{
        Cookies.remove('userID');
        history.push("/");
    }

    var changeCSS = ()=>{
        if(edBlockCss.display === "none"){
            setEdBlockCss({display:"flex"})
        }else{setEdBlockCss({display:"none"})}
    }

    
    useEffect(() => {
        if(Cookies.get('userID') === undefined || Cookies.get('userID') === ''){
            history.push("/");
            document.title = 'welcome page'
        }else{document.title = 'profile'}
    },[])

    return (
        <>  
            <NavBar/>
            <div className="prof_main">
                <div className="profile_markup">
                    <div className="prof_banner">
                        <img src={bannerLogo} alt=""/>
                    </div>
                    <div className="prof_logo">
                        <i className="fas fa-user-circle"></i>
                    </div>
                    <div className="user_name">Mandip Singh</div>

                    <i className="far fa-edit" onClick={changeCSS}></i>

                    <div className="edit-block" style={edBlockCss}>
                        <div className="inner-eb">Edit Profile</div>
                        <div className="inner-eb" onClick={Logout}>Logout</div>
                    </div>
                </div>

                <div className="info_body">
                    <div className="card-heading">Favourite Pokemon</div>
                    <div className="card_sc">

                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1LfhaUOesZyqWPNItBUZNyNijHRmCdPVr' alt="no img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1msjBN6ndkl_v6lK97h9_yJgh5t0YETDW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1woWSz6ikjhgCCQ9A4oDWA1B8O3-50eXT' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1k6xjJJNMH7DAr22Cx8q6maH2_qszB67C' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Sgb6uJoJFCe54NRPLmnVNielu5G7R3LK' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Aocf4FQLefR1rSC-C7N3p33ZbKLqLeQW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1LfhaUOesZyqWPNItBUZNyNijHRmCdPVr' alt="no img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1msjBN6ndkl_v6lK97h9_yJgh5t0YETDW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1woWSz6ikjhgCCQ9A4oDWA1B8O3-50eXT' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1k6xjJJNMH7DAr22Cx8q6maH2_qszB67C' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Sgb6uJoJFCe54NRPLmnVNielu5G7R3LK' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Aocf4FQLefR1rSC-C7N3p33ZbKLqLeQW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1LfhaUOesZyqWPNItBUZNyNijHRmCdPVr' alt="no img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1msjBN6ndkl_v6lK97h9_yJgh5t0YETDW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1woWSz6ikjhgCCQ9A4oDWA1B8O3-50eXT' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1k6xjJJNMH7DAr22Cx8q6maH2_qszB67C' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Sgb6uJoJFCe54NRPLmnVNielu5G7R3LK' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Aocf4FQLefR1rSC-C7N3p33ZbKLqLeQW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1LfhaUOesZyqWPNItBUZNyNijHRmCdPVr' alt="no img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1msjBN6ndkl_v6lK97h9_yJgh5t0YETDW' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1woWSz6ikjhgCCQ9A4oDWA1B8O3-50eXT' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1k6xjJJNMH7DAr22Cx8q6maH2_qszB67C' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Sgb6uJoJFCe54NRPLmnVNielu5G7R3LK' alt="no img"
                                className="card_img" />
                        </div>
                        <div className="g_card">
                            <img src='https://drive.google.com/uc?id=1Aocf4FQLefR1rSC-C7N3p33ZbKLqLeQW' alt="no img"
                                className="card_img" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
