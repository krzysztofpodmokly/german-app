import React from 'react';
import { connect } from 'react-redux';
import classes from './Alert.module.css';

const Alert = ({ alerts, error }) => {
  return alerts.map(alert => (
    <div
      key={alert.id}
      className={[
        classes.Alert,
        alert.alertType === 'danger' ? classes.AlertDanger : null
      ].join(' ')}
    >
      {alert.msg}
    </div>
  ));
};

const mapStateToProps = state => {
  return {
    alerts: state.alert,
    error: state.translation.error
  };
};

export default connect(mapStateToProps)(Alert);

// alerts.length > 0 &&
//     alerts.map(
//       <div key={alert.id} className={`alert alert-${alert.alertType}`}>
//         {alert.msg}
//       </div>
//     )
