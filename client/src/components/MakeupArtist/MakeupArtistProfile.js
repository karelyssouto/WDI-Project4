import React, { Component } from 'react';
import '../../App.css'
import axios from 'axios'
import {Button} from 'reactstrap'
import EditMakeupArtist from './EditMakeupArtist';
import AppointmentList from '../Appointments/AppointmentList';
import AddAppointmentForm from '../Appointments/AddAppointmentForm';


class MakeupArtistProfile extends Component {
    state = {
        makeupartist: {}, 
        editForm: false
    }
    componentDidMount() {
        this.getMakeupArtistById()
    }
    getMakeupArtistById = () => {
        axios.get(`/api/v1/makeupartist/${this.props.match.params.id}/`).then((res) =>
            this.setState({ makeupartist: res.data }))
    }
    // toggleForm = () => {
    //     this.setState({ editForm : !this.state.editForm })
    // }
    render() {
        return (
            <div className='App'>

                <img src={this.state.makeupartist.img} alt='Profile Pic'/>
                <h1>{this.state.makeupartist.name}</h1>
                <h3>{this.state.makeupartist.hometown}</h3>
                <AppointmentList
                    getAppointments={this.props.getAppointments}
                />
                
                <EditMakeupArtist
                    getMakeupArtistById={this.getMakeupArtistById}
                    id={this.state.makeupartist.artistId}
                    toggle={this.props.toggleForm}
                    updateMakeupArtist={this.props.updateMakeupArtist}
                    deleteProfile={this.props.deleteProfile}
                />
                {/* <AddAppointmentForm /> */}
                <div/>
            </div>
        );
    }
}

export default MakeupArtistProfile;