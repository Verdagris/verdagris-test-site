import React from "react"
import "../Styles/CountrySelector.scss"
//import { useLocation } from "react-router-dom"

const CountrySelector = () => {
  let location = window.location.href
  let baseUrl = "http://localhost:8000/"

  const handleChange = value => {
    window.location.href = `${baseUrl}${value}`
  }

  return (
    <div className="globe">
      <select onChange={event => handleChange(event.target.value)}>
        <option> </option>
        <option value="uk/home">UK</option>
        <option value="us/home">US</option>
      </select>
    </div>
  )
}

export default CountrySelector
