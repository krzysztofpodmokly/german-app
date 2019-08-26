import React, { Fragment } from 'react';
import { Transition } from 'react-transition-group';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './MobileMenu.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const MobileMenu = props => {
  let conditionalClasses = [
    classes.MobileMenu,
    props.open ? classes.Open : classes.Close
  ].join(' ');

  console.log(props.open);
  return (
    <Fragment>
      {props.open ? (
        <Backdrop show={props.open} clicked={props.closed} />
      ) : null}
      <div className={conditionalClasses}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
