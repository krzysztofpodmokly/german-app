import React, { Fragment } from 'react';

import classes from './Translation.module.css';
import Button from '../UI/Button/Button';

const Translation = props => {
  console.log(props);
  return (
    <Fragment>
      <div className={classes.Wrapper}>
        <div className={classes.Word}>der Pfirsich</div>
      </div>
      <Button>REVEAL TRANSLATION</Button>
      <div className={[classes.Wrapper, classes.MarginTopMedium].join(' ')}>
        <div className={[classes.Translation, classes.General].join(' ')}>
          Brzoskwinia
        </div>
      </div>
      <div className={[classes.Wrapper, classes.MarginTopSmall].join(' ')}>
        <div className={[classes.Sentence, classes.General].join(' ')}>
          Ich esse Pfirsich jeden Tag
        </div>
        <div className={[classes.Sentence, classes.General].join(' ')}>
          Letztes mal, letzte Woche have Ich ein Pfirsich gegessen
        </div>
      </div>
    </Fragment>
  );
};

export default Translation;
