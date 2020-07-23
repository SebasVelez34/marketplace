import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ContainerProducts = (props) => (
  	<section className={"containerProducts well span9"} data-testid="ContainerProducts">
		<h2>{ props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h2>
		<div id="productList">
			{ props.products.map(product =>
				<ProductCard name={product.name}
							 price={product.price}
							 image={product.image}
							 _id={product._id}
							 key={product._id}
							 history={props.history}/>
			)}
		</div>
    </section>
);


export default ContainerProducts;
