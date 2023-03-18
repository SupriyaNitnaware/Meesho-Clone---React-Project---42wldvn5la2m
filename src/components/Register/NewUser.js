import React, { useEffect, useState } from 'react'
import "./NewUser.css"
import { Link } from 'react-router-dom'

const NewUser = () => {

  const initialData = {
    username: '',
    password: ''
  }

  const [formdata, setFormData] = useState(initialData);

  const [status, setStatus] = useState(false)

  const [formError, setFormError] = useState(initialData);

  const updateData = (e) => {
    console.log(e.target.id, e.targe.value)
    let tempObj = {}
    tempObj[e.target.id] = e.targe.value;
    setFormData({
      ...formdata, ...tempObj
    })
  }

  const registerFn = () => {

    setStatus(true)

    // user is key name, and formdata is an value
    localStorage.setItem('users', formdata)

    setFormData(initialData)
    
  }

  useEffect(()=>{
    
    let temp =localStorage.getItem('users')
    console.log(temp)

  }, [status])

  return (

    <div className="containerr">

      <h3>Sign Up</h3>
      <input type="text" placeholder="Enter Email" id="username"  onChange={updateData}  />
      <div>{formError.username}</div>
      <input type="password" placeholder="Enter Password" id="password"  onChange={updateData}  />
      <div>{formError.password}</div>

      {/* <div className="rows">
        <Link to="/signin" ><button onClick={registerFn}>Submit</button></Link>
      </div> */}
      <button onClick={registerFn}>Submit</button>

      {
        status && <div>
          <h2>Successfully Registred</h2>
        </div>
      }


    </div>

  )
}

export default NewUser

/*import React, { useState, useEffect } from 'react'

const NewUser = () => {

    const initialData = {
        username: '',
        password: '',
    }

    //state object for formdata
    const [formdata, setFormdata] = useState(initialData);

    //state variable to check form submission status
    const [status, setStatus] = useState(false);

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    //methods for form submission button
    const registerFn = () => {
            //form submiited
            setStatus(true);
            //call api for form submission - POST - Submit Data - formdata/localstorage
            let temp = JSON.parse(localStorage.getItem('users')) || [];
            localStorage.setItem('users', JSON.stringify([...temp, formdata]));
            //store the response in a state variable
            setFormdata(initialData);
    }

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [status])


    return (
        <div>

            Username: <input type="text" id="username" onChange={updateData} value={formdata.username} />

            Password: <input type="password" id="password" onChange={updateData} value={formdata.password} /><br></br>

            <button onClick={registerFn}>Register</button>
            <br></br>
            <br></br>

            {status && <div >
                <h2>Successfully Registered</h2>
                </div>
            }
        </div>
    )
}

export default NewUser
*/