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
            <div className='background'>                
                <EditMakeupArtist
                    getMakeupArtistById={this.getMakeupArtistById}
                    id={this.state.makeupartist.artistId}
                    toggle={this.props.toggleForm}
                    updateMakeupArtist={this.props.updateMakeupArtist}
                    deleteProfile={this.props.deleteProfile}
                />
                
                <img className='profileimg Button' src={this.state.makeupartist.img} alt='Profile Pic'/>           
                <div className='App SecondHeader'> 
                <h1>{this.state.makeupartist.name}</h1>
                <h3>{this.state.makeupartist.hometown}</h3>
                

                <AppointmentList
                    makeupartist={this.state.makeupartist}
                    id={this.state.makeupartist.appointments.clientId}
                />
                

                <div/>
            </div>     
                <AddAppointmentForm 
                    id={this.props.match.params.id}
                    toggle={this.props.toggleForm}
                    createAppointment={this.props.createAppointment}
                />
            </div>
        );
    }
}


export default MakeupArtistProfile;