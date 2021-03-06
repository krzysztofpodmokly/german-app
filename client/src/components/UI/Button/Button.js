import React from 'react';
import { connect } from 'react-redux';
import classes from './Button.module.css';
import * as actions from '../../../store/actions';

const Button = props => {
  return (
    <button
      style={props.style}
      disabled={props.disabled}
      onClick={() => {
        props.buttonClicked();
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
    buttonClicked: () => dispatch(actions.buttonClicked())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
