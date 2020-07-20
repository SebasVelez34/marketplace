import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function Navbar(props) {
	const userSignin = useSelector(state => state.userSignin);
	const { userInfo, loading , error } = userSignin;
	const dispatch = useDispatch();
	return (
		<header className={styles.Navbar,`header`} data-testid="Navbar">
			<div id="elements-header" className="shadow-1">
				<a href="/">
					<img src="/images/logo.png" alt="Logo de la página" className="m-elements-header"/>
				</a>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon m-elements-header"><span className="navicon"></span></label>
				<ul className="menu">
					<li><Link to={"/cart"} >Cart</Link></li>
					{
						loading ? <div>Loading...</div> :
						error   ? <div>{error}</div>:
						userInfo.length === 0 ?
						<>
							<li><Link to={"/register"}>Create account</Link></li>
							<li><Link to={"/signin"}>SignIn</Link></li>
						</>
						:
						<>
							<li><a>{`Hello ` + userInfo.name}</a></li>
							<li><Link to={"/signin"}>Logout</Link></li>
						</>
					}
				</ul>
			</div>
		</header>
	)
}


export default Navbar;
