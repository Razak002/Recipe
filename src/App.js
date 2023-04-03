import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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
    
    </div>

  )
}

export default App
