import React from 'react'
import Data from '../DataBase/Products.json'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar'

function Product() {
  const id = useParams()
  const productId = id.id - 1
  const data = Data[productId]

  return (
    <React.Fragment>
      <NavBar />
      <div className="sm:mt-48 mt-36  text-white">
        <img src={data['image']} />
        <p>{data['name']}</p>
        <p>{data['price']}</p>
      </div>
    </React.Fragment>
  )
}

export default Product
