import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftAside.module.css';

const LeftAside = () => (
  <div className={styles.LeftAside} data-testid="LeftAside">
    LeftAside Component
  </div>
);

LeftAside.propTypes = {};

LeftAside.defaultProps = {};

export default LeftAside;
