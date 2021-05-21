

import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import GMap from "../components/GMap";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { getLatlngById } from "../utility";

class EditMapList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            importance:"2"
        }
        this.id = this.props.match.params.id;
        this.latlng =  getLatlngById(this.id);
    }

    addToMap() {

    }

    changeImportance=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
        <Container className="edit">
          
             <div className="p-edit-list">
                <Col>
                <ReactGoogleAutocomplete
                        apiKey={'AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8'}
                        onPlaceSelected={(place) => {
                        console.log(place);}}
                        options={{types:["establishment"]}}
                        />
                    <Form >
                   
                        <Form.Group>
                            <Form.Control   type="text" 
                                            name="title" 
                                            placeholder="My title" 
                                            value={this.state.title} 
                                            onChange={this.changeImportance}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control   as="select" 
                                            name="category" 
                                            onChange={this.changeImportance} 
                                            value={this.state.category}  custom>
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
                                <input class="form-check-input" type="radio" name="importance" id="mostimportant" value="1" onClick={this.changeImportance} checked = {this.state.importance == "1"}/>
                                <label class="form-check-label" for="mostimportant">
                                   Mast visit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="importance" id="midimportant" value="2" onClick={this.changeImportance} checked = {this.state.importance == "2"}/>
                                <label class="form-check-label" for="midimportant">
                                    Happy To visit
                                </label>
                            </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="importance" id="leastimportant" value="3" onClick={this.changeImportance} checked = {this.state.importance == "3"}/>
                                    <label class="form-check-label" for="leastimportant">
                                     Visit on time left
                                    </label>
                                </div>
                        </div>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Add Free text" />
                        </Form.Group>
                        <Button type="button"
                            variant="info" 
                            onClick={this.addToMap()}>
                            Add to my list
                         
                        </Button>
                    </Form>
                </Col>                
            </div>
             <div className="g-map">
                <GMap
                    lat={this.latlng[0]}
                    lng={this.latlng[1]}
                ></GMap>
            </div>
        </Container>
           
        )
    }
}

export default withRouter(EditMapList);