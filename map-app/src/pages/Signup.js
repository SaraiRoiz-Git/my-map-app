import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            pwd: ''
        }
    }

    createNewUser = () => {
        const newUser = {
            email: this.state.email,
            name: this.state.name,
            pwd: this.state.pwd
        }
        this.props.addUser(newUser)
        window.location.href = "/#/home";
    }


    render() {

        return (
            <div className="sign-up">

                <Col lg="5" md="6" sm="12">
                    <Form className="sign-up-form">
                        <div className="head">
                            <div className="logo"><img src={logo} alt="Logo" /></div>
                            <div className="sub-title">Your journey start here</div>

                        </div>
                        <div className="start">Start to create your own trips by signup </div>
                        <Form.Group controlId="user name">

                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Add Name"
                                onChange={(e) => this.setState({ name: e.target.value })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                onChange={(e) => this.setState({ email: e.target.value })} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                onChange={(e) => this.setState({ pwd: e.target.value })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password confirm</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <div>Alredy have acount? click <Link to="/login">Here</Link> </div>
                           
                        </Form.Group>

                        <Col md={{ span: 6, offset:8 }}>
                            <Button variant="info" type="button" onClick={this.createNewUser}>
                                Signup
                                 </Button>
                        </Col>


                    </Form>
                </Col>

            </div>
        )

    }
}

export default Signup;