import React from "react";
import { Button, Card, Col, Container, Row, Modal,Form } from "react-bootstrap";
import Autocomplete from "../components/Autocomplete";
import Pin from "../data/Pin";
import GMap from "../components/GMap";
import { checkUserValidity, getLatlngById } from "../utility";
import { withRouter } from "react-router";

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.url = window.location.href;
        this.id = this.props.match.params.id;
        this.latlng = getLatlngById(this.id);
        this.state = {
            isModalOpen: false,
        }

    }
    componentDidMount() {
        checkUserValidity(this.props.user)
    }

    goTo = () => {
        window.location.href = `/#/edit-list/${this.id}`

    }

    createlist = () => {
        return this.props.list.map((place) => {
            if (place.code === this.id) {
                return <div className="list-obj">
                    <h4>{place.title}</h4>
                    <div>{place.freeText}</div>
                    <div>{place.category}</div>
                </div>
            }
            return
        })
    }

    handleClose = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const list = this.createlist()
        return (
            <Container fluid className="p-maps screen">
                <Row>
                    <Col className="list-bar" sm="12" md="2" lg="2">
                        <Card className="list ">
                            <div className="p-lists">
                                <Button type="button"
                                    variant="info"
                                    onClick={() => { this.setState({ isModalOpen: true }) }}>
                                    Add new Place

                        </Button>
                                {list}
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12" md="10" lg="10">
                        <div className="google-map" >
                            <GMap
                                center={this.latlng}
                                places={this.props.list}
                            ></GMap>
                        </div>
                    </Col>
                </Row>

                <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
                    <Form >
                        <Modal.Header closeButton>
                            <Modal.Title>Search for a place
                         
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <Autocomplete 
                                    updateAdress={this.updateAdress}
                                    id={this.id} />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button type="button"
                                variant="info"
                                onClick={this.addToMap}>
                                Add to my list
                        </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

            </Container>

        )
    }
}

export default withRouter(Lists);