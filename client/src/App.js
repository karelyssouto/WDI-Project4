import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage';
import MakeupArtistProfile from './components/MakeupArtist/MakeupArtistProfile'
import axios from 'axios'



class App extends Component {
  state = {
    makeupartist: {
      name: '',
      hometown: '',
      img: '',
      appointments:[{
        date:'',
        location:'',
        category:'',
        client:{
          name:'',
          img:'',
          skinTone: '',
          skinType:''
        }
      }]
    }
  }
  componentDidMount() {
    this.getCurrentUser()
  }
  getCurrentUser = () => {
    axios.get('/api/makeupartist').then((res) =>
      this.setState({ makeupartist: res.data }))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/makeupartist' component={MakeupArtistProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
