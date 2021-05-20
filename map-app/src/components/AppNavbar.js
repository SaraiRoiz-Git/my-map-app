import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {

        const login = (!this.props.user) ? <Nav.Link href="/#/login" >Sign in</Nav.Link> : null;
        const logout = this.props.user ? <Nav.Link href="/#/"
            onClick={() => this.props.logout()}>Sign out</Nav.Link> : null;
        const userName = (this.props.user) ? <Nav.Link href="/#/login" >Hello {this.props.user.name}</Nav.Link> : null;

        return (
            <Navbar  className="mb-2" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">My world</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>
                        {/* <Nav.Link href="/#/create-map">CreateMap</Nav.Link> */}
                        <Nav.Link href="/#/maps">Maps list</Nav.Link>
                    </Nav>
                    <Nav>
                        {login}
                        {logout}
                        {userName}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )

    }
}

export default AppNavbar;