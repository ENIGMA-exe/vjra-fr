import React, { useState } from 'react';
import $ from 'jquery';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './LF.css';
import LoginLogo from './demo.png';

var LoginForm = (props) => {

    //.............states.............................

    let history = useHistory();

    var [SignUpData, setSignUpData] = useState({
        name:'',
        email:'',
        pwd:'',
        pwd2:''
    })
    var [LoginData, setLoginData] = useState({
        email:'',
        pwd:''
    });

    //..............functions.........................

    var RightSlider = ()=>{
        $(".slider").animate({right:'0',left:'50%'},'slow');
    }

    var LeftSlider = ()=>{
        $(".slider").animate({left:'0',right:'50%'},'slow');
    }

    var signupFillup = (e)=>{
        if(e.target.name === 'user_name'){
            setSignUpData({
                name:e.target.value,
                email:SignUpData.email,
                pwd:SignUpData.pwd,
                pwd2:SignUpData.pwd2
            })
        }
        if(e.target.name === 'user_em'){
            setSignUpData({
                name:SignUpData.name,
                email:e.target.value,
                pwd:SignUpData.pwd,
                pwd2:SignUpData.pwd2
            })
        }
        if(e.target.name === 'user_pass'){
            setSignUpData({
                name:SignUpData.name,
                email:SignUpData.email,
                pwd:e.target.value,
                pwd2:SignUpData.pwd2
            })
        }
        if(e.target.name === 'user_pass_2'){
            setSignUpData({
                name:SignUpData.name,
                email:SignUpData.email,
                pwd:SignUpData.pwd,
                pwd2:e.target.value
            })
        }
    }

    var LoginFillup = (e)=>{
        if(e.target.name === 'userid'){
            setLoginData({
                email:e.target.value,
                pwd:LoginData.pwd
            });
        }
        if(e.target.name === 'pass'){
            setLoginData({
                email:LoginData.email,
                pwd:e.target.value
            });
        }
    }

    var Signup = async ()=>{
        if(SignUpData.name !== "" & SignUpData.email !== "" &SignUpData.pass !== ""){
            if(SignUpData.pwd === SignUpData.pwd2){
                if(SignUpData.pwd.length > 5){

                    var response = await axios.post('http://localhost:5000/user_detail',SignUpData);

                    swal({
                        title: response.data,
                        icon: "success"
                    })
                    RightSlider();

                }else{
                    swal({
                        title: "password length is too short!",
                        icon: "warning"
                    });
                }
            }else{
                swal({
                    title: "passwords are not matching",
                    icon: "warning"
                });
            }
        }else{
            swal({
                title: "Incomplite fillup",
                icon: "warning"
            });
        }
    }

    var Login = async ()=>{
        if(LoginData.email !== '' & LoginData.pass!== ''){

            // console.log(LoginData);

            var responce = await axios.post(`http://localhost:5000/login`,LoginData);
            if(responce.data !== 'invalid'){

                console.log(responce.data);
                Cookies.set('userID',responce.data[0].user_id);

                history.push("/home")
                
            }
            else{
                console.log(responce);
                swal({
                    title: "Inavlid user",
                    icon: "warning"
                });
            }
        }else{
            swal({
                title: "Incomplite fillup",
                icon: "warning"
            });
        }
    }

    return (
        <>
            <div className="l_main">

                <div className="login">
                    <p>heloo Pokies!</p>

                    <div className="fillup">
                        <i className="far fa-envelope"></i>
                        <input onChange={LoginFillup} value={LoginData.email} id="userid" name="userid" type="text" placeholder="Email" />
                    </div>

                    <div className="fillup">
                        <i className="fas fa-lock"></i>
                        <input onChange={LoginFillup} value={LoginData.pass} id="pass" name="pass" type="password" placeholder="password" />
                        <i className="fas fa-eye" id="eye"></i>
                    </div>

                    <button onClick={Login}>Login</button>
                    <p id="signup">don't have an account?<span id="click_1" onClick={LeftSlider}>create</span> </p>
                    <p id="fo_p">Forget password</p>
                </div>
                {/* <!-- .................................................................................................. --> */}
                <div className="signup">
                    <p>Lets Join Pokies!</p>

                    <div className="fillup">
                        <i className="fas fa-users"></i>
                        <input onChange={signupFillup} value={SignUpData.userName} id="user_name" name="user_name" type="text" placeholder="name" />
                    </div>

                    <div className="fillup">
                        <i className="far fa-envelope"></i>
                        <input onChange={signupFillup} value={SignUpData.email} id="user_em" name="user_em" type="text" placeholder="email" />
                    </div>

                    <div className="fillup">
                        <i className="fas fa-lock"></i>
                        <input onChange={signupFillup} value={SignUpData.pass} id="user_pass" name="user_pass" type="password" placeholder="password" />
                    </div>

                    <div className="fillup">
                        <i className="fas fa-lock"></i>
                        <input onChange={signupFillup} value={SignUpData.pass2} id="user_pass_2" name="user_pass_2" type="password" placeholder="password(re type)" />
                    </div>

                    <button onClick={Signup}>Register</button>
                    <p id="login">Already have an account.<span id="click_2" onClick={RightSlider}>login</span> </p>
                </div>
                {/* <!-- ................................................................................................--> */}
                <div className="slider">
                    <div className="img_area">
                        <div className="close_tab" onClick={props.closefunction}>
                            close
                        </div>
                        <div className="img_sec">
                            <img src={LoginLogo} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default LoginForm;

