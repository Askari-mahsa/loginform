import React from 'react';
import './login.css';
import tl from "../../assets/tl.jpg"
import { Button, Input } from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
const Login = () => {
    const [mahsa,setMahsa]=useState(false)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validation,setValidation] = useState(false)
    const [notification,setNotification] = useState(false)
    const loginChange=(e)=>{
        
        setUsername(e.target.value)
            setNotification(false);
    }  
  
    const forget=()=>{
        setMahsa(true);
       
        navigate("/ForgetPassword")
    }
    const handleSubmitButton = (e)=>{ 
        e.preventDefault();
        const email ="mahsa.ba.askari@gmail.com"
        const pass="123456789";
        
        if(username === email && password === pass ){
            setNotification(false.valueOf,0)
            navigate("/dashboard")
            }  
            else {
                setNotification(true);
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
                        <form onSubmit={handleSubmitButton}>
                            <div className='feild-user' style={{marginBottom:"9px"}}>
                                <Input className="username"type="email" id="user" name="user" value={username} onChange={ (e)=>loginChange(e)} placeholder="نام کاربری یا ایمیل" />
                                {console.log("username",username)}
                            </div>
                            <div className='feild-pass'>
                                <Input type="password" className='password' id="pass" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="رمز عبور" />
                                {console.log("password",password)}
                            </div>
                            <div className='forget'>
                                <div>
                                       <a onClick={()=>forget()}><p className="forget-password" >فراموشی رمز</p></a> 
                                    </div>
                                <label>
                                    رمز را به خاطر بسپار
                                    <input type="checkbox" />
                                </label>
                            </div>
                            <div style={{textAlign:"right",marginTop:"9px"}} className='button-form'>
                                <Button  className="login-button "type="submit">ورود</Button>
                                {notification&&<div>
                                    <span className='closebtn'onChange={(e)=>loginChange(e)} style={{color:"red",fontSize:"12px"}} >
                                     نام کاربری و رمز عبور اشتباه است
                                  </span>
                                  
                                </div>}
                                
                            </div>
                            
                        </form>   
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