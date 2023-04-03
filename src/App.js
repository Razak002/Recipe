import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUser, faSliders, faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Categories from './components/Categories';
import Home from './components/Home';



const App = () => {
  return (

    <div className="app">
    
      <Switch>

        <Route exact path='/'><Home /></Route>
        <Route path='/categories'><Categories /></Route>
      </Switch>
      <nav className='nav'>
        <div className='fonts'>
          <li><Link to='/' > <FontAwesomeIcon icon={faHome} className='red'></FontAwesomeIcon></Link></li>
          <li><Link to='/categories'  className='yellow'><FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon>categories</Link></li>
        </div>
      </nav>
    </div>

  )
}

export default App
