import React from 'react';
import { Button, Form } from 'react-bootstrap';

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
        window.location.href = "/#/";
    }


    render() {

        return (
            <div>
                <Form>
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
                            We'll never share your email with anyone else.
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
                    <Button variant="primary" type="button" onClick={this.createNewUser}>
                        Signup
                    </Button>
                </Form>
            </div>
        )

    }
}

export default Signup;