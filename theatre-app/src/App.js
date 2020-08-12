import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/bootstrap-rtl.css';
import './css/navbar.css';
import './css/theatres.css';
import Header from './components/header';
import Footer from './components/footer';
import Theatres from './components/theatres';
import AddTheatre from './components/addTheatre'
import Home from './components/home'
import BackgroundVideo from './components/backgroundVideo'


function App() {
  return (
    <BrowserRouter>
      <div className="rtl container-fluid">
        {/* <BackgroundVideo /> */}
        <Header />
        {/* <Theatres /> */}
        <Switch>
          <Route path="/edit/:theatreId" render={(props) => <AddTheatre IsEditting="true"  {...props} />} />
          <Route path="/add" render={(props) => <AddTheatre IsEditting="false"  {...props} />} />
          <Route path="/all" render={(props) => <Theatres  {...props} />}  />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
