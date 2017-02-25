import React from 'react';

import styles from './styles.css';

const Layout = props => (
  <div className={styles.layout}>
    <h1>Hello, World!</h1>
    {props.children}
  </div>
);

Layout.contextType = {
  router: React.PropTypes.object.isRequired,
};

Layout.propTypes = {
  children: React.PropTypes.shape().isRequired,
};

export default Layout;
