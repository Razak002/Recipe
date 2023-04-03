import React from 'react'
import Food7 from '../assets/img/Food7.jpg'
import Food6 from '../assets/img/Food6.jpg'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Orderboard = () => {
  return (
    <div className='order-board'>
   
     <h3>Order Menue</h3>
      <div className='order-address'> 
        <p>Address Delivery</p>
        <h4>221 baker street, abuja</h4>
      </div>
      <div className='order-time'>
        <span className='clock'>30 mins</span>
      </div>
      <div className='order-wrapper'>
        <div className='order-card'>
          <img className='order-img' src={Food7} alt='img' />
          <div className='order-details'>
            <p>Lorem ipsum dolor sit amet</p>
            <input type='text' value='i'></input>
          </div>
          <div className='order-price'>$35</div>
        </div>
        <div className='order-card'>
          <img className='order-img' src={Food6} alt='img' />
          <div className='order-details'>
            <p>Lorem ipsum dolor sit amet</p>
            <input type='text' value='i'></input>
          </div>
          <div className='order-price'>$35</div>
        </div>
      </div>
      <hr className='divider'></hr>
      <div className='order-total'>
        <p>Subtotal <span>$15.6</span></p>
        <p>Tax (10%)<span>$15.6</span></p>
        <p>Delivery Fee <sppan>$3</sppan></p>
    
      <div className='order-promo'>
        <input className='input-promo' type='text' placeholder='Apply Voucher'  ></input>
        <button className='button-promo'>Find Promo</button>
      </div>
      <hr className='divider'></hr>
      <p>Total <span>$174.6</span></p>
      </div>
      <button className='checkout'>Checkout</button>
    </div>
  )
}

export default Orderboard
