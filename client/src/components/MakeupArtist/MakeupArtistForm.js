import React, { Component } from 'react';
import axios from 'axios'


class MakeupArtistForm extends Component {
    state = {
        makeupartist: {
            name: '',
            hometown: '',
            img: '',
        }
    }

    handleChange = (e) => {
        const newState = { ...this.state.makeupartist }
        newState[e.target.name] = e.target.value
        this.setState({ makeupartist: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const createMakeupArtist = this.state.makeupartist
        axios.post('/api/v1/makeupartist/', createMakeupArtist)
            .then((res) => {
                this.props.getAllMakeupArtist()
            })
    }

    render() {
        return (
            <div>
                
                    <input placeholder='name' name='name' value={this.state.makeupartist.name} onChange={this.handleChange}/>
                    <input placeholder='hometown' name='hometown' value={this.state.makeupartist.hometown} onChange={this.handleChange}/>
                    <input placeholder='img' name='img' value={this.state.makeupartist.img} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>submit</button>
            </div>
        );
    }
}

export default MakeupArtistForm;