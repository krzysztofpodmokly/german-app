import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active>
        Lottery
      </NavigationItem>
      <NavigationItem link='/new-translation'>New Translation</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
