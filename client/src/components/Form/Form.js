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
      valid: false
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
      valid: false
    },
    wordTranslated: {
      elementtype: 'input',
      elementconfig: {
        placeholder: 'Add Polish Translation'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
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
      valid: false
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
      valid: false
    }
  });

  const formElementsArray = [];
  for (const key in translationForm) {
    formElementsArray.push({
      id: key,
      config: translationForm[key]
    });
  }

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.constantLength) {
      isValid = value.length === rules.constantLength && isValid;
    }

    return isValid;
  };

  const inputChangedHandler = (e, identifier) => {
    const updatedFormData = {
      ...translationForm
    };

    // changing nested object in an immutable way
    const updatedInnerFormData = {
      ...updatedFormData[identifier]
    };

    updatedInnerFormData.value = e.target.value;
    updatedInnerFormData.valid = checkValidity(
      updatedInnerFormData.value,
      updatedInnerFormData.validation
    );
    updatedFormData[identifier] = updatedInnerFormData;
    setTranslationForm(updatedFormData);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const formData = {};
    for (const key in translationForm) {
      formData[key] = translationForm[key].value;
    }
    console.log(formData);
  };

  let form = (
    <form
      onSubmit={e => onFormSubmit(e)}
      className={[classes.Form, globalClasses.Wrapper].join(' ')}
    >
      {formElementsArray.map(formElement => {
        return (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementtype}
            elementConfig={formElement.config.elementconfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            changed={e => inputChangedHandler(e, formElement.id)}
          />
        );
      })}
      <Button clicked={e => onFormSubmit(e)}>SUBMIT TRANSLATION</Button>
    </form>
  );

  return <div>{form}</div>;
};

export default Form;
