import React, {useDeferredValue, useEffect, useState } from 'react';
import { Nav, NavItem, NavLink ,Collapse, CardBody, Card} from 'reactstrap';
import './dashboard.css'
import Loading from '../../utils/Loading';
import { useNavigate } from "react-router";
import { Successalert } from '../../components/Alert/Alert';
import { callApi } from '../../services/callApi';
import { profile_data } from '../../services/callprofile';

const Dashboard = () => { 

    const deferredValue = useDeferredValue();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [users, setUsers] = useState([]);
    console.log("response", users.map((res)=>{
        return typeof res.username
        
    }))
    const [deleteDialogSuccess,setDeleteDialogSuccess]=useState(false)
    // const [dialog,setDialog]=useState(false)
    const [foundUsers, setFoundUsers] = useState(users);
    console.log("kkkkkk",foundUsers)
    const [collapse,setCollapse]=useState(false);
    const [globalText,setGlobalText]=useState("");
    const [text,setText]=useState("");
   
    console.log("USERS",users)
    const navigate = useNavigate() 
    var result = users.length;
    function search(){
        setIsLoading(true)
            try{
                callApi().then(res => {
                    setUsers(res.data);
                    setIsLoading(false)
                   ;})

            }catch(errorMessage){
                setErrorMessage("سرور قادر به پاسخگویی نیست.");
                setIsLoading(false);
            }
            console.log("test",result);
    }
    // function showProfile(){

    // }
    const Delete=(e)=>{
        
        try{

            setUsers(users.filter(item => item.id !== e));
            setDeleteDialogSuccess(true)
        }catch(error){
            console.log("error in delete row",error)
            setDeleteDialogSuccess(false)
        }
    }
    const memberprofile=(id)=>{
        profile_data.map((items,index)=>{
            if(items.id==id)
            {   console.log("gitlogin")
                navigate("/Dashboard/id",{
                    state:{id}
                })
            }
            else{
               console.log("else git login")
                // evry instruction can be used
            }
        }
           
        )
    }
    const ToggleCard =(text)=>{
        setCollapse(!collapse);
       
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setDeleteDialogSuccess(false)
        }, 5000);
        return () => clearTimeout(timer);
      }, [deleteDialogSuccess]);

    const filter = (e) => {
        const keywordtarget = e.target.value;
        setGlobalText(e.target.value)
    //     console.log("ggggg",text)
        let userClone=users.username


        const results =users&& users.filter((target)=>{
            return  target.username.toString().includes(keywordtarget)
        })

        // console.log("llllllll",results)
        
        setFoundUsers(results)

        setText(keywordtarget)

        
    
        // if (text !== '') {
        //   let results = userClone&&userClone.filter((user) => {
        //       console.log("ggggg",user)
        //       return user.username.include()
        
            // return user.name.toLowerCase().startsWith(text.toLowerCase());
           
        //   });
        //   console.log("resulttt",results)
        //   setFoundUsers(results);
        // } else {
        //   setFoundUsers(users);
        // }
        // setText(text);
      };
        return (
        <>
                <div className='nav-header-dashboard'> 
                    <Nav
                    style={{display:"flex",width:"100%",justifyContent:"space-between",targetgnItems:"center"}}>
                    <NavItem style={{width:"100%",height:"100%"}}>
                            <div  style={{height:"100%"}} className='dashboard-icon'>
                                <i className="icon-bell-alt"></i>
                            </div>
                           
                    </NavItem>
                    <NavItem className='dashboard_nav-link' style={{width:"100%",height:"100%"}}>
                            <div  style={{height:"100%"}} className='bell'>
                               <h6>Tornador</h6><img alt="tornador" className='logo'></img>
                            </div>
                      </NavItem>
                      
                    </Nav>
                    
                </div>
               <div className='dashboard_nav-container'>
                    <div className='nav-side-dashboard'>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink id="N">پروفایل</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" >کاربران</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" >مدیریت پنل</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" disabled >پروژه ها</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" >وظایف</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" >عملیات</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" >گروه چت</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" >گزارش ها</NavLink>
                                </NavItem>
                            </Nav>
                            
                        </div>
                        <div className='bodytable'> 
                        {deleteDialogSuccess?<Successalert/>:""}
                                <div className='admin-member-dashboard'>
                                    <ul className="list-inline">
                                        <li className='active' ><a className='admin-tab' onClick={search} >ادمین</a></li>
                                        <li ><a className='member-tab' onClick={search}>اعضاء</a></li>
                                    </ul>
                                    <div className='search-add-button'>
                                        <button className='new-one-button'>اضافه کردن به لیست+</button>
                                        <button className='new-one-button' 
                                        onClick={()=>ToggleCard()}> جستجو<i class="icon-search"></i></button>
                                     
                                    </div>
                                    <div className='title_dashboard'>
                                    <div className='body-title-dashboard'>
                                    <Collapse isOpen={collapse}>
                                        <Card>
                                            <CardBody>
                                                <div className="submitbutton">
                                                <input className='search-input-collapse-dashboard' 
                                                onChange={filter}
                                                type="search"
                                                value={text}
                                                placeholder='جستجو کاربران'></input>
                                                </div>   
                                            </CardBody>
                                        </Card>
                                        </Collapse>
                                    </div>
                                </div>
                                    <div className='total-bar-dashboard'>
                                        {users.map((items)=>
                                            <></>)}
                                            <p>جمع کل:{result}نفر </p>
                                    </div>
                                    
                                    <div className="error">{errorMessage}</div>
                                </div>
                                
                                    {/* state of  */}
                                 <table className="table">
                                    <thead>
                                        <tr>
                                        <th >گیت ورودی</th>
                                        <th >عملیات</th>
                                        <th >نام کاربری</th>
                                        <th >ایمیل</th>
                                        <th >تلفن</th>
                                        <th >شماره کاربری </th>
                                        </tr>
                                    </thead>
                                    {isLoading? <Loading />: users&&users.map((items,index) =>{
                                        
                                        
                                        return (
                                             <tbody key={index}>
                                                <tr>
                                                <td><button onClick={()=>memberprofile(items.login)}>ورود</button></td>
                                                <td>
                                                     <ul className="operation-field">
                                                        <a><i class="icon-pencil" value="items.id"></i></a> 
                                                         <a><i class="icon-trash" onClick={()=>Delete(items.id)}></i></a>
                                                     </ul>
                                                 </td>
                                                 <td>{items.username}</td>
                                                 <td>{items.email}</td>
                                                 <td>{items.address.zipcode}</td>
                                                 <td>{items.id}</td>   
                                                
                                                 </tr>
                                             </tbody>)
                                            })}
                                        </table>
                                </div> 
                    </div>
                             {/* <div className="user-list">
                                {foundUsers && foundUsers.length > 0 ? (
                                foundUsers.map((user) => (
                                    <li key={user.id} className="user">
                                    <span className="user-id">{user.id}</span>
                                    <span className="user-name">{user.name}</span>
                                    <span className="user-age">{user.address} year old</span>
                                    </li>
                                ))
                                ) : (
                                <h1>No results found!</h1>
                                )}
                            </div>  */}
    
        </>
    );
};

export default Dashboard;