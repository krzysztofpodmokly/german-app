import React, { Fragment } from 'react';

import classes from './Translation.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import Button from '../UI/Button/Button';

const Translation = props => {
  return (
    <Fragment>
      <div className={globalClasses.Wrapper}>
        <div className={classes.Word}>der Pfirsich</div>
      </div>
      <Button>REVEAL TRANSLATION</Button>
      <div
        className={[globalClasses.Wrapper, globalClasses.MarginTopMedium].join(
          ' '
        )}
      >
        <div className={[classes.Translation, globalClasses.General].join(' ')}>
          Brzoskwinia
        </div>
      </div>
      <div
        className={[globalClasses.Wrapper, globalClasses.MarginTopSmall].join(
          ' '
        )}
      >
        <div className={[classes.Sentence, globalClasses.General].join(' ')}>
          Ich esse Pfirsich jeden Tag
        </div>
        <div className={[classes.Sentence, globalClasses.General].join(' ')}>
          Letztes mal, letzte Woche have Ich ein Pfirsich gegessen
        </div>
      </div>
    </Fragment>
  );
};

export default Translation;
