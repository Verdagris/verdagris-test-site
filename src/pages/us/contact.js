import React from "react"
import LayoutUS from "../../Components/layoutUS"

import bodyStyles from '../../Styles/bodystyles.module.scss'

const ContactPageUS = () => {
    return(
    <LayoutUS>
        <h2>Contact Me</h2>
        <h3>Follow me or contact me via social media. </h3>

        <nav>
            <ul className={bodyStyles.navList}>
                <li>
                    <a  className={bodyStyles.navItem} href="https://instagram.com/verdagris" target="_blank">Instagram</a>
                </li>
                <li>
                    <a  className={bodyStyles.navItem} href="https://facebook.com/verdagris" target="_blank">Facebook</a>
                </li>
                <li>
                    <a  className={bodyStyles.navItem} href="https://soundcloud.com/verdagris" target="_blank">SoundCloud</a>
                </li>
                <li>
                    <a  className={bodyStyles.navItem} href="https://twitter.com/verdagris" target="_blank">Twitter</a>
                </li>
                <li>
                <a  className={bodyStyles.navItem} href="https://open.spotify.com/artist/7fmDraexZ8GcuFVnD6ta3t" target="_blank">Spotify</a>         
                </li>
            </ul>
        </nav>

    </LayoutUS>
    )
}

export default ContactPageUS