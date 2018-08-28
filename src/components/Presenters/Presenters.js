import React, { Component } from 'react';
import axios from 'axios';
import Presenterbio from './Presenterbio';



export default class Presenters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      speakersToDisplay: [],
      speakerName: '',
      speakerTitle: '',
      speakingDate: '',
      speakerBio:'',
      speakerImage: ''
    }

  }
  componentDidMount() {
    axios.get('/api/speakers').then(response => {
      this.setState({ speakersToDisplay: response.data })

    })

  }

  render() {
    const { speakersToDisplay } = this.state;

    return (
      <div>
        {
          speakersToDisplay.map(speaker => (
            <Presenterbio key={speaker.speakerid}
              speakerName={speaker.speaker_name}
              speakerTitle={speaker.speaker_title}
              speakerBio={speaker.speaker_bio}
              speakerImage={speaker.speaker_image}
              speakingDate={speaker.speaking_date} />
          ))
        }
      </div>
    )
  }
}