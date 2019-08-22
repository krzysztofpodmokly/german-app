import React, { useState } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.css';
import globalClasses from '../../assets/styles/Global.module.css';

const Form = () => {
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
      elementtype: 'textarea',
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
      elementtype: 'textarea',
      elementconfig: {
        placeholder: 'Give an example of another sentence with chosen word'
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

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true; // if no validation rules are define return true
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid; // false overwrites true, if one of the values is false whole expression is false
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.constantLength) {
      isValid = value.length === 3 && isValid;
    }

    return isValid;
  };

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
    console.log(isFormValid);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementIdentifier in translationForm) {
      formData[formElementIdentifier] =
        translationForm[formElementIdentifier].value;
    }

    console.log(formData);
  };

  let form = (
    <form
      onSubmit={e => onFormSubmit(e)}
      className={[classes.Form, globalClasses.Wrapper].join(' ')}
    >
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
          changed={e => onInputChange(e, formElement.id)}
        />
      ))}
      <Button disabled={!formIsValid}>SUBMIT TRANSLATION</Button>
    </form>
  );

  return <div>{form}</div>;
};

export default Form;
