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
      value: ''
    },
    article: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Add Proper Article'
      },
      value: ''
    },
    wordTranslated: {
      elementtype: 'input',
      elementconfig: {
        type: 'text',
        placeholder: 'Add Polish Translation'
      },
      value: ''
    },
    sentenceOne: {
      elementtype: 'textarea',
      elementconfig: {
        type: 'text',
        placeholder: 'Type a sentence which includes your chosen word'
      },
      value: ''
    },
    sentenceTwo: {
      elementtype: 'textarea',
      elementconfig: {
        placeholder: 'Give an example of another sentence with chosen word'
      },
      value: ''
    }
  });

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

    updatedTranslationForm[identifier] = updatedFormElement;
    setTranslationForm(updatedTranslationForm);
    console.log(translationForm);
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
          changed={e => onInputChange(e, formElement.id)}
        />
      ))}
      <Button>SUBMIT TRANSLATION</Button>
    </form>
  );

  return <div>{form}</div>;
};

export default Form;
