import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardDetail = (props) => (
	<div className="containerCardDetail card">
		<div className="card_left">
			<img src={props.image} />
		</div>
		<div className="card_right">
			<span>{props.category}</span>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<div className="card_footer">
				<span className="price">${props.price}</span>
				<button className="btn" onClick={()=>{ props.onClick(props._id,props.props); }}  value="">Add to cart</button>
				<Link to='/' className="btn">
					Back to results
				</Link>
			</div>
		</div>
	</div>
);

export default ProductCardDetail;
