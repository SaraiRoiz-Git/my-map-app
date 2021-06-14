import React from "react";
import { Button, Card, Col, Container, Row, Modal, ListGroup } from "react-bootstrap";
import countries from '../data/countries.json'
import GMap from "../components/GMap";
import { checkUserValidity, getLatlngById } from "../utility";
import { withRouter } from "react-router";
import AddPin from "../components/AddPin";

class Lists extends React.Component {
    constructor(props) {
        super(props);


        this.url = window.location.href;
        this.id = this.props.match.params.id;
        this.list = this.props.list.filter(place => place.code === this.id);
        this.latlng = getLatlngById(this.id);
        this.state = {
            list: this.list,
            isModalOpen: false,
            isMiniModalOpen: false,
        }
    }

    addToList = (place) => {
        this.props.addPlace(place)
        this.setState({ list: this.state.list.concat(place) })
    }

    createlist = () => {
        let sortedList = this.state.list.sort((a, b) => a.category > b.category && 1 || -1)
        console.log("sortedList", sortedList)
        return sortedList.map((place) => {
            if (place.code === this.id) {

                return (<ListGroup.Item id="place.id" className={`list-${place.category}`} onClick={() => { this.showItem(place) }}
                    onMouseOver={() => { this.props.placeMark(place, "pin-marker") }}
                    onMouseOut={() => { this.props.placeMark(place, "pin") }}
                >
                    <Card.Title>
                        {place.title}
                    </Card.Title>
                    <Card.Subtitle>
                        <span className="mb-2 text-muted">{place.category} </span>
                    </Card.Subtitle>
                </ListGroup.Item>)
            }
            return null
        })
    }

    handleClose = (modalKind) => {
        this.setState({
            [modalKind]: false,
        })
    }

    showItem = (place) => {
        if (place) {
            this.setState({
                isMiniModalOpen: true,
                place: place
            })
        }
    }

    chooseRate = (rate) => {
        if (rate === 1) {
            return "Must visit"
        }
        if (rate === 2) {
            return " Happy To visit "
        }
        return "Visit on time left"
    }

    checkValidity = () => {
        if (this.state.place) {
            return (
                <Modal show={this.state.isMiniModalOpen} onHide={() => this.handleClose("isMiniModalOpen")}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.place.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p><b>Category: </b>{this.state.place.category}</p>
                        <p><b>Rate: </b>{this.chooseRate(this.state.place.rate)}</p>
                        <p><b>Address: </b>{this.state.place.address}</p>
                        <p>{this.state.place.freeText}</p>
                        <Button className="remove-item" type="button"
                            variant="info"
                            onClick={() => this.props.removeItem(this.state.place)}
                        >
                            Add new Place
                        </Button>
                    </Modal.Body>
                </Modal>
            )

        }
    }
    render() {

        checkUserValidity(this.props.user)
        const list = this.createlist();
        const modalItem = this.checkValidity();

        const title = countries.find(country => {
            return (country['country_code'] === this.id)
        }).name
        return (
            <Container fluid className="p-maps screen">
                {this.showItem()}
                <Row >
                    <Col className="list-bar" sm="12" md="3" lg="3">
                        <Card className="list ">
                            <div className="p-lists">
                                <Card.Header>
                                    <div className="title">{title}</div>
                                </Card.Header>
                                <ListGroup variant="flush">
                                    <Button className="add-place" type="button"
                                        variant="info"
                                        onClick={() => { this.setState({ isModalOpen: true }) }}
                                    >
                                        Add new Place
                                     </Button>
                                    {list}
                                </ListGroup>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12" md="9" lg="9" className="gmap-container">
                        <GMap className="map-container my-auto"
                            center={this.latlng}
                            places={this.state.list}
                            showItem={this.showItem}
                            handleClose={this.handleClose}
                        ></GMap>
                    </Col>
                </Row>
                <AddPin
                    id={this.id}
                    isModalOpen={this.state.isModalOpen}
                    handleClose={this.handleClose}

                    user={this.props.user}
                    addToList={this.addToList}
                />
                {modalItem}
            </Container>

        )
    }
}

export default withRouter(Lists);