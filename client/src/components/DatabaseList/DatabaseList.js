import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import DatabaseItem from './DatabaseItem/DatabaseItem';
import classes from './DatabaseList.module.css';
import TypeToSearch from '../NoContentToDisplay/TypeToSearch/TypeToSearch';
import {
  fetchDataByIdSuccess,
  buttonClicked,
  deleteTranslationSuccess
} from '../../store/actions';

const DatabaseList = props => {
  const renderedList = props.query.map(item => {
    return (
      <DatabaseItem
        key={item._id}
        article={item.article}
        word={item.word}
        translated={item.wordTranslated}
        clicked={() => {
          props.fetchDataById(item._id);
          props.buttonClicked();
        }}
        click={props.click}
        delete={() => props.deleteItem(item._id)}
      />
    );
  });

  return renderedList.length === 0 ? (
    <TypeToSearch />
  ) : (
    <div className={[classes.Container, classes.Scrollbar].join(' ')}>
      {renderedList}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.query.loading,
    query: state.query.queryData,
    error: state.query.error,
    queryById: state.query.queryById,
    clicked: state.button.clicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataById: id => dispatch(fetchDataByIdSuccess(id)),
    buttonClicked: () => dispatch(buttonClicked()),
    deleteItem: id => dispatch(deleteTranslationSuccess(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseList);
