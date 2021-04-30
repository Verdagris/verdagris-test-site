import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

//import '../Styles/header.module.scss'
import headerStyles from '../../Styles/header.module.scss'

const HeaderUK = () =>{
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
            <Link className={headerStyles.title} to ="/uk/">
                {data.site.siteMetadata.title}
                </Link>                
            </h1>
            <h3>
                {data.site.siteMetadata.slogan}
            </h3>

            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/uk/home">UK HOME</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/uk/art">UK ART</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/uk/music">UK MUSIC</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/uk/contact">UK CONTACT ME</Link>
                    </li>

                </ul>
                <ul>                    
                    <li style={{marginLeft:"-25px"}}>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/us/home">Change to (US) English</Link>
                    </li>
                </ul>
            </nav>
            </center>
        </header>
    )

}

export default HeaderUK