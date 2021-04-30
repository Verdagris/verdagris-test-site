import React from "react"
import LayoutUS from "../../Components/layoutUS"

import USFlag from "../../images/us-flag.jpg"

const IndexPage = () => {

  return(
    <LayoutUS>
   <h2>This is now American</h2>
   <img height="150px" src={USFlag}></img>
   <h3>...optimize color catalog</h3>
   </LayoutUS>
  )
}

export default IndexPage

