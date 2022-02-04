import React from "react";


const Navitems = (props) => {
    return (
        <li className="nav-item dropdown" style={{ float: "left" }}>
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{props.NavTitle}</a>
            <ul className="dropdown-menu">
                <li style={{ listStyleType: "none" }}><a className="dropdown-item" href="#" style={{ textDecoration: "none" }}>{props.dropdown1}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown2}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown3}</a></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                <li><a className="dropdown-item" href="#">{props.dropdown4}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown5}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown6}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown7}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown8}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown9}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown10}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown11}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown12}</a></li>
                <li><a className="dropdown-item" href="#">{props.dropdown13}</a></li>
            </ul>
        </li>
    );
}
const Navbar = () => {
    return (
        <>
            <ul nav nav-tabs style={{ listStyleType: "none" }}>
                <Navitems NavTitle="Import Data" dropdown1="Process Hospital Data" dropdown2="Assimilate Data" dropdown3="Unassimilated Date filed Search" dropdown4="Import State Birth data" dropdown5="Import State Death data" dropdown6="Unassimilated general Search" dropdown7="Delete Selected Unassimilated Record" dropdown8="Process Duplicate Record" dropdown9="Unassimilated Record compare" dropdown10="EDI Reports" />

                <Navitems NavTitle="New Records" dropdown1="New Birth Record" dropdown2="Death Record" dropdown3="New Fetal Death Record" dropdown4="Associate image to image to record" />

                <Navitems NavTitle="Search" dropdown1="General" dropdown2="Local Number, Date filed" dropdown3="Data Entry Date Search" dropdown4="Pending Adoption Search" dropdown5="Cause of Death Category Search" dropdown6="Deleted Record Search" dropdown7="Deleted Record Search" dropdown8="Search Result Screen" />

                <Navitems NavTitle="Record Tasks" dropdown1="Correct Record" dropdown2="New Revision" dropdown3="Stamp Record" dropdown4="View Record" dropdown5="Print Certificate" dropdown6="BCRISB" dropdown7="View certificate print history" dropdown8="View history of changes" dropdown9="Comments" dropdown10="Lock Record" dropdown11="Unlock Record" dropdown12="Delete Record" dropdown13="Restore Deleted Records" />

                <Navitems NavTitle="Reports" dropdown1="Satistical Records" dropdown2="Ad-hoc Records" />

                <Navitems NavTitle="Administrative Tasks" dropdown1="User Group Management" dropdown2="Person Management" dropdown3="User Account Management" dropdown4="Access Rights Management" dropdown5="Stamp Management" dropdown6="Release In-process" dropdown7="Set Default Printer" dropdown8="Set Image Folder Path" dropdown9="Set Certificate Folder Path " dropdown10="Set EDI File Path" dropdown11="Server Availability" dropdown12="Set Unassimilated Records of File" dropdown13="Configuration Manager" />

                <Navitems NavTitle="Chronica Tasks" dropdown1="Print Birth Notification" dropdown2="Print BRNF" />
                
                <Navitems NavTitle="My Tasks" dropdown1="Change Password" />
                <Navitems NavTitle="Window" />
                <Navitems NavTitle="Help" />
                <Navitems NavTitle="Exit" />
            </ul>
        </>
    );
}
export default Navbar