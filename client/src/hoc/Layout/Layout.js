import React, { Fragment } from 'react';

const Layout = props => {
  return (
    <Fragment>
      <div>Toolbar</div>
      <div>Side Nav</div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
