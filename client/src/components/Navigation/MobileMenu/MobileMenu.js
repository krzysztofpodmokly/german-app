import React, { Fragment } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './MobileMenu.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const MobileMenu = props => {
  let conditionalClasses = [
    classes.MobileMenu,
    props.open ? classes.Open : classes.Close
  ].join(' ');

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={conditionalClasses}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
