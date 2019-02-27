import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap';

class MakeupArtist extends Component {
    
    render() {
        return (
            <div>
                <Media>
                    <Media left>
                        <Media object src={this.props.makeupartist.img} alt='Makeup Artist' />
                    </Media>
                    <Media body>
                        <Media heading>
                            <Link to={`/makeupartist/${this.props.makeupartist.artistId}`}>{this.props.makeupartist.name}</Link>
                        </Media>
                                {this.props.makeupartist.hometown}
                            <Media>
                        </Media>
                    </Media>
                </Media>
            </div>
        );
    }
}

export default MakeupArtist;