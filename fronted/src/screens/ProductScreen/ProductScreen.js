import React, { useEffect } from 'react';
import ProductCardDetail from '../../components/ProductCardDetail/ProductCardDetail';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';
import { addToCart } from '../../functions/addToCart';


function ProductScreen(props) {
	const productDetails = useSelector(state => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();
	const handleAddToCart = addToCart;
	useEffect(()=>{
		dispatch(detailsProduct(props.match.params.id));
	}, []);
	return (
		loading ? <div>Loading...</div> :
		error   ? <div>{error}</div>:
		<ProductCardDetail name={product.name}
						   price={product.price}
						   description={product.description}
						   image={product.image}
						   category={product.category}
						   _id={product._id}
						   onClick={handleAddToCart}
						   props={props}/>
  	)
}

export default ProductScreen;
