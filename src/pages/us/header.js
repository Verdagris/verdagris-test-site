import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

//import '../Styles/header.module.scss'
import headerStyles from '../../Styles/header.module.scss'
import CountrySelector from '../../Components/CountrySelector.js'

const HeaderUS = () =>{
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
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/us/home">US HOME</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/us/art">US ART</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/us/music">US MUSIC</Link>
                    </li>
                    <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/us/contact">US CONTACT ME</Link>
                    </li>
                    <li>
                        <CountrySelector />
                    </li>
                   
                    {/* <select onClick="window.location.href=this.value">
                     
                        <option value="/us/home">
                        English (US)
                        </option>

                        <option value="/uk/home">
                        English (UK)
                        </option>
                        </select> */}
                </ul>
                {/* <ul>
                    <li style={{marginLeft:"-25px"}}>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/uk/home">Change to (UK) English</Link>
                    </li>
                </ul> */}
            </nav>
            </center>
        </header>
    )

}

export default HeaderUS