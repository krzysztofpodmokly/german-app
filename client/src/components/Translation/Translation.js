import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Translation.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';
import Spinner from '../UI/Spinner/Spinner';

const Translation = ({ translation, loading, error, fetchTranslationData }) => {
  // check fetched object on page load, if it is empty show nothing
  const renderContent =
    Object.entries(translation).length !== 0 && !loading ? (
      <Fragment>
        <div className={globalClasses.Wrapper}>
          <div className={classes.Word}>
            {translation.article} {translation.word}
          </div>
        </div>
        <div
          className={[
            globalClasses.Wrapper,
            globalClasses.MarginTopMedium
          ].join(' ')}
        >
          <div
            className={[classes.Translation, globalClasses.General].join(' ')}
          >
            {translation.wordTranslated}
          </div>
        </div>
        <div
          className={[globalClasses.Wrapper, globalClasses.MarginTopSmall].join(
            ' '
          )}
        >
          {translation.sentences.map(sentence => (
            <div
              key={sentence._id}
              className={[classes.Sentence, globalClasses.General].join(' ')}
            >
              {sentence.sentence}
            </div>
          ))}
        </div>
      </Fragment>
    ) : null;

  return (
    <Fragment>
      <Button clicked={fetchTranslationData}>MAKE IT RANDOM!</Button>
      {loading ? <Spinner /> : renderContent}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    translation: state.translation.wordData,
    loading: state.translation.loading,
    error: state.translation.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTranslationData: () => dispatch(actions.fetchTranslationSuccess())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation);
