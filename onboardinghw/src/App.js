
import './App.css';

import React, { useState } from 'react'
import FORM from './Components/Form'
import * as yup from 'yup';
import schema from './Validation/formScheme'
import axios from 'axios'

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  checked: false,
}

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  checked: "",
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([]);

  const handleSubmit = function () {
    axios.post("https://reqres.in/api/users", formValues)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => { console.log(err) })
  }

  function handleChange(name, value) {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }


  return (
    <div className="App">
      <FORM values={formValues} errors={formErrors} submit={handleSubmit} change={handleChange} />

      {users.map(user => (
        <div key={user.id}>
          <p>{user.created}</p>
          <p>{user.email}</p>
        </div>
      ))
      }
    </div>
  );
}

export default App;
