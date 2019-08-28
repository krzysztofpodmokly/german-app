import React from 'react';
import classes from './DatabaseItem.module.css';

const DatabaseItem = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.InnerContent}>
        <div className={classes.Article}>{props.article}</div>
        <div className={classes.Word}>{props.word}</div>
      </div>
    </div>
  );
};

export default DatabaseItem;
