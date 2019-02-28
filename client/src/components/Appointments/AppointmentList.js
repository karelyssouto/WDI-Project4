import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AppointmentList extends Component {
    render() {
        return (
            <div>
                {this.props.appointments.appointments.map((appointment, i) => {
                    return (<div 
                        key= { i }
                        appointment={appointment}
                        appointmentId={appointment.appointmentid}>

                        <Link to='/appointmentid'><h5>{appointment.date}</h5></Link>
                        <h5>{appointment.location}</h5>
                    
                    </div>
                        
                    )
                })}
            </div>
        );
    }
}

export default AppointmentList;