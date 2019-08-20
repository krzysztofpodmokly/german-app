import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  return (
    <div className={classes.Btn}>
      <a href='#' className={classes.BtnLink}>
        <span>REVEAL CONTENT</span>
      </a>
    </div>
  );
};

export default Button;
