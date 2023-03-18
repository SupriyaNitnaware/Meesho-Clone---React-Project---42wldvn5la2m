import React from 'react'
import "./ProdDetails.css"
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';


const ProdDetails = () => {

  const temp = useParams();
  console.log(temp.id);


  const [data, setData] = useState({});
  console.log(data);

  const fetchAPI = async (pId) => {

    const res = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${pId}`)
    const data1 = await res.json()
    
    setData(data1)

  }

  useEffect(() => {

    fetchAPI(temp.id);

  }, [temp.id])


  return (
    <div>
      product details
      {/* {
        data.map((item)=>( */}
      {/* <img src={data.image} /> */}
      <p>{data.description}</p>
      {/* ))
      } */}
    </div>
  )
}

export default ProdDetails