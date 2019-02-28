import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {  Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



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
            .then(() => {
                // this.props.getAllMakeupArtist()
            })
    }
    toggleForm = () => {
        this.setState({ editForm: !this.state.editForm })
    }
    deleteProfile = () =>{
        axios.delete(`/api/v1/makeupartist/${this.props.id}/`)
            .then(() => {
                this.props.getMakeupArtistById()
            })
    }
 
    render() {
        return (
            <div>
                <Fab aria-label="Edit" onClick={this.toggleForm}>
                    <Icon>edit_icon</Icon>
                </Fab>
            <Modal isOpen={this.state.editForm} toggle={this.toggleForm} className={this.props.className}>
                <ModalHeader toggle={this.props.toggleForm}>Edit Your Profile</ModalHeader>
                <ModalBody>
                        <Input placeholder='name' name='name' value={this.state.makeupartist.name} onChange={this.handleChange} />
                        <Input placeholder='hometown' name='hometown' value={this.state.makeupartist.hometown} onChange={this.handleChange} />
                        <Input placeholder='img' name='img' value={this.state.makeupartist.img} onChange={this.handleChange} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit}>Do Something</Button>
                    <Link to='/makeupartist'><Button variant="contained" color="secondary"onClick={this.deleteProfile} >
                        Delete Profile
                     <DeleteIcon />
                        </Button></Link>
                </ModalFooter>
            </Modal>
            </div>   
        );
    }
}

export default EditMakeupArtist;