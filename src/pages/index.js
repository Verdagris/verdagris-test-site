import React from "react"
import {Link} from "gatsby"
import Layout from "../Components/layout"

const IndexPageUS = () => {

  return(
    <Layout>
   <h2 style={{paddingTop:"100px"}}>Hello, I am Verdagris...</h2>
   <h3>...a Johannesburg-based House music producer.</h3>
   <p><Link to="/us/home">Click here for American</Link></p>
   <p><Link to="/uk/home">Click here for UK</Link></p>
   </Layout>
  )
}

export default IndexPageUS

