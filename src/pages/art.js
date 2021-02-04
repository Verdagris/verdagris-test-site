import React from "react"
import Layout from "../Components/layout"
import art from "../Styles/art.scss"

const ArtPage = () => {
    return(


    <Layout>
        <div className="cloud-circle"></div>

        <svg width = "0" height = "0">
            <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves = "10"/>
                <feDisplacementMap in="SourceGraphic" scale = "180" />
            </filter>
        </svg>

        <h2>Pics and Paintings</h2>
        <p>See the world through my lens</p>
    </Layout>
    )
}

export default ArtPage