import React from "react";
import { Card, Col, Row, Container, ListGroup } from "react-bootstrap";
import GoogleCharts from "../components/GoogleCharts";
import { checkUserValidity } from "../utility";

class Maps extends React.Component {
    constructor(props) {
        super(props);

    }

    goTo = (id) => {
        window.location.href = `#/list/${id}`
    }

    createlist = () => {
        return this.props.list.map((map) => {
            return (<ListGroup.Item onClick={() => { this.goTo(map.code) }}>
                <Card.Title>
                    {map.country}
                    <span>            </span>
                    <span className="date">
                        {map.date}
                    </span>
                </Card.Title>
                <Card.Subtitle>
                    <span className="mb-2 text-muted">{map.subTitle} </span>
                </Card.Subtitle>
                <Card.Text>
                    {map.freeText}
                </Card.Text>
            </ListGroup.Item>)
        })
    }

    makeListOfChosenCountries = (list) => {
        return (list.map((curr) => [curr.country]))
    }

    setParameters = () => { }
    render() {
        checkUserValidity(this.props.user)
        const list = this.createlist()
        const ChosenCountries = [["countries"]].concat(this.makeListOfChosenCountries(this.props.list));

        return (
            <Container fluid className="p-maps">
                <Row>
                    <Col className="list-bar" sm="12" md="3" lg="2">
                        <Card className="list">
                            <Card.Header className="title">My World Maps</Card.Header>
                            <ListGroup variant="flush">
                                {list}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col sm="12" md="9" lg="10" className="map-container">
                        <GoogleCharts className="my-auto"
                            setParameters={this.setParameters}
                            data={ChosenCountries}
                        />
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default Maps;