import React from "react"
import person_logo from '../../assets/person.svg'
import location_logo from '../../assets/location_logo.png'
import project_logo from '../../assets/design_logo.png'
import info_logo from '../../assets/info_logo.png'

export const NavbarData = [
    {
        key: "person_logo",
        icon: person_logo,
        size: 40,
        link: '/home'
    },
    {
        key: "location_logo",
        icon: location_logo,
        size: 50,
        link: '/roadmap'
    },
    {
        key: "project_logo",
        icon: project_logo,
        size: 35,
        link: '/projects'
    },
    {
        key: "info_logo",
        icon: info_logo,
        size: 45,
        link: '/aboutme'
    }
];
