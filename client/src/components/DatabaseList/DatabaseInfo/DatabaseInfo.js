import React from 'react';
import classes from './DatabaseInfo.module.css';
import globalClasses from '../../../assets/styles/Global.module.css';

const DatabaseInfo = () => {
  return (
    <div className={classes.DatabaseInfo}>
      <div className={globalClasses.PaddingMedium}>
        <h1 className={classes.Word}>Der Arzt</h1>
        <h3 className={classes.Translation}>Lekarz</h3>
        <p className={classes.Sentence}>Ich liebe Arzte</p>
        <p className={classes.Sentence}>
          Ich nehme Medikamente wenn der Arzt mir sie vershreibt
        </p>
      </div>
    </div>
  );
};

export default DatabaseInfo;
