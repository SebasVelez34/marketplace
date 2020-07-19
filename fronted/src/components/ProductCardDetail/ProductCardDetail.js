import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardDetail = (props) => (
	<div className="containerCardDetail card">
		<div className="card_left">
			<a href="#"><i className="fa fa-long-arrow-left left" aria-hidden="true"></i></a>
			<a href="#"><i className="fa fa-long-arrow-right right" aria-hidden="true"></i></a>
			<img src={props.image} />
		</div>
		<div className="card_right">
			<span>{props.category}</span>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<div className="card_footer">
				<span className="price">${props.price}</span>
				<a href="#" className="btn">
					Add to cart
				</a>
				<Link to='/' className="btn">
					Back to results
				</Link>
			</div>
		</div>
	</div>
);

export default ProductCardDetail;
