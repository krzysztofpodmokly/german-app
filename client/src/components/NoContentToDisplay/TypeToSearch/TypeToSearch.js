import React from 'react';
import classes from './TypeToSearch.module.css';
import globalClasses from '../../../assets/styles/Global.module.css';

const TypeToSearch = () => {
  return (
    <div className={classes.TypeToSearch}>
      <h1 className={globalClasses.Header}>Start typing...</h1>
    </div>
  );
};

export default TypeToSearch;
