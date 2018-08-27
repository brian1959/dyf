import React, { Component } from 'react';
import axios from 'axios';
import Presenterbio from './Presenterbio';



export default class Presenters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      presentersToDisplay: [],
      pfirstname: '',
      plastname: '',
      pbio: '',
      pimage: ''
    }

  }
  componentDidMount() {
    axios.get('/api/presenters').then(response => {
      this.setState({ presentersToDisplay: response.data })

    })

  }

  render() {
    const { presentersToDisplay } = this.state;

    return (
      <div>
        {
          presentersToDisplay.map(presenter => (
            <Presenterbio key={presenter.presenterid}
              pfirstname={presenter.pfirstname}
              plastname={presenter.plastname}
              pbio={presenter.pbio}
              pimage={presenter.pimage} />
          ))
        }
      </div>
    )
  }
}