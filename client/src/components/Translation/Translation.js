import React, { Fragment } from 'react';

import classes from './Translation.module.css';
import Button from '../UI/Button/Button';

const Translation = props => {
  return (
    <Fragment>
      <div className={classes.Wrapper}>
        <div className={classes.Word}>der Pfirsich</div>
      </div>
      <Button>REVEAL TRANSLATION</Button>
      <div className={classes.Wrapper}>
        <div className={classes.Translation}>Ich esse Pfirsich jeden Tag</div>
      </div>
    </Fragment>
  );
};

export default Translation;
