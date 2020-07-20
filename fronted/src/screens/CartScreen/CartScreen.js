import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function CartScreen(props) {

	const cart = useSelector( state => state.cart );
	const { cartItems } = cart;
  	const productId = props.match.params.id;
	const dispatch = useDispatch();
	const removeFromCartHandler = (productId) =>{
		dispatch(removeFromCart(productId));
	}
	useEffect(()=>{
		if(productId){
		dispatch(addToCart(productId));
		}
	}, []);
	console.log(cartItems);
	return (
		<div class="wrap cf">
			<h1 class="projTitle">Shopping Cart</h1>
			<div class="heading cf">
				<h1>My Cart</h1>
				<a href="#" class="continue">Continue Shopping</a>
			</div>
			<div class="cart">
				<ul class="cartWrap">
					{
						cartItems.length === 0 ?<div>Cart is empty</div>
						:
						cartItems.map( item =>{
							return (
								<li className="items odd" key={item.product}>
									<div className="infoWrap">
										<li className="items even">
											<div className="infoWrap">
												<div className="cartSection">
													<img src={item.image} alt="" className="itemImg" />
													<p className="itemNumber">Product ID: { item.product }</p>
													<Link to={`/product/${item.product}`}>
														<h3>{item.name}</h3>
													</Link>
												</div>
												<div className="prodTotal cartSection">
													<p>Price: ${item.price}</p>
												</div>
												<div className="cartSection removeWrap">
													<button type="button" className="remove" onClick={() => removeFromCartHandler(item.product)}>
														<a href="#" className="remove">x</a>
													</button>
												</div>
											</div>
										</li>
									</div>
								</li>
							)
						})
					}
				</ul>
				<div class="subtotal cf">
					<ul>
						<li class="totalRow final">
							<span class="label">Total ( {cartItems.length} item(s) )</span>
							<span class="value">${cartItems.reduce((a, b) => a + b.price, 0)}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
  	)
}

export default CartScreen;
