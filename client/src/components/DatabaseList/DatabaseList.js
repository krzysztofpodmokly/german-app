import React from 'react';
import { connect } from 'react-redux';
import DatabaseItem from './DatabaseItem/DatabaseItem';
import classes from './DatabaseList.module.css';
import TypeToSearch from '../NoContentToDisplay/TypeToSearch/TypeToSearch';

const DatabaseList = props => {
  const renderedList = props.query.map(item => {
    return (
      <DatabaseItem
        key={item._id}
        article={item.article}
        word={item.word}
        translated={item.wordTranslated}
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
    error: state.query.error
  };
};

export default connect(mapStateToProps)(DatabaseList);
