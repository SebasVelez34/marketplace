import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = () => (
	<header className={styles.Navbar,`header`} data-testid="Navbar">
		<div id="elements-header" className="shadow-1">
			<a href="/">
				<img src="/images/logo.svg" alt="Logo de la página" className="m-elements-header"/>
			</a>
			<input className="menu-btn" type="checkbox" id="menu-btn" />
			<label className="menu-icon m-elements-header"><span className="navicon"></span></label>
			<ul className="menu">
				<li>
					<input type="text" placeholder="Search something product" />
				</li>
				<li><a>Cart</a></li>
			</ul>
		</div>
	</header>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
