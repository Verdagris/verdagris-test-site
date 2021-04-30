import React from "react"
import {graphql, useStaticQuery} from 'gatsby'

const FooterUS = () =>{
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
        <p>Created for US by {data.site.siteMetadata.author} ©  2021 </p>
        </center>
    </footer>
    )

}

export default FooterUS