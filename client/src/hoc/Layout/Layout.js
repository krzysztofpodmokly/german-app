import React, { Fragment, useState } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MobileMenu from '../../components/Navigation/MobileMenu/MobileMenu';
// import Alert from '../../components/Alert/Alert';

const Layout = props => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuCloseHandler = () => {
    setShowMobileMenu(false);
  };

  const mobileMenuToggleHandler = () => {
    // async nature
    setShowMobileMenu(prevState => !prevState.showMobileMenu);
  };

  return (
    <Fragment>
      <Toolbar toggleMenu={mobileMenuToggleHandler} />
      <MobileMenu open={showMobileMenu} closed={mobileMenuCloseHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
