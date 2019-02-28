import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


class AddAppointmentForm extends Component {
    state = {
        appointments: {
            date: '',
            location: '',
            category: '',
        },
        addForm: false
    }
    handleChange = (e) => {
        const newState = { ...this.state.appointments }
        newState[e.target.name] = e.target.value
        this.setState({ appointments: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const createAppointment = this.state.appointments
        axios.post('/api/v1/appointments/', createAppointment)
            .then(() => {
                this.props.getAppointments()
            })
    }
    toggleForm = () => {
        this.setState({ addForm: !this.state.addForm })
    }
    render() {
        return (
            <div>
                <Fab className='addButton' aria-label="Add"onClick={this.toggleForm} >
                    <AddIcon />
                </Fab>

                <Modal isOpen={this.state.addForm} toggle={this.toggleForm} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleForm}>Edit Your Profile</ModalHeader>
                    <ModalBody>
                        <Input type='datetime-local' placeholder='date' name='date' value={this.state.appointments.date} onChange={this.handleChange} />
                        <Input placeholder='location' name='location' value={this.state.appointments.location} onChange={this.handleChange} />
                        <Input placeholder='category' name='category' value={this.state.appointments.category} onChange={this.handleChange} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Do Something</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddAppointmentForm;