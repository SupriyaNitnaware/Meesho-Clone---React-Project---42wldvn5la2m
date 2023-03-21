import React, { useContext, useEffect, useState } from 'react'
import "./Payment.css"

import { DataAppContext } from '../DataApp';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

  const navigate = useNavigate();

  const paymentObj = {
    name: '',
    email: '',
    phoneNo: '',
    address: '',
  }

  const uname = useContext(DataAppContext);

  const [payment, setPayment] = useState(paymentObj);

  const [status, setStatus] = useState(false);

  const handleInput = (e) => {

    let tempObj = {}
    tempObj[e.target.id] = e.target.value;
    setPayment({
      ...payment, ...tempObj
    })
  }

  const paymentFn = () => {

    setStatus(true);
    localStorage.setItem('payment', JSON.stringify(payment));

    if(status)
    {
      alert("Your Order IS Placed!!")
    }

  }

  useEffect(() => {
    console.log("payment",payment);

    if(!uname.appState.loginStatus)
    {
      navigate('/signin')
    }

  })


  return (
    
    <div className="payment">
      <h3>Payment Form</h3>
      <input type="text" placeholder="Name" id="name" onChange={handleInput} value={uname.appState.username} />
      <input type="text" placeholder="Contact Number"  id="phoneNo" onChange={handleInput} />
      <input type="text" placeholder="Enter email" id="email" onChange={handleInput} />
      <input type="text" placeholder="User address" id="address" onChange={handleInput} />

      <h3>Select Payment</h3>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">Cash On Devlivery</label>

      <button onClick={paymentFn}>Complete Payment</button>
    
    </div>
  )
}

export default Payment