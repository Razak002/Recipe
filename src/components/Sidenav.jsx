import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faSliders, faHeart } from '@fortawesome/free-solid-svg-icons'



const Sidenav = () => {
    return (
        <div className='side-bar'>
            <div className='side-bar-menue'>
            <Link to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
                <a href='#'>Home</a>
            </div>

            <div className='side-bar-menue'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <a href='#'>search</a>
            </div>

            <div className='side-bar-menue'>
            <Link to='/categories'><FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon></Link>
                <a href='#'>Categories</a>
            </div>

            <div className='side-bar-menue'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <a href='#'>Profile</a>
            </div>

            <div className='side-bar-menue'>
                <FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>
                <a href='#'>setting</a>
            </div>
        </div>
    )
}

export default Sidenav