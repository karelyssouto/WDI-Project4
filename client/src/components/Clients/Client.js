import React, { Component } from 'react';
import axios from 'axios'
class Client extends Component {
    deleteAppointment = () => {
        axios.delete(`/api/v1/client/${this.props.match.params.id}/`)
            .then(() => {
            })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Client;