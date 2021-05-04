import React from "react"

import HeaderUK from "../pages/uk/header"
import FooterUK from "../pages/uk/footer"
import "../Styles/index.scss"
import layoutStyles from '../Styles/layout.module.scss'


const LayoutUK = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>  
                <HeaderUK />
               

                {/* CLOUDS */}
                <div>
        <div className="cloud-circle"></div>

        <svg className="cloud-circle" width = "0" height = "0">
            <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency=".005" numOctaves = "10"/>
                <feDisplacementMap in="SourceGraphic" scale = "400" />
            </filter>
        </svg>

        <div className="cloud-circle2"></div>

        <svg className="cloud-circle2" width = "0" height = "0">
            <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency=".005" numOctaves = "10"/>
                <feDisplacementMap in="SourceGraphic" scale = "400" />
            </filter>
        </svg>
        </div>


        {/* CHILDREN */}
        <div style={{marginTop:"-50px"}}>
               <center> {props.children} </center>
               </div>
            </div>
            <FooterUK />
        </div>
    )


}

export default LayoutUK