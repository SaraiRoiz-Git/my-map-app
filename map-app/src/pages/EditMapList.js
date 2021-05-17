

import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";


class EditMapList extends React.Component {
    constructor(props) {
        super(props);
    }

    addToMap() {

    }

    render() {

        return (
        <Container>
             <div className="p-edit-list">
                <Col lg="4" md="6" sm="12">
                    <Form >
                        <Form.Group>
                            <Form.Control type="text" placeholder="Search for a place" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="My title" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom>
                            <option>Select Category</option>
                            <option>hotels</option>
                            <option>Market Place</option>
                            <option>Restaurnts</option>
                            <option>Sites</option>
                            <option>Shopping</option>
                            <output>Transportation</output>
                            <option>**** Add your on category***</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="importance">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                   Mast visit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Happy To visit
                                </label>
                            </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                     Visit on time left
                                    </label>
                                </div>
                        </div>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Add Free text" />
                        </Form.Group>
                        <Form>
                        <Form.File 
                            id="custom-file"
                            label="add file on the place"
                            custom
                        />
                        </Form>
                        <Button type="button"
                            variant="info"
                            onClick={this.addToMap()}>
                            Add to my list
                         
                        </Button>
                    </Form>
                </Col>
            </div>
        </Container>
           
        )
    }
}

export default EditMapList;