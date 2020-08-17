import React, { useEffect, useState } from 'react'
import './navBar.css'

const NavBar = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`navbar ${show && 'navbar__black'}`} >
            <img className="navbar__netfliximg"
                src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
                alt="Netflix logo" />

            <img className="navbar__userimg"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="usr"
            />


        </div >
    )

}

export default NavBar;