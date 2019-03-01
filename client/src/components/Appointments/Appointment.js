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
            <div class='background'>                
                <AddClientForm
                    toggle={this.props.toggleForm}
                    createClient={this.props.createClient}
                />
                <h1 className='Button App'>Appointment Details:</h1>
                <h1 className='Button App'>{this.state.appointment.date}</h1>
                <h3 className='Button App'>{this.state.appointment.location}</h3>
                <h5 className='Button App'>{this.state.appointment.category}</h5>
                


                <Link to={`/${this.state.appointment.clientId}`}><Button className='App' variant="contained" color="secondary" onClick={this.deleteAppointment} >
                    Delete Appointment
                     <DeleteIcon />
                </Button></Link>

                <ClientList
                client={this.state.appointment}
                id={this.state.appointment.clientId}
                />

            </div>
        );
    }
}

export default Appointment;