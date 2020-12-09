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
               <center> {props.children} </center>
            </div>
            <Footer />
        </div>
    )


}

export default Layout