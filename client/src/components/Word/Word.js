import React, { Fragment } from 'react';

import classes from './Word.module.css';

const Word = props => {
  return (
    <Fragment>
      <div className={classes.Wrapper}>
        <div className={classes.Word}>der Pfirsich</div>
      </div>
      <button>REVEAL TRANSLATION</button>
    </Fragment>
  );
};

export default Word;
