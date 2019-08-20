import React, { Fragment } from 'react';

import classes from './Layout.module.css';

const Layout = props => {
  const multipleClasses = [classes.Content, classes.Landing];

  return (
    <Fragment>
      <div>Toolbar</div>
      <div>Side Nav</div>
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
