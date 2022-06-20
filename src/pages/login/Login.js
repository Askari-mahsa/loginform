import React from 'react';
import './login.css';
import tl from "../../assets/tl.jpg"
import { Button, Input } from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import { validate } from '../../services/validate';
import { useState } from 'react';
const Login = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmitButton = (username,password)=>{
        console.log("logiiiiiiiiin",username)
        validate(username,password);
        if(validate()){
            navigate("/dashboard")
        }
    }
    return (
        <>
            <div className='wrapper'>
                <div className='box'>
                    <div className='banner-container'>
                        <img alt='banner'src={tl} className="banner"></img>
                    </div>
                    <div className='form'>
                        <div className='login' style={{marginBottom:"36px"}}> 
                            <h3 style={{color:"#00000" ,textAlign:"right"}} >ورود</h3>
                        </div>
                        <div className='mainbody'>
                        
                            <div className='feild-user' style={{marginBottom:"9px"}}>
                                <Input className="username"type="email" id="user" name="user" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="نام کاربری یا ایمیل" />
                                {console.log("username",username)}
                            </div>
                            <div className='feild-pass'>
                                <Input type="password" className='password' id="pass" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="رمز عبور" />
                                {console.log("password",password)}
                            </div>
                            <div className='forget'>
                                <div>
                                       <a href="google.com"><p className="forget-password">فراموشی رمز</p></a> 
                                    </div>
                                <label>
                                    رمز را به خاطر بسپار
                                    <input type="checkbox" />
                                </label>
                            </div>
                            <div style={{textAlign:"right",marginTop:"9px"}} className='button-form'>
                                <Button className="login-button "onClick={handleSubmitButton}>ورود</Button>
                            </div>
                            
                            
                        </div>
                        <div className='login-with'>
                            <p className='title-login-with'>ورود با:</p>
                        <Button className='facebook'href="http://www.facebook.com" ><i className="icon-facebook"></i></Button>
                        <Button className='twitter'href="http://www.twitter.com"><i className="icon-twitter"></i></Button>
                        <Button className='google-plus'href="http://www.gmail.com"><i className="icon-google-plus"></i></Button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default Login;