import React from 'react';
import styles from './ContainerProducts.module.css';
import ProductCard from '../ProductCard/ProductCard';
import data from '../../data';
import { Link } from 'react-router-dom';

const ContainerProducts = () => (
  	<section className={styles.ContainerProducts,"containerProducts well span9"} data-testid="ContainerProducts">
		<h2>Web Module - Index</h2>
		<div id="productList">
			{ data.products.map(product =>
				<ProductCard name={product.name}
							 price={product.price}
							 image={product.image}
							 _id={product._id}/>
			)}
		</div>
    </section>
);


export default ContainerProducts;
