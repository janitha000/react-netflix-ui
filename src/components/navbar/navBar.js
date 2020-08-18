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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix logo" />

            <img className="navbar__userimg"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="usr"
            />


        </div >
    )

}

export default NavBar;