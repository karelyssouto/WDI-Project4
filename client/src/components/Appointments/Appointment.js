import React, { Component } from 'react';
import axios from 'axios'
import AddClientForm from '../Clients/AddClientForm';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import ClientList from '../Clients/ClientList';

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
    deleteAppointment = () => {
        axios.delete(`/api/v1/appointments/${this.props.match.params.id}/`)
            .then(() => {
            })
    }
    render() {
        return (
            <div>
                <h1>Appointment Details:</h1>
                <h1>{this.state.appointment.date}</h1>

                <Link to={`/${this.state.appointment.clientId}`}><Button variant="contained" color="secondary" onClick={this.deleteAppointment} >
                    Delete Appointment
                     <DeleteIcon />
                </Button></Link>
                <AddClientForm
                    toggle={this.props.toggleForm}
                    createClient={this.props.createClient}
                />
                <ClientList
                client={this.state.appointment}
                id={this.state.appointment.clientId}
                />
            </div>
        );
    }
}

export default Appointment;