import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Translation.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';
import Spinner from '../UI/Spinner/Spinner';

const Translation = ({ translation, loading, error, fetchTranslationData }) => {
  console.log(error);
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
          {/* {translation.sentences.map(sentence => (
            <div
              key={sentence._id}
              className={[classes.Sentence, globalClasses.General].join(' ')}
            >
              {sentence.sentence}
            </div>
          ))} */}
        </div>
      </Fragment>
    ) : null;

  return (
    <Fragment>
      <div
        className={
          Object.keys(translation).length === 0 && !loading
            ? [globalClasses.Wrapper, globalClasses.PaddingHuge].join(' ')
            : null
        }
      >
        {Object.keys(translation).length === 0 && !loading ? (
          <h1 className={globalClasses.Header}>
            Learn German By Drawing Random Words
          </h1>
        ) : null}
        <Button clicked={fetchTranslationData}>DRAW!</Button>
      </div>
      {loading ? <Spinner /> : renderContent}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    translation: state.word.wordData,
    loading: state.word.loading,
    error: state.word.error
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
