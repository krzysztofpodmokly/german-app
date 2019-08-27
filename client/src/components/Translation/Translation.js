import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './Translation.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';
import Spinner from '../UI/Spinner/Spinner';

const Translation = ({
  word,
  loading,
  error,
  fetchTranslationData,
  clicked
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -300%)'
  };

  // Function which returns bold word
  const boldString = (str, wordToMatch) => {
    return (
      Object.entries(word).length !== 0 &&
      !loading &&
      str.split(' ').map(string => {
        return string === wordToMatch ? (
          <b key={string} style={{ fontWeight: 400 }}>
            {string}{' '}
          </b>
        ) : (
          string + ' '
        );
      })
    );
  };

  const firstSentence = boldString(word.sentenceOne, word.word);
  const secondSentence = boldString(word.sentenceTwo, word.word);

  // check fetched object on page load, if it is empty show nothing
  const renderContent =
    Object.entries(word).length !== 0 && !loading ? (
      <Fragment>
        <div className={globalClasses.Container}>
          <div
            className={[
              globalClasses.Wrapper,
              clicked ? globalClasses.FadeInLeft : null
            ].join(' ')}
          >
            <div className={classes.Word}>
              {word.article} {word.word}
            </div>
          </div>
          <div
            className={[
              globalClasses.Wrapper,
              globalClasses.MarginTopMedium,
              clicked ? globalClasses.FadeInRight : null
            ].join(' ')}
          >
            <div
              className={[classes.Translation, globalClasses.General].join(' ')}
            >
              {word.wordTranslated}
            </div>
          </div>
          <div
            className={[
              globalClasses.Wrapper,
              globalClasses.MarginTopSmall,
              clicked ? globalClasses.FadeInLeft : null
            ].join(' ')}
          >
            <div
              className={[classes.Sentence, globalClasses.General].join(' ')}
            >
              {firstSentence}
            </div>
            <div
              className={[classes.Sentence, globalClasses.General].join(' ')}
            >
              {secondSentence}
            </div>
          </div>
        </div>
      </Fragment>
    ) : null;

  return (
    <Fragment>
      <div
        className={
          Object.keys(word).length === 0 && !loading
            ? [globalClasses.Wrapper, globalClasses.PaddingHuge].join(' ')
            : null
        }
      >
        {Object.keys(word).length === 0 && !loading ? (
          <h1 className={globalClasses.Header}>
            Learn German By Drawing Random Words
          </h1>
        ) : null}
        {loading ? null : (
          <div className={clicked ? globalClasses.BtnFadeIn : null}>
            <Button style={style} clicked={fetchTranslationData}>
              DRAW!
            </Button>
          </div>
        )}
      </div>
      {loading ? <Spinner /> : renderContent}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    word: state.word.wordData,
    loading: state.word.loading,
    error: state.word.error,
    clicked: state.button.clicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTranslationData: () => {
      dispatch(actions.fetchTranslationSuccess());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation);
