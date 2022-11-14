import React, { Component } from 'react'
import './App.css';
import {Route, withRouter, Switch, HashRouter} from "react-router-dom"
import HomePageContainer from './Pages/Home/HomePageContainer';
import BookPageContainer from './Pages/Book/BookPageContainer';
import SongPageContainer from './Pages/SongPage/SongPageContainer';
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/store'
import CollectionsContainer from './Components/Collections/CollectionsContainer';
import ThemePageContainer from './Pages/ThemePage/ThemePageContainer';
import { initializeApp } from "firebase/app";
import Navigation from './Components/Navigation/Navigation';
import AddPageContainer from './Pages/AddPage/AddPageContainer';

const firebaseConfig = {
  apiKey: "AIzaSyA73kt8GIlxafwzBFjqoMSZd_-3Te-OdyA",
  authDomain: "songscollection-a32c7.firebaseapp.com",
  databaseURL: "https://songscollection-a32c7-default-rtdb.firebaseio.com",
  projectId: "songscollection-a32c7",
  storageBucket: "songscollection-a32c7.appspot.com",
  messagingSenderId: "602606518948",
  appId: "1:602606518948:web:0fba78267cf8ed9e87dc31"
};

const fbApp = initializeApp(firebaseConfig);

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
          <Switch>
            <Route path='/songs/:songId?' render={() => <SongPageContainer/>} />
            <Route path='/add' render={() => <AddPageContainer/>} />
            <Route path='/book' render={() => <BookPageContainer/>} />
            <Route path='/collections' render={() => <CollectionsContainer/>} />
            <Route path='/themes/:themeId?' render={() => <ThemePageContainer/>} />
            <Route exact path='/' render={() => <HomePageContainer/>} />
            <Route path="*" render={() => <div className="error__not-found">404 NOT FOUND</div>} />
          </Switch>
        </div>
        <Navigation/>
      </div>
    );
  } 
}

const AppContainer = compose(withRouter , connect(null))(App)

const MainApp = props => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
} 


export default MainApp;
