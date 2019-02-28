import React, { Component } from 'react';
import axios from 'axios'
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom'


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
                    return (<Media key={i}>
                                <Media left >
                                    <Media object src={makeupartist.img} alt='Makeup Artist' />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <Link to={`/makeupartist/${makeupartist.artistId}`}>{makeupartist.name}</Link>
                                    </Media>
                                        {makeupartist.hometown}
                                    </Media>
                            </Media>
                    )   
                })}

            </div>
        );
    }
}

export default MakeupArtistList;