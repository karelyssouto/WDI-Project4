import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css'
import { Card,  CardBody,  CardSubtitle} from 'reactstrap'
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
            <div className='background'>
                <div className='artistList'>
                {this.state.makeupartist.map((makeupartist, i) =>{
                    return (<Card key={i} className='cardContainer' color='warning'>
                            <CardBody>
                                <h1 className='Button'>{makeupartist.name}</h1>
                            <CardSubtitle className='Button'>{makeupartist.hometown}</CardSubtitle>
                            </CardBody>
                            <Link to={`/makeupartist/${makeupartist.artistId}`}><img width="50%" src={makeupartist.img} alt='Makeup Artist'  className='artistImg'/></Link>
                            </Card>
                    )   
                })}
                </div>
            </div>
        );
    }
}

export default MakeupArtistList;