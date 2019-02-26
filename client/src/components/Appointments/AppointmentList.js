import React, { Component } from 'react';
import axios from 'axios'
import Appointment from '../Appointments/Appointment'

class AppointmentList extends Component {
    state = {
        appointments: []
    }
    componentDidMount(){
        this.getAppointments()
    }
    getAppointments = () => {
        axios.get('/api/v1/appointments/').then((res) =>
            this.setState({ appointments: res.data }))
    }
    render() {
        return (
            <div>
                {this.state.appointments.map((appointment, i) => {
                    return (<Appointment
                        key={i}
                        appointment={appointment}
                        appointmentId={appointment.appointmentId}
                    />)
                })}
            </div>
        );
    }
}

export default AppointmentList;