import React from 'react';
import classes from './Spinner.module.css';

const Spinner = props => {
  return (
    <div style={props.style} className={classes.SpinnerCircle}>
      <div className={classes.Spinner} />
    </div>
  );
};

export default Spinner;
