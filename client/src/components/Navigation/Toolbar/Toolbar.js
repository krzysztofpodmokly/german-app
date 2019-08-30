import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger';

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <Hamburger clicked={props.toggleMenu}></Hamburger>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
