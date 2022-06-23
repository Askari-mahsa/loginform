import React from 'react';
import './NotFound.css';
import found from "../../assets/found.webp"
import { Button } from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const NotFound = () => {
   
    const navigate = useNavigate()
    const handleSubmitButton = ()=>{ 
        navigate("/dashboard")
        }
    return (
        <>
        <Header />
            <div className='wrapper-notfound'>
                <div className='box-notfound'>
                    <div className='banner-container-notfound'>
                        <img alt='banner-notfound'src={found} className="banner-notfound"></img>
                     
                    </div>
                    <div className='form'>
                        <div className='login' style={{marginBottom:"36px"}}> 
                            <h3 style={{color:"#00000" ,textAlign:"right"}} >404خطای </h3>
                            <p>صفحه مورد نظر یافت نشد </p>
                        </div>
                        <div className='mainbody-notfound'>
                            <div style={{textAlign:"right",marginTop:"9px"}} className='button-form-notfound'>
                                <Button className="login-button-notfound "onClick={handleSubmitButton}>بازگشت به صفحه اصلی</Button>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default NotFound;