import React from "react";
import { Link } from "react-router-dom";

const Navitems = (props) => {
  return (
    <li className="nav-item dropdown" style={{ float: "left" }}>
      <span
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        {props.NavTitle}
      </span>
      <ul className="dropdown-menu">
        {(() => {
          const list = [];
          if (props.dropdown1) {
            list.push(
              <Link to="/newbirthrecord">
                <li style={{ listStyleType: "none" }}>
                  <span
                    className="dropdown-item"
                    style={{ textDecoration: "none" }}
                  >
                    {props.dropdown1}
                  </span>
                </li>
              </Link>
            );
          } 
          if (props.dropdown2) {
            list.push(
              <Link to="/newdeathrecord">
                <li>
                  <span className="dropdown-item">{props.dropdown2}</span>
                </li>
              </Link>
            );
          } 
          if (props.dropdown3) {
            list.push(
              <Link to="/fetaldeath">
                <li>
                  <span className="dropdown-item">{props.dropdown3}</span>
                </li>
              </Link>
            );
          }
          if (props.dropdown4) {
            list.push(
              <Link to="/associateimage">
                <li>
                  <span className="dropdown-item">{props.dropdown4}</span>
                </li>
              </Link>
            );
          }  
          if (props.dropdown5) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown5}</span>
                </li>
              </Link>
            );
          } 
          if (props.dropdown6) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown6}</span>
                </li>
              </Link>
            );
          } 
          if (props.dropdown7) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown7}</span>
                </li>
              </Link>
            );
          } if (props.dropdown8) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown8}</span>
                </li>
              </Link>
            );
          } if (props.dropdown9) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown9}</span>
                </li>
              </Link>
            );
          } if (props.dropdown10) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown10}</span>
                </li>
              </Link>
            );
          } if (props.dropdown11) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown11}</span>
                </li>
              </Link>
            );
          } if (props.dropdown12) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown12}</span>
                </li>
              </Link>
            );
          } if (props.dropdown13) {
            list.push(
              <Link to="">
                <li>
                  <span className="dropdown-item">{props.dropdown13}</span>
                </li>
              </Link>
            );
          } 
          
          
          return list;
        })()}
      </ul>
    </li>
  );
};
const Navbar = () => {
  return (
    <>
      <ul nav nav-tabs style={{ listStyleType: "none" }}>
        <Navitems
          NavTitle="Import Data"
          //   dropdown1="Process Hospital Data"
          dropdown2="Assimilate Data"
          dropdown3="Unassimilated Date filed Search"
          dropdown4="Import State Birth data"
          dropdown5="Import State Death data"
          dropdown6="Unassimilated general Search"
          dropdown7="Delete Selected Unassimilated Record"
          dropdown8="Process Duplicate Record"
          dropdown9="Unassimilated Record compare"
          dropdown10="EDI Reports"
        />

        <Navitems
          NavTitle="New Records"
          dropdown1="New Birth Record"
          dropdown2="Death Record"
          dropdown3="New Fetal Death Record"
          dropdown4="Associate image to image to record"
        />

        <Navitems
          NavTitle="Search"
          dropdown1="General"
          dropdown2="Local Number, Date filed"
          dropdown3="Data Entry Date Search"
          dropdown4="Pending Adoption Search"
          dropdown5="Cause of Death Category Search"
          dropdown6="Deleted Record Search"
          dropdown7="Deleted Record Search"
          dropdown8="Search Result Screen"
        />

        <Navitems
          NavTitle="Record Tasks"
          dropdown1="Correct Record"
          dropdown2="New Revision"
          dropdown3="Stamp Record"
          dropdown4="View Record"
          dropdown5="Print Certificate"
          dropdown6="BCRISB"
          dropdown7="View certificate print history"
          dropdown8="View history of changes"
          dropdown9="Comments"
          dropdown10="Lock Record"
          dropdown11="Unlock Record"
          dropdown12="Delete Record"
          dropdown13="Restore Deleted Records"
        />

        <Navitems
          NavTitle="Reports"
          dropdown1="Satistical Records"
          dropdown2="Ad-hoc Records"
        />

        <Navitems
          NavTitle="Administrative Tasks"
          dropdown1="User Group Management"
          dropdown2="Person Management"
          dropdown3="User Account Management"
          dropdown4="Access Rights Management"
          dropdown5="Stamp Management"
          dropdown6="Release In-process"
          dropdown7="Set Default Printer"
          dropdown8="Set Image Folder Path"
          dropdown9="Set Certificate Folder Path "
          dropdown10="Set EDI File Path"
          dropdown11="Server Availability"
          dropdown12="Set Unassimilated Records of File"
          dropdown13="Configuration Manager"
        />

        <Navitems
          NavTitle="Chronica Tasks"
          dropdown1="Print Birth Notification"
          dropdown2="Print BRNF"
        />

        <Navitems NavTitle="My Tasks" dropdown1="Change Password" />
        <Navitems NavTitle="Window" />
        <Navitems NavTitle="Help" />
        <Navitems NavTitle="Exit" />
      </ul>
    </>
  );
};
export default Navbar;
