import React, {Component} from 'react';
import * as products from '../services/products';
import './Products.css'

class Product extends Component {
    constructor(props){
        super(props)

        this.state = {
            product: {}
        }
    }

    componentDidMount(){
        products.get(this.props.match.params.id)
            .then(product => this.setState({product}))
    }

    render() {
        const{product} = this.state;

        return(
            <div className='product_body'>
                <img className='product_image' src={product.image} alt={product.title} />
                <h1>{product.title}</h1>
                <p>{`$${product.price}`}</p>
                <p>{product.desc}</p>
            </div>
        )
    }
}

export default Product