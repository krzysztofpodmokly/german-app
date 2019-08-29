import React from 'react';
import classes from './DatabaseItem.module.css';

const DatabaseItem = props => {
  return (
    <div className={classes.Container} onClick={props.clicked}>
      <div className={classes.InnerContent}>
        <p className={classes.Article}>
          {props.article} {props.word}
        </p>
        <div className={classes.BtnContainer}>
          <button className={classes.BtnDelete} onClick={props.delete}>
            <i className='far fa-2x fa-times-circle'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatabaseItem;
