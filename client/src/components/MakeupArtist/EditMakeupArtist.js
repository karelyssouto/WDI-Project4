import React, { Component } from 'react';
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

class EditMakeupArtist extends Component {
    state = {
        makeupartist: {
            name: '',
            hometown: '',
            img: '',
        },
        editForm: false
        
    }

    handleChange = (e) => {
        const newState = { ...this.state.makeupartist }
        newState[e.target.name] = e.target.value
        this.setState({ makeupartist: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const updateMakeupArtist = this.state.makeupartist
        axios.patch(`/api/v1/makeupartist/${this.props.id}/`,updateMakeupArtist)
            .then((res) => {
                // this.props.getAllMakeupArtist()
            })
    }
    toggleForm = () => {
        this.setState({ editForm: !this.state.editForm })
    }
    deleteProfile = () =>{
        axios.delete(`api/v1/makeupartist/${this.props.id}/`)
            .then(() => {
                this.props.getMakeupArtistById()
            })
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
                    <Button color="danger" onClick={this.deleteProfile}>Delete Your Profile</Button>
                </ModalFooter>
            </Modal>
            </div>   
        );
    }
}

export default EditMakeupArtist;