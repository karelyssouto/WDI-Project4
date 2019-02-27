import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage';
import MakeupArtistForm from './components/MakeupArtist/MakeupArtistForm'
import MakeupArtistList from './components/MakeupArtist/MakeupArtistList';
import MakeupArtistProfile from './components/MakeupArtist/MakeupArtistProfile';
import AppointmentList from './components/Appointments/AppointmentList';
import AddAppointmentForm from './components/Appointments/AddAppointmentForm';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/makeupartist' component={MakeupArtistList} />
            <Route exact path='/new' component={MakeupArtistForm} />
            <Route exact path='/makeupartist/:id' component={MakeupArtistProfile} />
            <Route exatc path='/makeupartist/:id' component={AppointmentList} />
            <Route exatc path='/makeupartist/:id/appointments/new' component={AddAppointmentForm} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
