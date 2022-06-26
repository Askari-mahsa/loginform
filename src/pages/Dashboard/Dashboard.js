import React, {useDeferredValue, useEffect, useState } from 'react';
import { Nav, NavItem, NavLink ,Collapse, CardBody, Card} from 'reactstrap';
import './dashboard.css'
import Loading from '../../utils/Loading';
import { useNavigate } from "react-router";
import { Successalert } from '../../components/Alert/Alert';
import { callApi } from '../../services/callApi';
import { profile_data } from '../../services/callprofile';
import Header from '../../components/Header/Header';

const Dashboard = () => { 
    const [admin,setAdmin]=useState(true);
    const [datauser,setDatauser]=useState(profile_data);
  
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [users, setUsers] = useState([]);
    console.log("response", users.map((res)=>{
        return typeof res.username
    }))
    const [deleteDialogSuccess,setDeleteDialogSuccess]=useState(false)
    const [foundUsers, setFoundUsers] = useState(users);
    const [collapse,setCollapse]=useState(false);
    const [globalText,setGlobalText]=useState("");
    const [text,setText]=useState("");
    const navigate = useNavigate() 
    var result = users.length;
    let adminCount =datauser.length

    function notfound(){
        navigate('/NotFound')
    }
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
            
    }
    const Delete=(e,type)=>{
        if(type === 'member'){
            try{
                setUsers(users.filter(item => item.id !== e));
                setDeleteDialogSuccess(true)
            }catch(error){
                console.log("error in delete row",error)
                setDeleteDialogSuccess(false)
            }
        }
    }
    const DeleteUser=(e)=>{
        
        setDatauser(datauser.filter(item => item.id !== e))
        console.log("setDate",setDatauser)
        return datauser;
        
    }
    const memberprofile=(id)=>{
        profile_data.map((items,index)=>{
            if(items.id==id)
            {   
                navigate("/Dashboard/id",{
                    state:{id}
                })
            }
            else{
               console.log("else git login")
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

    const searchUser = () => {
        console.log("trext",text)
        console.log("settext",setText)
        if (text !== '') {
            
            setUsers(users.filter((items)=>items.username === text))
            if(setText === ''){
                search();
                setUsers(users);
            }
            
        }
        else{
            search();
            setUsers(users);
            }
          
        };
        useEffect(()=>{search();},[]);
    
        return (
        <>
           <Header/>
               
               <div className='dashboard_nav-container'>
                    <div className='nav-side-dashboard'>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink id="N" onClick={notfound}><i class="icon-user"></i>پروفایل</NavLink>
                                </NavItem>
                                <NavItem>
                                   <NavLink id="N" onClick={notfound}><i class="icon-group"></i>کاربران</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" onClick={notfound}><i class="icon-cogs"></i>مدیریت پنل</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" onClick={notfound}><i class="icon-laptop"></i>پروژه ها</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N"onClick={notfound}><i class="icon-tasks"></i> وظایف </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" onClick={notfound}><i class="icon-random"></i> عملیات </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N"onClick={notfound}><i class="icon-quote-right"></i> گروه چت</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink id="N" onClick={notfound} ><i class="icon-file-alt"></i>گزارش ها </NavLink>
                                </NavItem>
                            </Nav>
                            
                        </div>
                        <div className='bodytable'> 
                        {deleteDialogSuccess?<Successalert/>:""}
                                <div className='admin-member-dashboard'>
                                    <ul className="list-inline">
                                        <li ><a className={`admin-tab ${admin && 'active'}`} onClick={()=>{setAdmin(true);}}>ادمین</a></li>
                                        <li ><a className={`member-tab ${!admin && 'active'}`} onClick={()=> {search(); setAdmin(false);}}>اعضاء</a></li>
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
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                type="text"
                                                placeholder="جستجوی نام کاربری">
                                                </input>
                                                <button className="collapse-search-button"type="submit"onClick={searchUser}><i class="icon-search"></i></button>
                                                </div>   
                                            </CardBody>
                                        </Card>
                                        </Collapse>
                                    </div>
                                </div>
                                    <div className='total-bar-dashboard'>
                                        {users && users.map((items)=>
                                            <></>)}
                                            <p>جمع کل:{admin?adminCount:result}نفر </p>
                                         
                                    </div>
                                    
                                    <div className="error">{errorMessage}</div>
                                </div>
                                  
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
                                    {admin && (isLoading? <Loading />: datauser.map((item,list)=> {
                                    return (
                                        <tbody key={list}>
                                           <tr>
                                           <td><button className='gitlogin' onClick={()=>memberprofile(item.login)}>ورود</button></td>
                                           <td>
                                                <ul className="operation-field">
                                                   <a><i class="icon-pencil" value="items.id"></i></a> 
                                                    <a><i class="icon-trash" onClick={(e)=> DeleteUser(item.id,'admin')}></i></a>
                                                </ul> 
                                            </td>
                                            <td>{item.type}</td>
                                            <td>{item.url}</td>
                                            <td>{item.node_id}</td>
                                            <td>{item.id}</td>   
                                           
                                            </tr>
                                        </tbody>)
                                                }))
                                    }
                                    {!admin  && (isLoading? <Loading />: users&&users.map((items,index) =>{
                                        return (
                                             <tbody key={index}>
                                                <tr>
                                                <td><button className='gitlogin' onClick={()=>memberprofile(items.login)}>ورود</button></td>
                                                <td>
                                                     <ul className="operation-field">
                                                        <a><i class="icon-pencil" value="items.id"></i></a> 
                                                         <a><i class="icon-trash" onClick={()=>{Delete(items.id, 'member')}}></i></a>
                                                     </ul>
                                                 </td>
                                                 <td>{items.username}</td>
                                                 <td>{items.email}</td>
                                                 <td>{items.address.zipcode}</td>
                                                 <td>{items.id}</td>   
                                                
                                                 </tr>
                                             </tbody>)
                                            }))}
                                        </table>
                                </div> 
                    </div>
        </>
    );
                                        };

export default Dashboard;