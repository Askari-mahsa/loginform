import { useState } from 'react';

export const validate = (username,password) =>{
    
    const u="admin@admin.com",p="123456789";
    {console.log(username,typeof username)}
    // const [errorMessage, setErrorMessage] = useState('');
    // setErrorMessage("نام کاربری یا رمز شما اشتباه است لطفا مجددا تلاش کنید.")    
        if(username===u && password===p){
            {console.log("ok ",typeof username)}
            // run a nother function 
            return (true);
           
        }else if(username!==u || password!==p){
            {console.log("nokey" ,typeof password)}
            <p>mahsa1</p>
            return(false);
        }else{
            <p>mahsa2</p>
            return(false);
        }  

  }