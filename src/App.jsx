import './App.css';
import { Route, Routes,  } from "react-router-dom";
import { BookPageContainer } from './Pages/Book/BookPageContainer';
import { SongPageContainer } from './Pages/SongPage/SongPageContainer';
import { CollectionsContainer } from './Components/Collections/CollectionsContainer';
import { ThemePageContainer } from './Pages/ThemePage/ThemePageContainer';
import { initializeApp } from "firebase/app";
import { Navigation } from './Components/Navigation/Navigation';
import { AddPageContainer } from './Pages/AddPage/AddPageContainer';
import { HomePage } from './Pages/Home/HomePage';

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

export const App = () => {
    return (
      <div>
        <div className="container">
          <span className="breadcrumps-line"></span>
          <Routes>
            <Route path='/songs/:songId?' element={<SongPageContainer/>} />
            <Route path='/add' element={<AddPageContainer/>} />
            <Route path='/collections' element={<CollectionsContainer/>} />
            <Route path='/themes/:themeId?' element={<ThemePageContainer/>} />
            <Route exact path='/' element={<HomePage/>} />
            <Route path="*" element={<div className="error__not-found">404 NOT FOUND</div>} />
          </Routes>
        </div>
        <Navigation/>
      </div>
    );
}
