import React from 'react';

import classes from './Input.module.css';

const Input = props => {
  let inputElement = null;
  let errorMessage = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    errorMessage = (
      <p className={classes.ValidationError}>{props.errorMessage}</p>
    );
  }

  switch (props.elementtype) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div>
      {errorMessage}
      <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
      </div>
    </div>
  );
};

export default Input;
