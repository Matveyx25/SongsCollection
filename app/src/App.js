import React, { Component } from 'react'
import './App.css';
import {Route, withRouter, BrowserRouter, Switch, Redirect, NavLink} from "react-router-dom"
import NavigationContainer from './Components/Navigation/NavigationContainer';
import HomePageContainer from './Pages/Home/HomePageContainer';
import SearchPageContainer from './Pages/SearchPage/SearchPageContainer';
import SongPageContainer from './Pages/SongPage/SongPageContainer';
import AddPageContainer from './Pages/AddPage/AddPageContainer';
import ProfilePageContainer from './Pages/Profile/ProfilePageContainer';
import BookPageContainer from './Pages/Book/BookPageContainer';
import { initialazeApp } from './redux/app-reducer'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/store'
import CollectionsContainer from './Components/Collections/CollectionsContainer';
import ThemePageContainer from './Pages/ThemePage/ThemePageContainer';
// import Preloader from './components/common/preloader/preloader'

class App extends Component {
  catchAllUnhandledError = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent)
  }
  componentDidMount(){
    // this.props.initialazeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  render() {
    // if(!this.props.initialazed){
    //   return <Preloader />
    // }
    return (
      <div>
        <div className="container">
          <span className="breadcrumps-line"></span>
          <div className="breadcrumps">
          <Switch>
            <Route path='/songs/:songId?' render={() => <></>} />
            {/* <Route path='/add' render={() => <AddPageContainer/>} /> */}
            {/* <Route path='/search' render={() => <SearchPageContainer/>} /> */}
            <Route path='/themes' render={() => <span>Подборки</span>} />
            {/* <Route path='/themes/:themeId?/:themeName?' render={() => <span>{this.props.match.params.themeName}</span>} /> */}
            <Route exact path='/' render={() => <span>Подборки</span>} />
          </Switch> 
          </div>
          <Switch>
            <Route path='/profile' render={() => <ProfilePageContainer/>} />
            <Route path='/songs/:songId?' render={() => <SongPageContainer/>} />
            <Route path='/book' render={() => <BookPageContainer/>} />
            {/* <Route path='/add' render={() => <AddPageContainer/>} /> */}
            <Route path='/search' render={() => <SearchPageContainer/>} />
            <Route exact path='/' render={() => <CollectionsContainer/>} />
            <Route path='/themes/:themeId?' render={() => <ThemePageContainer/>} />
          </Switch>
        </div>
        
        <NavigationContainer/>
      </div>
    );
  } 
}

const mapStateToProps = (state) => ({
  // initialazed: state.app.initialazed
})

const AppContainer = compose(
  withRouter ,
   connect(mapStateToProps))(App)

const MainApp = props => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 


export default MainApp;
