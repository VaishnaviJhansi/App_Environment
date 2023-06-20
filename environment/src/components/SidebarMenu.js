import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import items from "../data/sidebar.json";
import { NavLink } from 'react-router-dom';

function SidebarMenu({children}) {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[ ]

    return (
        <div className="main">
            {/* <div style={{width: isOpen ? "230px" : "49px" }} className="sidebar"> */}
            <div style={{width: isOpen ? "210px" : "50px" }} className="sidebar">
                <div className="container">
                    <div className="top_section">
                           {/* <h1 style={{display: isOpen ? "block" : "none" }} className="logo">Logo</h1> */}
                        <div style={{marginLeft: isOpen ? "110px" : "-30px" }} className="bars">
                        {/* <div style={{marginLeft: isOpen ? "110px" : "-30px" }} className="bars"></div>     */}
                           <FaBars onClick={toggle}/>
                        </div>
                    </div>
                   {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className="link" activeclassName='active'>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none" }}className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                   }
                    { items .map((item, index) => <SidebarItem key={index} item={item} />) }
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default SidebarMenu;