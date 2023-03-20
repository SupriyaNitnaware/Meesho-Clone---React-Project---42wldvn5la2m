import React from 'react'
import "./Cart.css"

const Cart = () => {

  const [data, setData] = useState([]);

  const fetchAPI = () => {

    fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/")
      .then(response => response.json())
      .then(dataItem => {
        console.log(dataItem);
        setData(dataItem)
      })

  }


  useEffect(() => {

    fetchAPI();

  }, [])



  return (
    <div className="header_cart">
      {/* <ul>
        <li>Item</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
        <li>Remove</li>
      </ul> */}
     {
      data.map((item)=>(
        <p>{item.title}</p>
      ))
     }

    </div>
  )
}

export default Cart