import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

import UserLogin from './components/UserLogin'
import BussinessLogin from './components/BusinessLogin'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/login' component={UserLogin} />
      <Route exact path='/bussiness-login' component={BussinessLogin} />
      <Route exact path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

export default App
