import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'

class ClientList extends Component {
    deleteClient = () => {
        axios.delete(`/api/v1/client/${this.props.match.params.id}/`)
            .then(() => {
            })
    }
    render() {
        return (
            <div>
                {this.props.client.client.map((client, i) => {
                    return (<div key={i}>

                                <h5>{client.name}</h5>
                                <h5>{client.skinType}</h5>

                            </div>
                        )
                })}

                <Link to={`/`}><Button variant="contained" color="secondary" onClick={this.deleteClient} >
                    Delete Client
                     <DeleteIcon />
                </Button></Link>
            </div>
        );
    }
}

export default ClientList;