import React from 'react'
import Food from '../assets/img/Food.jpg'
import Food1 from '../assets/img/Food1.jpg'
import Food2 from '../assets/img/Food2.jpg'
import Food3 from '../assets/img/Food3.jpg'
import Food4 from '../assets/img/Food4.jpg'
import Food5 from '../assets/img/Food5.jpg'
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dashboard () {
  return (
    <div className='dashboard'>
      <div className='dashboard-b'>
        <img src={Food2} alt='img' />
        <div className='promo'><h1><span>50% 0FF</span></h1><br></br>
          <h2>Tasty Food<br></br>On your table</h2>
        </div>
      </div>

      <h3 className='dashbord-title'>Recommended Foods For You</h3>
      <div className='dashbord-menue'>
        <a href='#'>favorites</a>
        <a href='#'>Best seller</a>
        <a href='#'>Near Me</a>
        <a href='#'>promotion</a>
        <a href='#'>Top rated</a>
        <a href='#'>All</a>
      </div>
      <div className='dashbord-content'>
        <div className='dashbord-card'>
          <img className='card' src={Food} alt='food' />
          <div className='card-details'>
            <h4>Amazing pizza<span>$30</span></h4>
            <p>Lorem ipsum dolor sit</p>
            <p className='card-time'><span className='time'>15-30mins</span></p>
          </div>
        </div>
        <div className='dashbord-card'>
          <img className='card' src={Food3} alt='food' />
          <div className='card-details'>
            <h4>Amazing pizza<span>$30</span></h4>
            <p>Lorem ipsum dolor sit</p>
            <p className='card-time'><span className='time'>15-30mins</span></p>
          </div>
        </div>
        <div className='dashbord-card'>
          <img className='card' src={Food4} alt='food' />
          <div className='card-details'>
            <h4>Amazing pizza<span>$30</span></h4>
            <p>Lorem ipsum dolor sit</p>
            <p className='card-time'><span className='time'>15-30mins</span></p>
          </div>
        </div>
        <div className='dashbord-card'>
          <img className='card' src={Food5} alt='food' />
          <div className='card-details'>
            <h4>Amazing pizza<span>$30</span></h4>
            <p>Lorem ipsum dolor sit</p>
            <p className='card-time'><span className='time'>15-30mins</span></p>
          </div>
        </div>
        <div className='dashbord-card'>
          <img className='card' src={Food} alt='food' />
          <div className='card-details'>
            <h4>Amazing pizza<span>$30</span></h4>
            <p>Lorem ipsum dolor sit</p>
            <p className='card-time'><span className='time'>15-30mins</span></p>
          </div>
        </div>
        <div className='dashbord-card'>
          <img className='card' src={Food1} alt='food' />
          <div className='card-details'>
            <h4>Amazing pizza<span>$30</span></h4>
            <p>Lorem ipsum dolor sit</p>
            <p className='card-time'><span className='time'>15-30mins</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
