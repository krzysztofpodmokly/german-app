import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './Button.module.css';
import * as actions from '../../../store/actions';

const Button = props => {
  console.log(props.show);

  return (
    <button
      style={props.style}
      disabled={props.disabled}
      onClick={() => {
        props.showButton();
        props.clicked();
      }}
      className={[classes.Btn, classes.BtnLink].join(' ')}
    >
      {props.children}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    show: state.button.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showButton: () => dispatch(actions.showButton())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
