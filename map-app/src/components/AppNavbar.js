import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import logoNav from '../img/logoNav.svg';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        const logout = this.props.user ? <Nav.Link href="#/login"
            onClick={() => this.props.logout()}>Sign out</Nav.Link> : null;
        const userName = (this.props.user) ? <Nav.Link  >Hello {this.props.user.name}</Nav.Link> : null;

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand className="logo-nav" href="#/home"><img src={logoNav} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/maps">Maps list</Nav.Link>
                    </Nav>
                    <Nav>
                        {userName}
                        {logout}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )

    }
}

export default AppNavbar;