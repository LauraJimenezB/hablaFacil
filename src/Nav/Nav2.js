import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Nav2 = (searchField, setSearchField) => {

    return (
    <div>
        <style type="text/css">
        {`
        .bg-dark{
            background-color: #071717 !important; 
            padding: 0px 15px 0 0;
        }
        .navbar-brand{
            padding: 20px;
        }
        .navbar-collapse{
            background-color: #FFFFFF !important;
            margin: 0 -18px -9px -18px;  
        }
        
        .nav-item{
            border: #DFDFDF 1px solid;    
            padding-left: 0px;
        }
        .nav-link{
            color: #071717 !important;
            padding: 12px 0;
            font-family: 'Quincy';
            font-size: 1.2rem;
        }
        .navbar-nav .nav-link {
            padding-left: 40px;
        }
        .dropdown-item {
            padding-left: 40px;
        }
        
        .mt-lg-0 {
            margin: 0px !important;
        }
        
        .form-inline {
            margin: 10px 25px 15px 25px !important;
        }
        `}
         </style>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/voto">Elecciones 2021</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchField} onChange={(e)=>setSearchField(e.target.value)}/>
            </Form>
        </Navbar.Collapse>
    </Navbar>
</div>
)}

export default Nav2;