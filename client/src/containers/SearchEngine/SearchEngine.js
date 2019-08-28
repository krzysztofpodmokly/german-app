import React, { Fragment, useState } from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './SearchEngine.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import DatabaseList from '../../components/DatabaseList/DatabaseList';
import DatabaseInfo from '../../components/DatabaseList/DatabaseInfo/DatabaseInfo';

const SearchEngine = () => {
  const [input, setInput] = useState({
    inputField: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Type to get a match!'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      errorMessage: 'Please add German noun'
    }
  });

  const inputStyle = {
    width: '50%'
  };

  return (
    <div className={classes.SearchContainer}>
      <div
        className={[globalClasses.Wrapper, classes.SearchPosition].join(' ')}
      >
        <Input
          inputStyle={inputStyle}
          elementtype={input.inputField.elementtype}
          elementconfig={input.inputField.elementconfig}
          value={input.inputField.value}
          invalid={input.inputField.valid}
          shouldValidate={input.inputField.validation}
          touched={input.inputField.touched}
          errorMessage={input.inputField.errorMessage}
        />
        <div className={classes.ContentBox}>
          <DatabaseList />
          <DatabaseInfo />
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
