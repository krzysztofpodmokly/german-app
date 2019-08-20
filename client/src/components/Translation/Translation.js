import React, { Fragment } from 'react';

import classes from './Translation.module.css';

const Word = props => {
  return (
    <Fragment>
      <div className={classes.Wrapper}>
        <div className={classes.Translation}>Ich esse Pfirsich jeden Tag</div>
        <div className={classes.Translation}>
          Letztes mal, letze Woche habe Ich ein Pfirsich gegessen
        </div>
      </div>
    </Fragment>
  );
};

export default Word;
