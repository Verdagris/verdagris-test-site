import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

//import '../Styles/header.module.scss'
import headerStyles from '../Styles/header.module.scss'

const Header = () =>{
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title
                    slogan
                }
            }
        }
    `)

    return(
        <header  className={headerStyles.header}>
            <center>
            <h1> 
            <Link className={headerStyles.title} to ="/">
                {data.site.siteMetadata.title}
                </Link>                
            </h1>
            <h3>
                {data.site.siteMetadata.slogan}
            </h3>

            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/">HOME</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/art">ART</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/music">MUSIC</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/contact">CONTACT ME</Link>
                    </li>
                </ul>
            </nav>
            </center>
        </header>
    )

}

export default Header