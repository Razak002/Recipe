import React from 'react'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <div className='side'>
      
      <h2 className='logo'> Food delivery Services</h2>

      <input type='checkbox' id='cart'></input>
      <label className='label-cart'><FontAwesomeIcon icon={faCartShopping} /></label>
    </div>

  )
}


export default Header
