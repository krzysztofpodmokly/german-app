import React from 'react';
import { connect } from 'react-redux';
import classes from './DatabaseInfo.module.css';
import globalClasses from '../../../assets/styles/Global.module.css';

const DatabaseInfo = ({
  queryById: { article, word, wordTranslated, sentenceOne, sentenceTwo, date },
  loading
}) => {
  return (
    !loading && (
      <div className={classes.DatabaseInfo}>
        <div className={globalClasses.PaddingMedium}>
          <h1 className={classes.Word}>
            {article} {word}
          </h1>
          <h3 className={classes.Translation}>{wordTranslated}</h3>
          <p className={classes.Sentence}>{sentenceOne}</p>
          <p className={classes.Sentence}>{sentenceTwo}</p>
        </div>
      </div>
    )
  );
};

const mapStateToProps = state => {
  return {
    queryById: state.query.queryById,
    loading: state.query.loading
  };
};

export default connect(mapStateToProps)(DatabaseInfo);
