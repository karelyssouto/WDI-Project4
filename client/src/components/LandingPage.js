import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class LandingPage extends Component {

    render() {
        return (
            <div className='App'>
                <h1 className='MainHeader'>Beauty</h1>
                <h2 className='SecondHeader'>Calendar</h2>
                <button onClick={this.getCurrentUser}>Get Started</button>
                <Link to='/makeupartist' className='link'>Get Started</Link>
            </div>
        );
    }
}

export default LandingPage;