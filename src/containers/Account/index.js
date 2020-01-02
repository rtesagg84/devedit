import React from "react";
import { withAuthorization } from "../../components/Session";
//port { PasswordForgetForm } from "../../components/PasswordForget";
//port PasswordChangeForm from "../../components/PasswordChange";

const AccountPage = ({ authUser }) => (
    console.log(authUser),
  <div className="view-container account-page">
    <h2>Account: {authUser}</h2>
   
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
