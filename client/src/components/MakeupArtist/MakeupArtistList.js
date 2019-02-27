import React, { Component } from 'react';
import axios from 'axios'
import MakeupArtist from './MakeupArtist';

class MakeupArtistList extends Component {
    state={
        makeupartist:[]
    }
    componentDidMount() {
        this.getAllMakeupArtist()
    }
    getAllMakeupArtist = () => {
        axios.get('/api/v1/makeupartist').then((res) =>
            this.setState({ makeupartist: res.data }))
    }
    render() {
        return (
            <div>
                {this.state.makeupartist.map((makeupartist, i) =>{
                    return (<MakeupArtist
                        key={i}
                        makeupartist={makeupartist}
                        makeupartistId={makeupartist.artistId}
                    />)
                })}

            </div>
        );
    }
}

export default MakeupArtistList;