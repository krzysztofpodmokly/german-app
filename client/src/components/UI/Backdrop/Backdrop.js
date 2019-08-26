import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = props => {
  const cssClasses = [
    classes.Backdrop,
    props.show ? classes.BackdropOpen : null
  ];

  return <div className={cssClasses.join(' ')} onClick={props.clicked} />;
};

export default Backdrop;
