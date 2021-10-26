import React from 'react'
import $ from 'jquery';
import './NB.css';
import logo from './pokiball.png'

var NavBar = () => {

    var SerBox = ()=>{
        $(".main_s").css("display", "flex").hide().fadeIn(500);
    }

    var DivClose = ()=>{
        $(".main_s").fadeOut("slow");
    }

    return (
        <>
            <div className="main_s">
                <div className="search_box">

                    <div className="close" onClick={DivClose}>close</div>

                    <div className="search_bar">
                        <input type="text" placeholder="search"/>
                    </div>
                    <div className="search_content">

                        {/* <div className="s_card">
                            <img src="./luci.png" alt="" />
                        </div> */}
                        <div className="s_card">
                            <img src='https://drive.google.com/uc?id=1LfhaUOesZyqWPNItBUZNyNijHRmCdPVr' alt="no img" />
                        </div>
                        <div className="s_card">
                            <img src='https://drive.google.com/uc?id=1msjBN6ndkl_v6lK97h9_yJgh5t0YETDW' alt="no img" className="card_img" />
                        </div>
                        <div className="s_card">
                            <img src='https://drive.google.com/uc?id=1woWSz6ikjhgCCQ9A4oDWA1B8O3-50eXT' alt="no img" className="card_img" />
                        </div>
                        <div className="s_card">
                            <img src='https://drive.google.com/uc?id=1k6xjJJNMH7DAr22Cx8q6maH2_qszB67C' alt="no img" className="card_img" />
                        </div>
                        <div className="s_card">
                            <img src='https://drive.google.com/uc?id=1Sgb6uJoJFCe54NRPLmnVNielu5G7R3LK' alt="no img" className="card_img" />
                        </div>
                        <div className="s_card">
                            <img src='https://drive.google.com/uc?id=1Aocf4FQLefR1rSC-C7N3p33ZbKLqLeQW' alt="no img" className="card_img" />
                        </div>
                    </div>
                </div>
            </div>

            <nav>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <div className ="name">Poki poki</div>
                </div>
                {/* <!-- <div className="name">big potato</div> --> */}
                <ul>
                    <a href='/home'><li>Home</li></a>
                    <li>Generus</li>
                    <li>about</li>
                </ul>
                <div className="search" onClick={SerBox}>
                    search
                    <i className="fab fa-searchengin"></i>
                </div>
                <div className="u_name">
                    <a href='/profile'><p>Mandip Singh</p></a>
                    <i className="far fa-user"></i>
                </div>
            </nav>
        </>
    )
}

export default NavBar;