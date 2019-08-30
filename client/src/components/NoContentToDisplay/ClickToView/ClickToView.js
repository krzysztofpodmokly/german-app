import React from 'react';
import classes from './ClickToView.module.css';
import globalClasses from '../../../assets/styles/Global.module.css';

const ClickToView = () => {
  return (
    <div className={[classes.ClickToView, globalClasses.FadeIn].join(' ')}>
      <h1 className={globalClasses.Header}>&larr; Click to view!</h1>
    </div>
  );
};

export default ClickToView;
