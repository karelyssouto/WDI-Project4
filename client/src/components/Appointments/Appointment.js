import React, { Component } from 'react';

class Appointment extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.appointment.date}</h1>
            </div>
        );
    }
}

export default Appointment;