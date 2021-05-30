import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pwdError: "",
            emailError: ""
        }
    }

    validatePassword = () => {
        if (!this.state.pwd.localeCompare(this.state.pwdConfirm) == 0) {
            this.setState({
                pwdError: "*Passwords don’t match."
            })
        } else {
            this.setState({
                pwdError: ""
            })
            return true
        }
        return false;
    }

    validateEmail = () => {
        let emailCheck = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

        if (!emailCheck.test(this.state.email)) {
            this.setState({
                pwdError: "*Email is not valid."
            })
        } else if (this.props.users.find(user => user.email.localeCompare(this.state.email) == 0)) {
            this.setState({
                pwdError: "*Email already exists."
            })
        } else {
            this.setState({
                pwdError: ""
            })
            return true;
        }
        return false;

    }


    createNewUser = () => {
        const emailValid = this.validateEmail();
        const passwordValid = this.validatePassword();

        if (emailValid && passwordValid) {

            this.props.addUser({
                email: this.state.email,
                name: this.state.name,
                pwd: this.state.pwd
            })
            window.location.href = "#/home";
        }

    }


    render() {
        return (

            <Container fluid  >
                <Row className="sign-container">
                    <Col lg={{ span: 4, offset: 7 }} md={{ span: 5, offset: 6 }} sm="12" className="my-auto">
                        <Form className="sign-form p-sign">
                            <div className="head">
                                <div className="logo"><img src={logo} alt="Logo" /></div>
                                <div className="sub-title">Your journey starts here</div>

                            </div>
                            <div className="start">Start to create your own trips by sign up </div>
                            <Form.Group>

                                <Form.Label name="name">Name<div className="error"></div></Form.Label>
                                <Form.Control type="text" placeholder="Add Name"
                                    onChange={(e) => this.setState({ name: e.target.value })} />
                                <div className="error">{this.state.emailError}</div>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label name="email">Email address<div className="error"></div></Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label name="password">Password<div className="error"></div></Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    onChange={(e) => this.setState({ pwd: e.target.value })} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label name="password-confirm">Password confirm<div className="error"></div></Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    onChange={(e) => this.setState({ pwdConfirm: e.target.value })} />
                                <div className="error">{this.state.pwdError}</div>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <div>Alredy have acount? click <Link to="/login">Here</Link> </div>

                            </Form.Group>

                            <Col>
                                <Button variant="info" type="button" onClick={this.createNewUser}>
                                    Signup
                                 </Button>
                            </Col>
                        </Form>
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Signup;