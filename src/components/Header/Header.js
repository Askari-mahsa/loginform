import React from 'react';
import { Nav, NavItem} from 'reactstrap';

const Header = () => {
    return (
        <div>
            
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
        </div>
    );
};

export default Header;