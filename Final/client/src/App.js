import logo from './logo.svg';
import './App.css';

import { Routes, Route, Outlet } from "react-router-dom";

import Login from './pages/Login';
import MainPage from './pages/MainPage';
import CreateAcount from './pages/CreateAcount';






import Allmembers from './pages/Members/Allmembers';
import Addmemeber from './pages/Members/Addmemeber';
import Members from './pages/Members/Members';

import MovieWatch from './pages/Members/MovieWatch';
import HsntWtchYet from './pages/Members/HsntWtchYet';


import MainEmployees from './pages/Employees/MainEmployees';
import Employees from './pages/Employees/Employees';
import AddEmployee from './pages/Employees/AddEmployee';
import Main from './pages/Movies.js/Main';
import Addmovies from './pages/Movies.js/Addmovies';
import AllMovie from './pages/Movies.js/Movies';
import Edite from './pages/Movies.js/Edite';
import Movie from './pages/Movies.js/Movie';
import FindMovie from './pages/Movies.js/FindMovie';










function App() {



  return (
    <div className="App">

      <Routes>
        <Route index element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/CreateAcount" element={<CreateAcount />} />






        <Route path="/Movies" element={<Main />} />
        <Route path="/AllMovie" element={< AllMovie />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/FindMovie/:find" element={<FindMovie />} />
        <Route path="/Addmovies" element={<Addmovies />} />
        <Route path="/Edite" element={<Edite />} />






        <Route path="/Allmembers" element={<Allmembers />} />
        <Route path="/members" element={<Members />} />
        <Route path="/Addmember" element={<Addmemeber />} />
        <Route path="/MovieWatch" element={<MovieWatch />} />
        <Route path="/HsntWtchYet" element={<HsntWtchYet />} />
        <Route path="/FindMember/:find" element={<HsntWtchYet />} />



        <Route path="/MainEmployees" element={<MainEmployees />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
      </Routes>

      <Outlet />

    </div>
  )
}

export default App;
