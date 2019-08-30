import React from 'react';
import { connect } from 'react-redux';
import classes from './DatabaseInfo.module.css';
import globalClasses from '../../../assets/styles/Global.module.css';
import moment from 'moment';

const DatabaseInfo = ({ queryById, loading }) => {
  return (
    !loading &&
    Object.keys(queryById).length !== 0 && (
      <div className={[classes.DatabaseInfo, globalClasses.FadeInUp].join(' ')}>
        <div className={globalClasses.PaddingMedium}>
          <h1 className={classes.Word}>
            {queryById.article} {queryById.word}
          </h1>
          <h3 className={classes.Translation}>{queryById.wordTranslated}</h3>
          <p className={classes.Sentence}>{queryById.sentenceOne}</p>
          <p className={classes.Sentence}>{queryById.sentenceTwo}</p>
          <div className={classes.Date}>
            <p>
              Translation added{' '}
              {moment(queryById.date)
                .calendar()
                .toLocaleLowerCase()}
            </p>
          </div>
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
