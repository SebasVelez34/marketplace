import React, { useState, useEffect } from 'react';
import LeftAside from '../../components/LeftAside/LeftAside';
import ContainerProducts from '../../components/ContainerProducts/ContainerProducts';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, productsCategories, listProductsCategory, searchProducts } from '../../actions/productActions';
import Loader from '../../components/Loader/Loader';

function HomeScreen(props){
	const [title, setTitle] = useState("All Products");
	const productList = useSelector(state => state.productList);
	const productCategories = useSelector(state => state.categories);
	const { products, loading, error } = productList;
	const { categories, loadingC, errorC } = productCategories;
	const dispatch = useDispatch();
	const filterByCategoryHandler = (category) =>{
		setTitle(category);
		dispatch(listProductsCategory(category));
	}
	const searchHandler = (term)=>{
		dispatch(searchProducts(term));
	}
	const listProductsHandler = ()=>{
		setTitle("All Products");
		dispatch(listProducts());
	}
	useEffect(()=>{
		dispatch(listProducts());
		dispatch(productsCategories());
	}, []);

	return (
		loading ? <Loader/> :
		error   ? <div>{error}</div>:
		<div className="homeScreen" data-testid="HomeScreen">
			{
				loadingC ? <Loader/> :
				errorC   ? <div>{errorC}</div>:
				<LeftAside categories={categories}
						   onClick={ filterByCategoryHandler}
						   search={ searchHandler }
						   allProducts={listProductsHandler}/>
			}
			<ContainerProducts products={products}
							   title={title}
							   history={props}/>
		</div>
	)
}

export default HomeScreen;
