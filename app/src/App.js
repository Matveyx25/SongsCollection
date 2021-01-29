import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import NavigationContainer from './Components/Navigation/NavigationContainer';
import HomePageContainer from './Pages/Home/HomePageContainer';
import SearchPageContainer from './Pages/SearchPage/SearchPageContainer';
import AddPageContainer from './Pages/AddPage/AddPageContainer';
import ProfilePageContainer from './Pages/Profile/ProfilePageContainer';
import BookPageContainer from './Pages/Book/BookPageContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path='/profile' render={() => <ProfilePageContainer/>} />
          <Route path='/add' render={() => <AddPageContainer/>} />
          <Route path='/search' render={() => <SearchPageContainer/>} />
          <Route path='/book' render={() => <BookPageContainer/>} />
          <Route exact path='/' render={() => <HomePageContainer/>} />
        </Switch>
      </div>
      
      <NavigationContainer/>
    </BrowserRouter>
  );
}

export default App;
