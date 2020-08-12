import React, { Component } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './all-products/index';
import Product from './Product';
import Cart from './Cart';
import NavBar from './NavBar';

class AllProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartitems: [],
			show: false
		};
	}

	addItem = (item) => {
		this.setState({
			cartitems: this.state.cartitems.concat([item])
		});
	}

	showModel = () => {
		this.setState({ show: true });
	}

	hideModal = () => {
		this.setState({ show: false });
	}

	render() {
		return(
			<Query query={PRODUCTS_QUERY}>
				{
					({ loading, error, data }) => {
						if(loading) 
							return <div>Fetching products...</div>

						if(error)
							return <div>Error fetching products</div>

						const items = data.productses;
						const itemsSent = this.state.cartitems;

						return(
							<div>
								<NavBar cart={itemsSent} show={this.showModel} />
								<Cart show={this.state.show} items={itemsSent} handleClose={this.hideModal} />
								<div className="container mt-4">
									<div className="row">
										{items.map(item => <Product key={item.id} product={item} addItem={this.addItem} />)}
									</div>
								</div>
							</div>
						)
					}
				}
			</Query>
		);
	}
}

export default AllProducts;