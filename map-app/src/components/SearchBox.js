import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { checkUserValidity } from "../utility";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const result = this.props.result
        let countries = ''
        if (result) {
            countries = result.map((country) => {
                return (
                    <ListGroup.Item
                        action key={country.name}
                        onClick={() => { this.props.onResultSelected(country.name) }}
                    >{country.name}</ListGroup.Item>
                )
            })
        }

        return (

            <Form.Group>
                <Form.Control
                    type="text"
                    value={this.props.search}
                    placeholder={this.props.placeHolder}
                    onChange={(e) => { this.props.onSearchChanged(e.target.value) }} />
                <ListGroup>
                    {countries}
                </ListGroup>
            </Form.Group>
        )
    }
}
export default SearchBox