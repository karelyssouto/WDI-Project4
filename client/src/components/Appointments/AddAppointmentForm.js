import React, { Component } from 'react';
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';


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

                <Button color='danger' onClick={this.toggleForm}>click</Button>

                <Modal isOpen={this.state.editForm} toggle={this.toggleForm} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleForm}>Edit Your Profile</ModalHeader>
                    <ModalBody>
                        <Input placeholder='name' name='name' value={this.state.makeupartist.name} onChange={this.handleChange} />
                        <Input placeholder='hometown' name='hometown' value={this.state.makeupartist.hometown} onChange={this.handleChange} />
                        <Input placeholder='img' name='img' value={this.state.makeupartist.img} onChange={this.handleChange} />
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