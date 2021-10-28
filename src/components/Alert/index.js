import React from 'react';
import classNames from 'classnames';
import {useSelector, useDispatch} from "react-redux";

import {alertSelector} from "../../redux/selectors";

import './Alert.scss';
import {reducerSetAlert} from "../../redux/actions/alert";


const Alert = () => {
  const dispatch = useDispatch();
  const { success = 'privet', error } = useSelector(alertSelector);

  React.useEffect(() => {

    success && setTimeout(() => {
      dispatch(reducerSetAlert({success: ''}))
    }, 5000);

    error && setTimeout(() => {
      dispatch(reducerSetAlert({error: ''}))
    }, 5000);
  }, [dispatch, success, error]);

  return (
    <div
      className={classNames('notification', {
        active: !!(success || error),
        close: !(success && error),
        success: success,
        error: error
    })}
    >
      <div className="notification__content">
        { success || error }
      </div>
    </div>
  );
};

export default Alert;
