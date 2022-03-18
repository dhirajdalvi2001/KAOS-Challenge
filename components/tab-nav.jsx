import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const TabNav = ({ active, goto }) => {
  return (
    <Nav pills style={{
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      }}>
      <Navbar tabs="true" style={{
        width: "auto",
        borderRadius: "14px",
        padding: "0",
        border: "2px solid #000",
        overflow: "hidden",
      }}>
        <NavItem style={{
          overflow: "hidden",
        }}>
          <NavLink
            className={active === "form" ? "active" : ""}
            onClick={() => goto("form")}
            style={{
              padding: "10px 10px",
              borderRadius: "12px",
            }}
          >
            Add Details
          </NavLink>
        </NavItem>
        <NavItem style={{
          overflow: "hidden",
        }}>
          <NavLink
            className={active === "feed" ? "active" : ""}
            onClick={() => goto("feed")}
            style={{
              padding: "10px 10px",
              borderRadius: "12px",
            }}
          >
            View Submissions
          </NavLink>
        </NavItem>
      </Navbar>
    </Nav>
  );
};

export default TabNav;
