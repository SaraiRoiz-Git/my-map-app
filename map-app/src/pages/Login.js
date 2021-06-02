import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: ''
        }
    }

    updatePassword = (e) => {
        this.setState(
            {
                pwd: e.target.value
            }
        )
    }

    updateEmail = (e) => {
        this.setState(
            {
                email: e.target.value
            }
        )
    }

    validateLogin = () => {
        const validUser = this.props.userslist.find((user) => {
            return (user.email === this.state.email && user.pwd === this.state.pwd)
        });

        if (validUser) {
            this.props.login(validUser)
            window.location.href = "#/home"
        } else {
            this.setState({
                error: "*User or Password incorect"
            })

        }
    }
    render() {

        return (
            <Container fluid className="p-login" >
                <Row className="login-container">
                    <Col className="my-auto" lg={{ span: 4, offset: 4 }} sm="12">
                        <Form className="sign-form">
                            <div className="head">
                                <div className="logo"><img src={logo} alt="Logo" /></div>
                                <div className="sub-title">Your journey starts here</div>

                            </div>

                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.updateEmail} value={this.state.email} />
                            </Form.Group>

                            <Form.Group  >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={this.updatePassword} value={this.state.pwd} />
                                <div className="error">{this.state.error}</div>
                            </Form.Group>

                            <Form.Group >
                                Dont have acount yet? Sign
                                <Link to="/"> here</Link>
                            </Form.Group>

                            <Button variant="info" type="button" sm={{ offset: 8 }} onClick={this.validateLogin}>
                                Submit
                            </Button >
                        </Form>
                    </Col>


                </Row>
            </Container>

        )

    }
}

export default Login;