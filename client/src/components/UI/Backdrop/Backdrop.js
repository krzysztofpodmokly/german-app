import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = props => {
  const cssClasses = [
    classes.Backdrop,
    props.show ? classes.BackdropOpen : null,
    classes.SmallScreenOnly
  ];

  return (
    <div
      style={props.style}
      className={cssClasses.join(' ')}
      onClick={props.clicked}
    />
  );
};

export default Backdrop;
