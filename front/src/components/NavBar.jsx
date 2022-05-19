// import { style } from '@mui/system';
import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"
import styles from "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link className='sample' to="/signup">Signup</Link></li>
                <li><Link className='sample' to="/login">Login</Link></li>
                <li><Link className='sample' to="/search">Search</Link></li>
                <li><Link className='sample' to="/booklist">Book List</Link></li>
           </ul>
        </div>
    )
}       

export default NavBar
