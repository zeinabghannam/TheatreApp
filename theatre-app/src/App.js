import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap-rtl.css';
import './css/navbar.css';
import './css/theatres.css';
import Header from './components/header';
import Footer from './components/footer';
import Theatres from './components/theatres';
import AddTheatre from './components/addTheatre'
import BackgroundVideo from './components/backgroundVideo'

function App() {
  return (
    <div className="rtl container-fluid">
      <BackgroundVideo />
      <Header />
      <Theatres />
      <Footer />
    </div>
  );
}

export default App;
