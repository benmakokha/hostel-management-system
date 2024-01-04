import React,{useState} from 'react';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList

}from "react-icons/fa"; 
import {NavLink} from 'react-router-dom';

function Sidebar({children}){
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

            {
                path: "/",
                name: "dashboard",
                icon: <FaTh/>
            },

            
            {
                path: "/about",
                name: "About",
                icon: <FaUserAlt />
            },

            
            {
                path: "/analyticsPage",
                name: "View Students",
                icon: <FaRegChartBar />

            },

            
            {
                path: "/comments",
                name: "Add Student",
                icon: <FaCommentAlt /> 
            },

            
            {
                path: "/product",
                name: "Remove Student",
                icon: <FaShoppingBag />
            },

            
            {
                path: "/productList",
                name: "Check Student Fee",
                icon:  <FaThList />
            }


        ]

    return(

        <div className="my_box">
            <div style={{width: isOpen ? "200px": "50px"}} className="sidebar">
               <div className ="top_section">
                <h1 style={{display: isOpen ? "block": "none"}} classNAme="logo" >Logo</h1>
                <div style={{marginLeft: isOpen ? "50px": "0px"}} className="bars">
                    <FaBars onClick ={toggle}/>
                </div>
                
               </div>
               {

                 menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link"activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{width: isOpen ? "300px": "50px"}} className="link_text">{item.name}</div>   
                    </NavLink>
                 ))
               }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;