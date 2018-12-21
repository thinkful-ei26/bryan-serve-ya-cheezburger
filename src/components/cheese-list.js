import React, { Component } from 'react'

const CheeseList = ({cheeses}) => (
  <ul>
  {cheeses.map((cheese,index) => (
    <li className="cheese" key={index}>{cheese}</li>
  ))}
  </ul>
)

export default CheeseList;