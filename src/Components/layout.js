import React from "react"

import Header from "../pages/header"
import Footer from "../pages/footer"
import "../Styles/index.scss"
import layoutStyles from '../Styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>  
                <Header />
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
        <div>
               <center> {props.children} </center>
               </div>
            </div>
            <Footer />
        </div>
    )


}

export default Layout