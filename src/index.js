import React from "react";
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const CoreHeader = props => {
  const { logout, profile, ...loggedinUser } = props;
  return (
    <Header user={loggedinUser} logout={logout} profile={profile} />
  );
};

export default CoreHeader;
