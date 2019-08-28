import React, { Fragment } from 'react';
import DatabaseItem from './DatabaseItem/DatabaseItem';
import classes from './DatabaseList.module.css';

const DatabaseList = () => {
  return (
    <div className={[classes.Container, classes.Scrollbar].join(' ')}>
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
      <DatabaseItem />
    </div>
  );
};

export default DatabaseList;
