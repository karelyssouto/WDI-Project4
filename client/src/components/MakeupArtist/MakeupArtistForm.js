import React, { Component } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            <div>

             <Label>Name</Label>
             <Input type="text" placeholder='name' name='name' value={this.state.makeupartist.name} onChange={this.handleChange} />

                            
             <Label >Hometown</Label>
            <Input placeholder='hometown' name='hometown' value={this.state.makeupartist.hometown} onChange={this.handleChange} />
                            
            <Label>Your Picture</Label>
             <Input placeholder='img' name='img' value={this.state.makeupartist.img} onChange={this.handleChange}/>
        
            <Button onClick={this.handleSubmit}>Create User</Button>
            </div>
        );
    }
}

export default MakeupArtistForm;