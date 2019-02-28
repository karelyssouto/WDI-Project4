import React, { Component } from 'react';

class ClientList extends Component {
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
            </div>
        );
    }
}

export default ClientList;