import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faSliders, faHeart } from '@fortawesome/free-solid-svg-icons'



const Sidenav = () => {
    return (
        <div className='side-bar'>
            <div className='side-bar-menue'>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <a href='#'>Home</a>
            </div>

            <div className='side-bar-menue'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <a href='#'>search</a>
            </div>

            <div className='side-bar-menue'>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <a href='#'>Favs</a>
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