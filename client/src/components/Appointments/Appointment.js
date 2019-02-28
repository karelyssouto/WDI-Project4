import React, { Component } from 'react';
import axios from 'axios'
import AddClientForm from '../Clients/AddClientForm';

class Appointment extends Component {
    state = {
        appointment: {
            client:[]
        }
    }
    componentDidMount() {
        this.getAppointmentById()
    }
    getAppointmentById = () => {
        axios.get(`/api/v1/appointments/${this.props.match.params.id}/`).then((res) =>
            this.setState({ appointment: res.data }))
    }
    render() {
        return (
            <div>
                <h1>Appointment Details:</h1>
                <h1>{this.state.appointment.date}</h1>

                <AddClientForm
                    toggle={this.props.toggleForm}
                    createClient={this.props.createClient}
                />
            </div>
        );
    }
}

export default Appointment;