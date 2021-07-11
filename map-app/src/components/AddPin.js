import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Pin from "../data/Pin";
import Autocomplete from "./Autocomplete";


class AddPin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            importance: "1"
        }
    }

    changeImportance = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateAdress = (address, marker) => {
        this.setState({
            address: address,
            marker: marker
        })
    }

    addToMap = () => {
        if (!this.state.address) {
            this.setState({
                error: "*Please enter valid address"
            })
        }
        if (!this.state.title) {
            this.setState({
                errorTitle: "*Please enter title"
            })
        }
        if (!this.state.category) {
            this.setState({
                errorCategory: "*Please choose category"
            })
        }
        else {
            const place = new Pin(
                this.props.id,
                this.state.category,
                this.state.title,
                this.state.importance,
                this.state.address,
                this.state.freeText,
                this.state.marker.lat,
                this.state.marker.lng,
                this.props.user.email
            )
            this.props.changeZoom(this.state.marker.lat, this.state.marker.lng)
            this.props.addToList(place)
            this.props.handleClose("isModalOpen")
        }
    }
    render() {

        return (
            <Modal show={this.props.isModalOpen} onHide={() => this.props.handleClose("isModalOpen")}>
                <Form >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Search for a place
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Autocomplete
                            updateAdress={this.updateAdress}
                            id={this.props.id} >
                        </Autocomplete>

                        <Form.Group className="add-error">
                            <div className="error">{this.state.error}</div>
                        </Form.Group>
                        <Form.Group className="add-to-list">
                            <Form.Control type="text"
                                name="title"
                                placeholder="My title"
                                value={this.state.title}
                                onChange={this.changeImportance} />
                            <div className="error">{this.state.errorTitle}</div>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select"
                                name="category"
                                onChange={this.changeImportance}
                                value={this.state.category} custom>
                                <option value="selectCategory">Select Category</option>
                                <option value="hotels">Hotels</option>
                                <option value="market-place">Market Place</option>
                                <option value="restaurnts">Restaurnts</option>
                                <option value="sites">Sites</option>
                                <option value="shopping">Shopping</option>
                                <option value="transportation">Transportation</option>
                            </Form.Control>
                            <div className="error">{this.state.errorCategory}</div>
                        </Form.Group>
                        <div className="importance">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="importance" id="mostimportant"
                                    value="1" onClick={this.changeImportance} checked />
                                <label class="form-check-label" htmlFor="mostimportant">
                                    Must visit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="importance" id="midimportant"
                                    value="2" onClick={this.changeImportance} checked={this.state.importance === "2"} />
                                <label class="form-check-label" htmlFor="midimportant">
                                    Happy To visit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="importance" id="leastimportant"
                                    value="3" onClick={this.changeImportance} checked={this.state.importance === "3"} />
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
                                name="freeText"
                            />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="button"
                            variant="info"
                            onClick={this.addToMap}>
                            Add to my list
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>)
    }
}

export default AddPin;


