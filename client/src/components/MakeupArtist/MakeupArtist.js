import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MakeupArtist extends Component {
    render() {
        return (
            <div>
                <Link to={`/makeupartist/${this.props.makeupartistId}`}>
                <h1>{this.props.makeupartist.name}</h1>
                </Link>
                <h3>{this.props.makeupartist.hometown}</h3>
                <img src={this.props.makeupartist.img} alt='Makeup Artist' />
            </div>
        );
    }
}

export default MakeupArtist;