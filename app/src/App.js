import React, { Component } from 'react'
import './App.css';
import {Route, withRouter, Switch, HashRouter, BrowserRouter} from "react-router-dom"
import NavigationContainer from './Components/Navigation/NavigationContainer';
import HomePageContainer from './Pages/Home/HomePageContainer';
import SearchPageContainer from './Pages/SearchPage/SearchPageContainer';
import SongPageContainer from './Pages/SongPage/SongPageContainer';
import AddPageContainer from './Pages/AddPage/AddPageContainer';
import ProfilePageContainer from './Pages/Profile/ProfilePageContainer';
import BookPageContainer from './Pages/Book/BookPageContainer';
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/store'
import CollectionsContainer from './Components/Collections/CollectionsContainer';
import ThemePageContainer from './Pages/ThemePage/ThemePageContainer';

class App extends Component {
  componentDidMount(){
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  render() {
    return (
      <div>
        <div className="container">
          <span className="breadcrumps-line"></span>
          <div className="breadcrumps">
          <Switch>
            <Route path='/songs/:songId?' render={() => <></>} />
            <Route path='/collections' render={() => <span>Темы</span>} />
            <Route exact path='/' render={() => <span>Подборки</span>} />
          </Switch> 
          </div>
          <Switch>
            <Route path='/profile' render={() => <ProfilePageContainer/>} />
            <Route path='/songs/:songId?' render={() => <SongPageContainer/>} />
            <Route path='/book' render={() => <BookPageContainer/>} />
            <Route path='/search' render={() => <SearchPageContainer/>} />
            <Route path='/collections' render={() => <CollectionsContainer/>} />
            <Route path='/add981832189song' render={() => <AddPageContainer/>} />
            <Route path='/themes/:themeId?' render={() => <ThemePageContainer/>} />
            <Route exact path='/' render={() => <HomePageContainer/>} />
            <Route path="*" render={() => <div className="error__not-found">404 NOT FOUND</div>} />
          </Switch>
        </div>
        <NavigationContainer/>
      </div>
    );
  } 
}

const AppContainer = compose(withRouter , connect(null))(App)

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 


export default MainApp;
