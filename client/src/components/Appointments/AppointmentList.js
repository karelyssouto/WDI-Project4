import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AppointmentList extends Component {
    render() {
        return (
            <div>
                {this.props.makeupartist.appointments.map((appointment, i) => {
                    return (<div key= {i}>

                        <Link to={`/${appointment.clientId}`}><h5>{appointment.date}</h5></Link>
                        <h5>{appointment.location}</h5>
                    
                    </div>
                        
                    )
                })}
            </div>
        );
    }
}

export default AppointmentList;