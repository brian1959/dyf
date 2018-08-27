import React, {Component} from 'react';
import axios from 'axios';

class Presenter extends Component {
    constructor(props){
        super(props)

        this.state = {
            presenter: {}
        }
    }

    componentDidMount(){
        axios.get(this.props.match.params.id)
            .then(presenter => this.setState({presenter}))
    }

    render() {
        const{presenter} = this.state;

        return(
            <div className='presenter_body'>
                <img className='presenter_image' src={`./images/${presenter.pimage}` } alt={product.title} />
                <h1>{`${presenter.pfirstname} ${presenter.plastname}`}</h1>
                <p>{presenter.pbio}</p>
            </div>
        )
    }
}

export default Product