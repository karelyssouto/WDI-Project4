import React, { Component } from 'react';
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class AddClientForm extends Component {
    state= {
        client: {
            name: '',
            img: '',
            skinTone: '',
            skinType: '',
            clientId: ''
        },
        addForm: false
    }
    handleChange = (e) => {
        const newState = { ...this.state.client }
        newState[e.target.name] = e.target.value
        this.setState({ client: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const createClient = this.state.client
        axios.post('/api/v1/client/', createClient)
            .then((res) => {
                // this.props.getClient()
            })
    }
    toggleForm = () => {
        this.setState({ addForm: !this.state.addForm })
    }
    render() {
        return (
            <div>
                <Fab className='addButton' aria-label="Add" onClick={this.toggleForm} >
                    <AddIcon />
                </Fab>

                <Modal isOpen={this.state.addForm} toggle={this.toggleForm} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggleForm}>Who's your client?</ModalHeader>
                    <ModalBody>
                        <Input  placeholder='Name' name='name' value={this.state.client.name} onChange={this.handleChange} />
                        <Input placeholder='Img' name='img' value={this.state.client.img} onChange={this.handleChange} />
                        <Input placeholder='Skin Tone' name='skinTone' value={this.state.client.skinTone} onChange={this.handleChange} />
                        <Input placeholder='Skin Type' name='skinType' value={this.state.client.skinType} onChange={this.handleChange} />
                        <Input type='number' placeholder='Client Id' name='clientId' value={this.state.client.clientId} onChange={this.handleChange} />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Do Something</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddClientForm;