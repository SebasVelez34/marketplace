import React from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { Route } from 'react-router-dom';
import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import CartScreen from '../../screens/CartScreen/CartScreen';

class Main extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<main className="Main" data-testid="Main">
				<Route path="/" exact={ true} component={HomeScreen} />
				<Route path="/product/:id" component={ProductScreen} />
				<Route path="/cart/:id?" component={CartScreen} />
			</main>
		);
	}
}


export default Main;
