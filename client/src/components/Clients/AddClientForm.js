import React, { Component } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddClientForm extends Component {
    state= {
        client: {
            name: '',
            img: '',
            skinTone: '',
            skinType: '',
        }
    }
    handleChange = (e) => {
        const newState = { ...this.state.client }
        newState[e.target.name] = e.target.value
        this.setState({ client: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const createClient = this.state.client
        axios.post('/api/v1/client/', createClient)
            .then((res) => {
                this.props.getClient()
            })
    }
    render() {
        return (
            <div>
                <Label>Name:</Label>
                <Input type="text" placeholder='name' name='name' value={this.state.client.name} onChange={this.handleChange} />

                <Label>Your Picture:</Label>
                <Input placeholder='img' name='img' value={this.state.client.img} onChange={this.handleChange} />

                <Label >Skin Tone:</Label>
                <Input placeholder='Skin Tone' name='skinTone' value={this.state.client.skinTone} onChange={this.handleChange} />  

                <Label>Skin Type:</Label>
                <Input placeholder='img' name='img' value={this.state.client.skinType} onChange={this.handleChange} />

                <Button onClick={this.handleSubmit}>Create User</Button>
            </div>
        );
    }
}

export default AddClientForm;