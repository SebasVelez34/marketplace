import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftAside.module.css';

const LeftAside = () => (
  	<aside id="side-menu" className={styles.LeftAside,`leftAside well span3 oc`} data-testid="LeftAside" role="navigation">
    	<ul className="nav nav-list">
			<li className="nav-header">Title 1</li>
			<li><a href="#">Sube Menu Link</a></li>
			<li><a href="#">Sube Menu Link</a></li>
			<li><a href="#">Sube Menu Link</a></li>
    	</ul>
  	</aside>
);

LeftAside.propTypes = {};

LeftAside.defaultProps = {};

export default LeftAside;
