import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.css';
import globalClasses from '../../assets/styles/Global.module.css';
import * as actions from '../../store/actions';
import { checkValidity } from '../../shared/utility';

const Form = props => {
  const [translationForm, setTranslationForm] = useState({
    word: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Type German Noun'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      errorMessage: 'Please add German noun'
    },
    article: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Add Proper Article'
      },
      value: '',
      validation: {
        required: true,
        constantLength: 3
      },
      valid: false,
      touched: false,
      errorMessage: 'Article must contain exactly 3 letters'
    },
    wordTranslated: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Add Polish Translation'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      errorMessage: 'Please add a Polish translation'
    },
    sentenceOne: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Type a sentence which includes your chosen word'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      errorMessage: 'Please add a sentence with chosen word'
    },
    sentenceTwo: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Type another sentence which includes your chosen word'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      errorMessage: 'Please add a sentence with chosen word'
    }
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const formElements = [];
  for (let key in translationForm) {
    formElements.push({
      id: key,
      config: translationForm[key]
    });
  }

  const onInputChange = (e, identifier) => {
    const updatedTranslationForm = {
      ...translationForm
    };

    // deep clone of translationForm
    const updatedFormElement = { ...updatedTranslationForm[identifier] };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedTranslationForm[identifier] = updatedFormElement;

    // checking overall form validation
    let isFormValid = true;
    for (let inputIdentifiers in updatedTranslationForm) {
      isFormValid =
        updatedTranslationForm[inputIdentifiers].valid && isFormValid;
    }

    setTranslationForm(updatedTranslationForm);
    setFormIsValid(isFormValid);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementIdentifier in translationForm) {
      formData[formElementIdentifier] =
        translationForm[formElementIdentifier].value;
    }

    if (!props.error) {
      props.postNewTranslation(formData);
      // redirect after submitting new record
      props.history.push('/');
    } else {
      props.setAlert(
        'Translations already exists - reload page!',
        'danger',
        3000
      );
    }
  };

  const inputStyle = {
    width: '100%'
  };

  let form = (
    <form
      onSubmit={e => onFormSubmit(e)}
      className={[classes.Form, globalClasses.Wrapper].join(' ')}
    >
      <h1 className={globalClasses.Header}>New Translation Form</h1>
      {formElements.map(formElement => (
        <Input
          key={formElement.id}
          elementtype={formElement.config.elementtype}
          elementconfig={formElement.config.elementconfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          errorMessage={formElement.config.errorMessage}
          label={formElement.config.elementconfig.label}
          inputStyle={inputStyle}
          changed={e => onInputChange(e, formElement.id)}
        />
      ))}
      <Button disabled={!formIsValid} clicked={() => true}>
        SUBMIT TRANSLATION
      </Button>
    </form>
  );

  return (
    <div className='page'>
      <div className={classes.FormContainer}>{form}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.translation.error,
    loading: state.translation.loading,
    alerts: state.alert
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postNewTranslation: formData =>
      dispatch(actions.postTranslationSuccess(formData)),
    setAlert: (msg, alertType, timeout) =>
      dispatch(actions.setAlert(msg, alertType, timeout))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Form));
