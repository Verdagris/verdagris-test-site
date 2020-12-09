import React from "react"
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () =>{
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)

    return (

    <footer>
        <center>
        <p>Created by {data.site.siteMetadata.author} ©  2020 </p>
        </center>
    </footer>
    )

}

export default Footer