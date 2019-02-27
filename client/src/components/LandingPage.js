import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Button } from 'reactstrap'


class LandingPage extends Component {

    render() {
        return (
            <div className='App LandingPage'>
                <h1 className='MainHeader'>Beauty</h1>
                <h2 className='SecondHeader'>Calendar</h2>
                <Link to='/new'><Button className='Button' color='warning'>Get Started</Button></Link>
            </div>
        );
    }
}

export default LandingPage;