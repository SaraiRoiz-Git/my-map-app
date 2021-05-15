import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

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
            window.location.href = "/#/"
        } else {
            alert("user or password incorect")
        }
    }
    render() {

        return (
            <Container>
                <div className="p-login">
                    <Form className="mt-5">
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.updateEmail} value={this.state.email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                             </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.updatePassword} value={this.state.pwd} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={this.validateLogin}>
                            Submit
                    </Button>
                    </Form>
                    <Link to="/signup">Sign In</Link>
                </div>
            </Container>

        )

    }
}

export default Login;