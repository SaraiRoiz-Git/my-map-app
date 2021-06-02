import React from "react";
import { Form, ListGroup } from "react-bootstrap";

class SearchBox extends React.Component {

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
                <ListGroup className="search-items">
                    {countries}
                </ListGroup>
            </Form.Group>
        )
    }
}
export default SearchBox