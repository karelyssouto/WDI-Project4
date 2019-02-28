import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage';
import MakeupArtistForm from './components/MakeupArtist/MakeupArtistForm'
import MakeupArtistList from './components/MakeupArtist/MakeupArtistList';
import AddAppointmentForm from './components/Appointments/AddAppointmentForm';
import MakeupArtistProfile from './components/MakeupArtist/MakeupArtistProfile';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />            
            <Route exact path='/new' component={MakeupArtistForm} />
            <Route exact path='/makeupartist' component={MakeupArtistList} />
            <Route exact path='/makeupartist/:id' component={MakeupArtistProfile} />
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
