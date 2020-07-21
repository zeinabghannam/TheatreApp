import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap-rtl.css';
import './css/navbar.css';
import './css/theatres.css';
import Header from './components/header';
import Footer from './components/footer';
import TheatreMonth from './components/theatreMonth';
import AddTheatre from './components/addTheatre'

function App() {
  return (
    <div className="rtl container-fluid">
     <Header />
      <AddTheatre />
      <Footer />
    </div>
  );
}

export default App;
