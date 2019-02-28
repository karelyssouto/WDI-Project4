import React, { Component } from 'react';
import axios from 'axios'
import { Button, Input } from 'reactstrap';
import { Link } from '@material-ui/core';

class MakeupArtistForm extends Component {
    state = {
        makeupartist: {
            name: '',
            hometown: '',
            img: '',
        }
    }

    handleChange = (e) => {
        const newState = { ...this.state.makeupartist }
        newState[e.target.name] = e.target.value
        this.setState({ makeupartist: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const createMakeupArtist = this.state.makeupartist
        axios.post('/api/v1/makeupartist/', createMakeupArtist)
            .then((res) => {
                this.props.getAllMakeupArtist()
            })
    }

    render() {
        return (
            <div className='NewMakeupArtist '>
            <h1 className='Header'>Create Your Profile</h1>
            <div className='formContainer'>
             <h3 className='Button'>Name</h3>
             <Input type="text" placeholder='Name' name='name' value={this.state.makeupartist.name} onChange={this.handleChange} />

                            
            <h3 className='Button'>Hometown</h3>
            <Input placeholder='Hometown' name='hometown' value={this.state.makeupartist.hometown} onChange={this.handleChange} />
                            
            <h3 className='Button'>Your Picture</h3>
             <Input placeholder='Image URL' name='img' value={this.state.makeupartist.img} onChange={this.handleChange}/>
        
            <Link to='/makeupartist'><Button color='warning' className='Button' onClick={this.handleSubmit}>Create User</Button></Link>
            </div>
            </div>
        );
    }
}

export default MakeupArtistForm;