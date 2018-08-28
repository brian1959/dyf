import React, {Component} from 'react';
import axios from 'axios';

class Speakerbio extends Component {
    constructor(props){
        super(props)

        this.state = {
            speaker: {}
        }
    }

    componentDidMount(){
        axios.get(this.props.match.params.id)
            .then(speaker => this.setState({speaker}))
    }

    render() {
        const{presenter} = this.state;

        return(
            <div className='presenter_body'>
                <img className='presenter_image' src={`./images/${speaker.speaker_image}` } alt={speaker.speaker_name} />
                <h1>${speaker.speaker_name}</h1>
                <h2>${speaker.speaker_title}</h2>
                <p>{presenter.pbio}</p>
            </div>
        )
    }
}

export default Speakerbio