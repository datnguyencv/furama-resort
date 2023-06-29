import React from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function DropdownMenu() {
  return (
    <li className="nav-item">
    <NavDropdown title="Admin" id="basic-nav-dropdown">
      <NavDropdown.Item as={NavLink} to="/product/create">Create Product</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/product/edit/:id">Edit Product</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/product/list">List Product</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={NavLink} to="/contract/create">Create Contract</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/contract/list">Contract List</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={NavLink} to="/customer/create">Create Customer</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/customer/edit/:id">Edit Customer</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/customer/list">Customer List</NavDropdown.Item>
    </NavDropdown>
  </li>
  );
}
