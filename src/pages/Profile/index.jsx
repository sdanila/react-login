import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";

import {profileSelector} from "../../redux/selectors";


const Profile = () => {
  const history = useHistory();
  const {email, auth} = useSelector(profileSelector)

  React.useEffect(() => {

    !auth && history.push('/login');
  }, [auth, history]);

  return <h1>{email}</h1>
};

export default Profile;
