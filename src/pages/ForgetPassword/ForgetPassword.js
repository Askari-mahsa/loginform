import React from 'react';
import './ForgetPassword.css';
import tl from "../../assets/tl.jpg"
import { Button, Input } from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Userfront from "@userfront/core";
const ForgetPassword =() =>{
const loginChange=(e)=>{
        
        setUsername(e.target.value)
            setNotification(false);
}  
const handleSubmitButton = ()=>{ 
    Userfront.sendResetLink("username");
}
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [notification,setNotification] = useState(false)
    

    return (
        <>
            <div className='wrapper'>
                <div className='box'>
                    <div className='banner-container'>
                        <img alt='banner'src={tl} className="banner"></img>
                     
                    </div>
                    <div className='form'>
                        <div className='login' style={{marginBottom:"36px"}}> 
                            <h3 style={{color:"#00000" ,textAlign:"right"}} >بازیابی پسورد</h3>
                        </div>
                        <div className='mainbody'>
                        
                            <div className='feild-user' style={{marginBottom:"9px"}}>
                                <Input className="username"type="email" id="user" name="user" value={username} onChange={ (e)=>setUsername(e.target.value)} placeholder="نام کاربری یا ایمیل" />
                                    </div>
                          
                            <div style={{textAlign:"right",marginTop:"9px"}} className='button-form'>
                                <Button className="login-button "onClick={handleSubmitButton}>ارسال</Button>
                                {notification&&<div>
                                    <span className='closebtn'onChange={(e)=>loginChange(e)} style={{color:"red",fontSize:"12px"}}></span>
                                  ایمیل برای شما ارسال شد.
                                </div>}
                                
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

export default ForgetPassword;