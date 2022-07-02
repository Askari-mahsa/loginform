// import { useState,useEffect } from "react";
// import {useLocation } from "react-router";
// import { useNavigate } from "react-router";
// import './Profile.css'
// import { callApi,callAdminApi } from '../../services/callApi';

// const Profile = () => {
//     const [urls, setUrls] = useState([]);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [usersData,setUsersData]=useState({})
//     const navigate = useNavigate()
//     const location = useLocation()
//     const [info,setInfo]=useState([])
//     const name= location.state.loginName
  
// //     useEffect(()=>{
// //         getProfileDetailService(name).then(res => {
// //         setUsersData(res)}).catch(()=>{
// //      })
// // },[])
//     // useEffect(()=>{
//     //     callUrl(name).then(res=>{setUrls(res.data)})
//     // },[])
    
//     // useEffect(()=>{
//     //     callInfo(name).then(res=>{setInfo(res.data)})
//     // },[])
  
    
//     const backButton = ()=>{
//         navigate(-1)
//     }

// let profileData = usersData && usersData.data
  
//     return (
//         <>
         
          
//                <div  className="profilecard card2">
//                     <img alt="profile"/>
                           
//                             <div className="biography">
                               
//                             </div>
                            
//                          </div> 

//         <div className="card2">
//              <div className='cardbutton'>
                
//             </div>
//         </div>
//         {  
//             urls.map((item)=>{
//             return(<a href={item.html_url} className="card2">{item.name}</a>)  }
//             )
//         }
            
        
//        </>
//     );
// };

// export default Profile;