import React, { useState } from 'react';
import './App.css';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name is required!");
    } else if (e.target.value.length < 3) {
      setFirstNameError("First name must be 3 characters or longer!");
    } else {
      setFirstNameError("");
    }
  }
  
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name is required!");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last name must be 2 characters or longer!");
    } else {
      setLastNameError("");
    }
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 5) {
      setEmailError("Email must be 5 characters or longer!");
    } else {
      setEmailError("");
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be 8 characters or longer!");
    } else {
      setPasswordError("");
    }
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match!");
    } else if (e.target.value.length < 8) {
      setConfirmPasswordError("Confirm password must be 8 characters or longer!");
    } else {
      setConfirmPasswordError("");
    }
  }


  return (
    <form onSubmit={createUser} style={{ textAlign: "center" }}>
      {
        hasBeenSubmitted ?
          <h3>Thank you for submitting the form!</h3> :
          <h3>Welcome, please submit the form.</h3>
      }
      <div>
        <label>First Name: </label>
        <input type="text" onChange={handleFirstName} value={firstName} />
        {
          firstNameError ?
            <p style={{ color: 'red' }}>{firstNameError}</p> :
            ''
        }
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" onChange={handleLastName} value={lastName} />
        {
          lastNameError ?
            <p style={{ color: 'red' }}>{lastNameError}</p> :
            ''
        }
      </div>
      <div>
        <label>Email: </label>
        <input type="text" onChange={handleEmail} value={email} />
        {
          emailError ?
            <p style={{ color: 'red' }}>{emailError}</p> :
            ''
        }
      </div>
      <div>
        <label>Password: </label>
        <input type="password" onChange={handlePassword} value={password} />
        {
          passwordError ?
            <p style={{ color: 'red' }}>{passwordError}</p> :
            ''
        }
      </div>
      <div>
        <label>Confirm Password: </label>
        <input type="password" onChange={handleConfirmPassword} value={confirmPassword} />
        {
          confirmPasswordError ?
            <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
            ''
        }
      </div>
      <input type="submit" value="Create User" />
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
      <div>Confirm Password: {confirmPassword}</div>
    </form>
  );
};

export default UserForm;
