import React, { useState, useEffect } from 'react';
import LeftAside from '../../components/LeftAside/LeftAside';
import ContainerProducts from '../../components/ContainerProducts/ContainerProducts';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, productsCategories, listProductsCategory } from '../../actions/productActions';

function HomeScreen(props){
	const [title, setTitle] = useState("All Categories");
	const productList = useSelector(state => state.productList);
	const productCategories = useSelector(state => state.categories);
	const { products, loading, error } = productList;
	const { categories, loadingC, errorC } = productCategories;
	const dispatch = useDispatch();
	const filterByCategoryHandler = (category) =>{
		setTitle(category);
		dispatch(listProductsCategory(category));
	}
	useEffect(()=>{
		dispatch(listProducts());
		dispatch(productsCategories());
	}, []);

	return (
		loading ? <div>Loading...</div> :
		error   ? <div>{error}</div>:
		<div className="homeScreen">
			{
				loadingC ? <div>Loading...</div> :
				errorC   ? <div>{errorC}</div>:
				<LeftAside categories={categories}
						   onClick={ filterByCategoryHandler}/>
			}
			<ContainerProducts products={products}
							   title={title}
							   history={props}/>
		</div>
	)
}

export default HomeScreen;
