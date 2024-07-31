import React from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";

const Menu=()=>{
    return(
        <>
           <div className='menu_style'>
            <NavLink exact className='acitive_class' to='/'>
                Home Page
            </NavLink>
            <NavLink exact className='acitive_class' to='/about'>
                About Us
            </NavLink>
            <NavLink exact className='acitive_class' to='/academics'>
                Academics
            </NavLink>
            <NavLink exact className='acitive_class' to='/admissions'>
                Admissions
            </NavLink>
            <NavLink exact className='acitive_class' to='/faculty'>
                Faculty
            </NavLink>
            <NavLink exact className='acitive_class' to='/student'>
                Student
            </NavLink>
            <NavLink exact className='acitive_class' to='/gallary'>
               Gallary
            </NavLink>
            <NavLink exact className='acitive_class' to='/contact'>
                Contact US
            </NavLink>


           </div>
           
           
        </>
    )
}

export default Menu;