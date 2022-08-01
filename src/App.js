import React from 'react'
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import SignIn from './pages/SignIn'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/watchlist' exact element={<Watchlist />}/>
            <Route path='/singIn' exact element={<SignIn />}/>
          </Routes>
          <Footer />
        </Router>

      </GlobalProvider>
    </div>
  );
}

export default App;
