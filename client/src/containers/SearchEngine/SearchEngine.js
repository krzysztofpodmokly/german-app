import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import classes from './SearchEngine.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import DatabaseList from '../../components/DatabaseList/DatabaseList';
import DatabaseInfo from '../../components/DatabaseList/DatabaseInfo/DatabaseInfo';
import { fetchDataSuccess } from '../../store/actions';
import TypeToSearch from '../../components/NoContentToDisplay/TypeToSearch/TypeToSearch';

const SearchEngine = props => {
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

  const onInputChange = e => {
    const updatedInput = {
      ...input
    };

    const updatedInputElement = { ...updatedInput['inputField'] };
    updatedInputElement.value = e.target.value;
    updatedInputElement.touched = true;
    updatedInput['inputField'] = updatedInputElement;
    setInput(updatedInput);

    // trigger database query on each key stroke
    props.fetchDataOnKeyStroke(updatedInput.inputField.value);
  };

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
          changed={e => onInputChange(e)}
        />
        <div className={classes.ContentBox}>
          {props.query.length === 0 ? (
            <TypeToSearch />
          ) : (
            <Fragment>
              <DatabaseList />
              <Route path='/:id' component={DatabaseInfo} />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    query: state.query.queryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataOnKeyStroke: keystroke => dispatch(fetchDataSuccess(keystroke))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchEngine);
