import React from "react"
import person_logo from '../../assets/person_svg.svg'
import location_logo from '../../assets/map_svg.svg'
import project_logo from '../../assets/folder_svg.svg'
import info_logo from '../../assets/design_svg.svg'

export const NavbarData = [
    {
        key: "person_logo",
        icon: person_logo,
        size: 30,
        target: "header"
    },
    {
        key: "location_logo",
        icon: location_logo,
        size: 30,
        target: "roadmap"
    },
    {
        key: "project_logo",
        icon: project_logo,
        size: 30,
        target: "projects"
    },
    {
        key: "info_logo",
        icon: info_logo,
        size: 30,
        target: "extra"
    }
];
