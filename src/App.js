import React, { useState } from 'react';

import './App.css';
import validation from './validation'
function App() {
  // const [values, setValues] = useState({
  //   lname: "",
  //   email: "",
  //   password: ""
  // });

  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorName, setErrorName] = useState("")
  const [erroremail, setErrorEmail] = useState("")
  const [errorpassword, setErrorpassword] = useState("")
 

  const handleName = (event) => {
    setLname(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  console.log("Values", lname)
  console.log("Values", email)
  console.log("Values", password)


  // console.log("values", values)
  // const [error, setError] = useState({});
  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value
  //   })
  //   console.log(values)
  // };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setError(validation(values))
    if(!lname) {
      setErrorName("Please Enter a Name!")
    }
    if(!email){
      setErrorEmail("Please Enter email!")
    }
   if (!password){
    setErrorpassword("Please Enter password!")
   } 
  }

  console.log("valuesttt", erroremail)

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="title">
          <h2>Registration Form</h2>
        </div>
        <form className='form-wrapper'>
          <div className="name">
            <label className='label'>Name</label>
            <input className='input' type="text" placeholder='Enter the name' name='lname'
              value={lname} onChange={handleName}></input>
            {errorName && <p className='error'>{errorName}</p>}
          </div>
          <div className="email">
            <label className='label'>Email</label>
            <input className='input' type="text" placeholder='Enter the Email' name='email'
              value={email} onChange={handleEmail}></input>

            {erroremail && <p className='error'>{erroremail}</p>}
          </div>
          <div className="password">
            <label className='label'>Password</label>
            <input className='input' type="text" placeholder='Enter the Password' name='password'
              value={password} onChange={handlePassword}></input>
            {errorpassword && <p className='error'>{errorpassword}</p>}
          </div>
          <div>
            <button className='submit' onClick={handleFormSubmit}>signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
