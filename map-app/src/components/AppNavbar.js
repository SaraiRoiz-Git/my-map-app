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
        const logout = this.props.user ? <Nav.Link href="#/home"
            onClick={() => this.props.logout()}>Sign out</Nav.Link> : null;
        const userName = (this.props.user) ? <Nav.Link href="#/login" >Hello {this.props.user.name}</Nav.Link> : null;

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand className="logo-nav"><img src={logoNav} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/home">Home</Nav.Link>
                        {/* <Nav.Link href="/
                        #/create-map">CreateMap</Nav.Link> */}
                        <Nav.Link href="#/maps">Maps list</Nav.Link>
                    </Nav>
                    <Nav>
                        {logout}
                        {userName}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )

    }
}

export default AppNavbar;