import React, { Fragment } from 'react';

import classes from './Word.module.css';
import Button from '../UI/Button/Button';

const Word = props => {
  return (
    <Fragment>
      <div className={classes.Wrapper}>
        <div className={classes.Word}>der Pfirsich</div>
      </div>
      <Button />
    </Fragment>
  );
};

export default Word;
