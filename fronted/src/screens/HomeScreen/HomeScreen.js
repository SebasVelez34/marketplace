import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeScreen.module.css';
import LeftAside from '../../components/LeftAside/LeftAside';
import ContainerProducts from '../../components/ContainerProducts/ContainerProducts';

const HomeScreen = () => (
	<div className="homeScreen">
		<LeftAside/>
		<ContainerProducts/>
	</div>
);

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
