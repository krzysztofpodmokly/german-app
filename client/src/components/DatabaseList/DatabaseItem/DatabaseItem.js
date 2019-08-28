import React from 'react';
import classes from './DatabaseItem.module.css';

const DatabaseItem = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.InnerContent}>
        <div className={classes.Article}>Der</div>
        <div className={classes.Word}>Arzt</div>
      </div>
    </div>
  );
};

export default DatabaseItem;
