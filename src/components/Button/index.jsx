import React, { PropTypes, Children } from 'react';

import styles from './styles.css';

const Button = ({ onClick, children }) => (
  <button className={styles.button} onClick={onClick}>
    {Children.toArray(children)}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
