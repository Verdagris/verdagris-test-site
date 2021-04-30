import React from "react"
import Layout from "../../Components/layoutUS"
import art from "../../Styles/art.scss"

import US1 from "../../images/us1.jpg"
import US2 from "../../images/us2.jpg"
import US3 from "../../images/us3.jpg"

const ArtPageUS = () => {
    return(


    <Layout>

        <div>
            <img width="150px" src={US2}></img>
        </div>
        <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
            <img width="150px" src={US1}></img>
        </div>
        <div>
            <img width="150px" src={US3}></img>
        </div>
        {/* <div>
        <div className="cloud-circle"></div>

        <svg className="cloud-circle" width = "0" height = "0">
            <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency=".005" numOctaves = "10"/>
                <feDisplacementMap in="SourceGraphic" scale = "500" />
            </filter>
        </svg>

        <h2>Pics and Paintings</h2>
        <p>See the world through my lens</p>
        </div> */}
    </Layout>
    )
}

export default ArtPageUS