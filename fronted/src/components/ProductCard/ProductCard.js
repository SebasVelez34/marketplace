import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const styleImageCard = (url)=>{
	return {
		backgroundImage   : `url('${url}')`,
		backgroundPosition: 'center',
		backgroundRepeat  : 'no-repeat'
	}
};

const ProductCard = (props) => (
	<div className={styles.ProductCard,"wrapper"} data-testid="ProductCard">
		<div className="containerCard">
			<Link to={`/product/${props._id}`}>
				<div className="top" style={styleImageCard(props.image)}></div>
			</Link>
			<div className="bottom">
			<div className="left">
				<Link to={`/product/${props._id}`}>
					<div className="details">
						<h1>{props.name}</h1>
						<p>${props.price}</p>
					</div>
				</Link>
				<div className="buy"><i className="material-icons">add_shopping_cart</i></div>
			</div>
			<div className="right">
				<div className="done"><i className="material-icons">done</i></div>
				<div className="details">
					<h1>{props.name}</h1>
					<p>Added to your cart</p>
					</div>
					<div className="remove"><i className="material-icons">clear</i></div>
				</div>
			</div>
		</div>
	</div>
);

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
