import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MyContext } from '../Context';

const Admin_home = () => {
  const nav = useNavigate();
  const {} = useContext(MyContext);

  const containerStyle = {
    backgroundColor: '#f4f4f4', // Background color for the entire container
    minHeight: '100vh', // Minimum height to fill the viewport
  };

  const sidebarStyle = {
    backgroundColor: '#2980b9', // Blue background color for the sidebar
    color: 'white', // Text color for the sidebar
    minHeight: '100vh', // Minimum height to fill the viewport
    padding: '1rem',
  };

  const navDropdownStyle = {
    backgroundColor: '#2980b9', // Blue background color for dropdown
    padding: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#e74c3c', // Red background color for buttons
    color: 'white', // Text color for buttons
    marginBottom: '0.5rem',
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Navbar expand="sm" className="flex-column align-items-start" style={sidebarStyle}>
            <Navbar.Brand
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="fs-4 d-none d-sm-inline">Admin Dashboard</span>
            </Navbar.Brand>
            <Nav className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <Button onClick={() => nav('/addproduct')} style={buttonStyle}>
                Add Product
              </Button>

              <NavDropdown title="Products" className="nav-link px-0 align-middle" style={navDropdownStyle}>
                <NavDropdown.Item onClick={() => nav('/adminmen')} className="text-decoration-none">
                  Men
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => nav('/adminwomen')} className="text-decoration-none">
                  Women
                </NavDropdown.Item>
              </NavDropdown>

              <Button variant="danger" onClick={() => nav('/adminviewproduct')} style={buttonStyle}>
                All Products
              </Button>

              <Button variant="danger" onClick={() => nav('/adminviewuser')} style={buttonStyle}>
                Users
              </Button>
              <button onClick={() => nav('/')} style={buttonStyle}>
                Logout
              </button>
            </Nav>
            <hr className="text-white" />
          </Navbar>
        </div>
        <div className="col p-3 mb-2 text-dark">
          <h1 className="text-dark">Hi Admin...</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin_home;
