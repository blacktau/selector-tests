import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import { store } from './store/store'
import { SimpleSelectorTest } from './simple-selector/SimpleSelectorTest'
import { ComputedSelectorTest } from './computed/ComputedSelectorTest'
import { ReselectSelectorTest } from './reselect/ReselectSelectorTest'
import { CurriedSelectorTest } from './curried/CurriedSelectorTest'
import { CurriedReselectTest } from './curried-reselect/CurriedReselectTest'
import { ReverseCurriedReselectTest } from './reverse-curried-reselect/ReverseCurriedReselectTest'
import { SudoReselectTest } from './sudo-reselect/SudoReselectTest'
import { CustomReselectTest } from './custom-reselect/CustomReselectTest'
import { Home } from './Home'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter basename='selector-tests'>
        <header>
          <div className='logo'>Redux Selector Test Bench</div>
          <nav>
            <ol>
              <li><NavLink to='/simple'>Simple</NavLink></li>
              <li><NavLink to='/computed'>Computed</NavLink></li>
              <li><NavLink to='/reselect'>Reselect</NavLink></li>
              <li><NavLink to='/curried'>Curried</NavLink></li>
              <li><NavLink to='/curried-reselect'>Curried Reselect</NavLink></li>
              <li><NavLink to='/reverse-curried-reselect'>Reverse Curried Reselect</NavLink></li>
              <li><NavLink to='/custom-reselect'>Custom Reselect</NavLink></li>
            </ol>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/simple'><SimpleSelectorTest /></Route>
          <Route exact path='/computed'><ComputedSelectorTest /></Route>
          <Route exact path='/reselect'><ReselectSelectorTest /></Route>
          <Route exact path='/curried'><CurriedSelectorTest /></Route>
          <Route exact path='/curried-reselect'><CurriedReselectTest /></Route>
          <Route exact path='/reverse-curried-reselect'><ReverseCurriedReselectTest /></Route>
          <Route exact path='/sudo-reselect'><SudoReselectTest /></Route>
          <Route exact path='/custom-reselect'><CustomReselectTest /></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
