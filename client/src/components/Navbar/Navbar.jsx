import React from "react";


const Navitems = (props) => {
    return (
        <li className="nav-item dropdown" style={{float: "left"}}>
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{props.NavTitle}</a>
            <ul className="dropdown-menu">
                <li style={{listStyleType: "none"}}><a className="dropdown-item" href="#" style={{textDecoration: "none"}}>{props.dropdown1}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown2}</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                <li><a className="dropdown-item" href="#">Separated link</a></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </li>
    );
}
const Navbar = () => {
    return(
        <>
            <ul nav nav-tabs style={{listStyleType: "none"}}>
                <Navitems NavTitle="Import Data" />
                <Navitems NavTitle="New Records" dropdown1="New Birth Record" />
                <Navitems NavTitle="Search" dropdown1="General" dropdown2="Local Number, Date filed"/>
                <Navitems NavTitle="Record Tasks" />
                <Navitems NavTitle="Reports" />
                <Navitems NavTitle="Administrative Tasks" />
                <Navitems NavTitle="Chronica Tasks" />
                <Navitems NavTitle="My Tasks" />
                <Navitems NavTitle="Window" />
                <Navitems NavTitle="Help" />
                <Navitems NavTitle="Exit" />
            </ul>
        </>
    );
}
export default Navbar