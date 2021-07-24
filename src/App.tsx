import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import { store } from './store/store'
import { SimpleSelectorTest } from './simple-selector/SimpleSelectorTest'
import { ComputedSelectorTest } from './computed/ComputedSelectorTest'
import { ReselectSelectorTest } from './reselect/ReselectSelectorTest'
import { CurriedSelectorTest } from './curried/CurriedSelectorTest'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <div className='logo'>Redux Selector Test Bench</div>
          <nav>
            <ol>
              <li><NavLink to='/simple'>Simple</NavLink></li>
              <li><NavLink to='/computed'>Computed</NavLink></li>
              <li><NavLink to='/reselect'>Reselect</NavLink></li>
              <li><NavLink to='/curried'>Curried</NavLink></li>
            </ol>
          </nav>
        </header>
      <Switch>
        <Route exact path='/simple'><SimpleSelectorTest /></Route>
        <Route exact path='/computed'><ComputedSelectorTest /></Route>
        <Route exact path='/reselect'><ReselectSelectorTest /></Route>
        <Route exact path='/curried'><CurriedSelectorTest /></Route>
      </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
