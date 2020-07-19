import React from 'react';
import data from '../../data';
import ProductCardDetail from '../../components/ProductCardDetail/ProductCardDetail';


function ProductScreen(props) {
	const product = data.products.find(x => x._id == props.match.params.id );
	console.log(product,props);
	return (
		<ProductCardDetail name={product.name}
						   price={product.price}
						   description={product.description}
						   image={product.image}
						   category={product.category}/>
  	)
}

export default ProductScreen;
