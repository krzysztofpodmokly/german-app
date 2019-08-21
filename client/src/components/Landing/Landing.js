import React, { Fragment } from 'react';

import landingImg from '../../assets/images/landing.jpg';
import classes from './Landing.module.css';

const Landing = props => {
  return (
    <Fragment>
      <img className={classes.Landing} src={landingImg} />
    </Fragment>
  );
};

export default Landing;
