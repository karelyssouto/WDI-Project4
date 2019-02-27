import React, { Component } from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class AddAppointmentForm extends Component {
    state = {
        appointments: {
            date: '',
            location: '',
            category: '',
        }
    }
    handleChange = (e) => {
        const newState = { ...this.state.appointments }
        newState[e.target.name] = e.target.value
        this.setState({ appointments: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const createAppointment = this.state.appointments
        axios.post('/api/v1/appointments/', createAppointment)
            .then((res) => {
                this.props.getAppointments()
            })
    }
    render() {
        return (
            <div>
                <Label>Date: </Label>
                <Input type="date" placeholder='name' name='name' value={this.state.makeupartist.name} onChange={this.handleChange} />


                <Label >Location:</Label>
                <Input placeholder='hometown' name='hometown' value={this.state.makeupartist.hometown} onChange={this.handleChange} />

                <Label>Your Picture</Label>
                <Input placeholder='img' name='img' value={this.state.makeupartist.img} onChange={this.handleChange} />

                <Button onClick={this.handleSubmit}>Create User</Button>
            </div>
        );
    }
}

export default AddAppointmentForm;