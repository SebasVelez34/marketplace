import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';


function Navbar() {
	const userSignin = useSelector(state => state.userSignin);
	const { userInfo, loading , error } = userSignin;
	return (
		<header className="header" data-testid="Navbar">
			<div id="elements-header" className="shadow-1">
				<a href="/">
					<img src="/images/logo.png" alt="Logo de la página" className="m-elements-header"/>
				</a>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon m-elements-header"><span className="navicon"></span></label>
				<ul className="menu">
					<li><Link to={"/cart"} >Cart</Link></li>
					{
						loading ? <Loader/> :
						error   ? <div>{error}</div>:
						userInfo.length === 0 ?
						<>
							<li><Link to={"/register"}>Create account</Link></li>
							<li><Link to={"/signin"}>SignIn</Link></li>
						</>
						:
						<>
							<li><a>{`Hello ` + userInfo.name}</a></li>
						</>
					}
				</ul>
			</div>
		</header>
	)
}


export default Navbar;
