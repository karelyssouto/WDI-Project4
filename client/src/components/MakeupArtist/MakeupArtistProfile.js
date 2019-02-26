import React, { Component } from 'react';
import '../../App.css'
import axios from 'axios'
import EditMakeupArtist from './EditMakeupArtist';
import AppointmentList from '../Appointments/AppointmentList';


class MakeupArtistProfile extends Component {
    state = {
        makeupartist: []
    }
    componentDidMount() {
        this.getMakeupArtistById()
    }
    getMakeupArtistById = () => {
        axios.get(`/api/v1/makeupartist/${this.props.match.params.id}/`).then((res) =>
            this.setState({ makeupartist: res.data }))
    }
    render() {
        return (
            <div className='App'>
                <AppointmentList
                    getAppointments={this.props.getAppointments}
                />
                <EditMakeupArtist  />
            </div>
        );
    }
}

export default MakeupArtistProfile;