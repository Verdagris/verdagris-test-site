import React from "react"
import {graphql, useStaticQuery} from 'gatsby'

const FooterUK = () =>{
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
        <p>Created for UK by {data.site.siteMetadata.author} ©  2021 </p>
        </center>
    </footer>
    )

}

export default FooterUK