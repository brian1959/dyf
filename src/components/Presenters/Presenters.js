import React, { Component } from "react";
import axios from "axios";
import Speaker from "./Speaker";
import Featured from "./Featured";
import Speakerbio from "./Speakerbio";

export default class Presenters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      speakersToDisplay: [],
      speakerid:'',
      speakerName: "",
      speakerTitle: "",
      speakingDate: "",
      speakerBio: "",
      speakerImage: "",
      presentersToDisplay: [],
      presenterName: "",
      presenterTitle: "",
      presenterBio: "",
      presenterImage: "",
      caption: "",
      selectedSpeaker:{}
    };

    this.getBioModal = this.getBioModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
    this.setState({modalShow: !this.state.modalShow});
  }

  componentDidMount() {
    document.title='Speakers';
    axios.get("/api/speakers").then(response => {
      this.setState({ speakersToDisplay: response.data });
    });
    axios.get("/api/featured").then(response => {
      this.setState({ presentersToDisplay: response.data });
    });
  }

  getBioModal(selectedProps) {
    this.setState({selectedSpeaker:selectedProps, modalShow:!this.state.modalShow}) 
    console.log(selectedProps);
  }

  render() {
    const { speakersToDisplay } = this.state;
    const { presentersToDisplay } = this.state;

    return (
      <div className="presenter-body">
        <section className="speaker-section">
          <div className="speaker-header">
            RootsTech 2018 Speakers
          </div>
          {this.state.modalShow ? <Speakerbio selectedSpeaker={this.state.selectedSpeaker}/> :""}
        </section>
        <section className="speaker-list">
          {speakersToDisplay.map(speaker => (
            <Speaker
              key={speaker.speakerid}
              speakerid={speaker.speakerid}
              speakerName={speaker.speaker_name}
              speakerTitle={speaker.speaker_title}
              speakerBio={speaker.speaker_bio}
              speakerImage={speaker.speaker_image}
              speakingDate={speaker.speaking_date}
              getBioModal={this.getBioModal}
            />
          ))}
        </section>
        <section className="featured-section">
          <div className="featured-header">
            Featured Presenters
          </div>
        </section>
        <section className="featured-list">
          {presentersToDisplay.map(featured => (
            <Featured
              key={featured.featured_id}
              presenterid={featured.presenterid}
              presenterName={featured.presenter}
              presenterTitle={featured.presenter_title}
              presenterBio={featured.presenter_bio}
              presenterImage={featured.presenter_image}
              caption={featured.caption}
              getBioModal={this.getBioModal}
            />
          ))}
        </section>
        <section className='bio-modal-dropdown'>
        </section>
      </div>
    );
  }
}
