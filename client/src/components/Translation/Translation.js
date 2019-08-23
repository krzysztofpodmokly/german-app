import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Translation.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';

const Translation = ({ translation, fetchTranslationData }) => {
  console.log(translation);

  return (
    <Fragment>
      <div className={globalClasses.Wrapper}>
        <div className={classes.Word}>der Pfirsich</div>
      </div>
      <Button clicked={fetchTranslationData}>REVEAL TRANSLATION</Button>
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

const mapStateToProps = state => {
  return {
    translation: state.translation.wordData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTranslationData: () => dispatch(actions.fetchTranslation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation);
