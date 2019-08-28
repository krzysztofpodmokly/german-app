import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={[classes.NavigationItems, classes.DesktopOnly].join(' ')}>
      <NavigationItem link='/' exact>
        Lottery
      </NavigationItem>
      <NavigationItem link='/new-translation'>New Translation</NavigationItem>
      <NavigationItem link='/search-engine'>Search Engine</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
