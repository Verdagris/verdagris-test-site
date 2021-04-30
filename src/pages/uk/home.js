import React from "react"
import LayoutUK from "../../Components/layoutUK"

import UKFlag from "../../images/uk-flag.jpg"

const IndexPageUK = () => {

  return(
    <LayoutUK>
   <h2>This is now British</h2>
   <img height="150px" src={UKFlag}></img>
   <h3>...optimise colour catalogue</h3>
   </LayoutUK>
  )
}

export default IndexPageUK

