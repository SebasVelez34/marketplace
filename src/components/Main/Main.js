import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

const Main = () => (
  <div className={styles.Main} data-testid="Main">
    Main Component
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
