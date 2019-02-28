import React, { Component } from 'react';
import '../../App.css'
import axios from 'axios'
import EditMakeupArtist from './EditMakeupArtist';
import AppointmentList from '../Appointments/AppointmentList';
import AddAppointmentForm from '../Appointments/AddAppointmentForm';


class MakeupArtistProfile extends Component {
    state = {
        makeupartist: {
            appointments: []
        }, 
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

                <img src={this.state.makeupartist.img} alt='Profile Pic'/>
                <h1>{this.state.makeupartist.name}</h1>
                <h3>{this.state.makeupartist.hometown}</h3>
                <AppointmentList
                    appointments={this.state.makeupartist}
                />
                
                <EditMakeupArtist
                    getMakeupArtistById={this.getMakeupArtistById}
                    id={this.state.makeupartist.artistId}
                    toggle={this.props.toggleForm}
                    updateMakeupArtist={this.props.updateMakeupArtist}
                    deleteProfile={this.props.deleteProfile}
                />

                <AddAppointmentForm 
                    toggle={this.props.toggleForm}
                    createAppointment={this.props.createAppointment}
                />
                <div/>
            </div>
        );
    }
}


export default MakeupArtistProfile;