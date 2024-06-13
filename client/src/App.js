import { Component } from 'react'
import {Switch ,Route,BrowserRouter} from 'react-router-dom'

import './App.css'

import Home from "./components/Home"
import Translate from './components/Translate'
import Theme from "./context/theme"
import About from './components/About'

class App extends Component{
  state={isDarkTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render(){
    const {isDarkTheme} = this.state 

    return(
      <Theme.Provider value={{
        isDarkTheme: isDarkTheme,
        changeTheme: this.changeTheme,
      }}>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/translate" component={Translate} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>

      </Theme.Provider>
    )
    
  }
}



export default App