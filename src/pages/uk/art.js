import React from "react"
import LayoutUK from "../../Components/layoutUK"
import art from "../../Styles/art.scss"

import UK1 from "../../images/uk1.jpg"
import UK2 from "../../images/uk2.jpg"
import UK3 from "../../images/uk3.jpg"

const ArtPageUK = () => {
    return(


    <LayoutUK>

<div>
            <img width="150px" src={UK2}></img>
        </div>
        <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
            <img width="150px" src={UK1}></img>
        </div>
        <div>
            <img width="150px" src={UK3}></img>
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
    </LayoutUK>
    )
}

export default ArtPageUK