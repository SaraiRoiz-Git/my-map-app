

import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import GMap from "../components/GMap";
import { getLatlngById } from "../utility";
import Autocomplete from "../components/Autocomplete";
import Pin from "../data/Pin";
class EditMapList extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.latlng = getLatlngById(this.id);
        this.state = {
            importance: "1"
        }
    }

    addToMap=()=> {
        const place = new Pin(
            this.id,
            this.state.category,
            this.state.title,
            this.state.importance,
            this.state.address,
            this.state.freeText,
            this.state.marker)
        this.props.addPlace("places", place)
        
        window.location.href = `/#/list/${this.id}`
    }

    changeImportance = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAdress = (adress, marker) => {
        this.setState({
            adress: adress,
            marker: marker
        })
    }

    render() {
        console.log(this.state)
        return (

            <Container className="edit">

                <div className="p-edit-list">
                    <Col>
                        <Autocomplete
                            updateAdress={this.updateAdress}
                            id={this.id} />
                        <Form >

                            <Form.Group>
                                <Form.Control type="text"
                                    name="title"
                                    placeholder="My title"
                                    value={this.state.title}
                                    onChange={this.changeImportance} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Control as="select"
                                    name="category"
                                    onChange={this.changeImportance}
                                    value={this.state.category} custom>
                                    <option value="selectCategory">Select Category</option>
                                    <option value="hotels">hotels</option>
                                    <option value="market place">Market Place</option>
                                    <option value="restaurnts">Restaurnts</option>
                                    <option value="sites">Sites</option>
                                    <option value="shopping">Shopping</option>
                                    <option value="transportation">Transportation</option>
                                    <option value="">**** Add your on category***</option>
                                </Form.Control>
                            </Form.Group>
                            <div className="importance">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="importance" id="mostimportant" value="1" onClick={this.changeImportance} checked={this.state.importance == "1"} />
                                    <label class="form-check-label" htmlFor="mostimportant">
                                        Mast visit
                                </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="importance" id="midimportant" value="2" onClick={this.changeImportance} checked={this.state.importance == "2"} />
                                    <label class="form-check-label" htmlFor="midimportant">
                                        Happy To visit
                                </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="importance" id="leastimportant" value="3" onClick={this.changeImportance} checked={this.state.importance == "3"} />
                                    <label class="form-check-label" htmlFor="leastimportant">
                                        Visit on time left
                                    </label>
                                </div>
                            </div>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea"
                                    rows={3}
                                    placeholder="Add Free text"
                                    onChange={this.changeImportance}
                                    name="freeText" />
                            </Form.Group>
                            <Button type="button"
                                variant="info"
                                onClick={this.addToMap}>
                                Add to my list
                        </Button>
                        </Form>
                    </Col>
                </div>
                <div className="g-map">
                    <GMap
                        center={this.latlng}
                    ></GMap>
                </div>
            </Container>

        )
    }
}

export default withRouter(EditMapList);