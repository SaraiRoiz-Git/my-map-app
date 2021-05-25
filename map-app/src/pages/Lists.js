import React from "react";
import { Button, Card, Col, Container, Row, Modal,Form ,ListGroup} from "react-bootstrap";
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
            isMiniModalOpen: false,
        }

    }
    componentDidMount() {
        checkUserValidity(this.props.user)
    }

    goTo = () => {
        window.location.href = `/#/edit-list/${this.id}`

    }

    createlist = () => {
        console.log("list",this.props.list)
        return this.props.list.map((place) => {
            if (place.code === this.id) {
                
                return (<ListGroup.Item id="place.id" onClick={()=>{this.showItem(place)}}>
                <Card.Title>
                    {place.title}
                </Card.Title>
                <Card.Subtitle>
                    <span className="mb-2 text-muted">{place.category} </span>
                </Card.Subtitle>
                <Card.Text>
                    {place.freeText}
                </Card.Text>
            </ListGroup.Item>)
            }
            return
        })
    }

    handleClose = (modalKind) => {
        this.setState({
           [modalKind]: false,
        })
    }

    addToMap = () => {
        const place = new Pin(
            this.id,
            this.state.category,
            this.state.title,
            this.state.importance,
            this.state.address,
            this.state.freeText,
            this.state.marker.lat,
            this.state.marker.lng,
            )
        this.props.addPlace("places", place)

        this.setState({ isModalOpen: false })
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

    showItem=(place)=>{
        if(place){
            console.log("show items",place.title)
            this.setState({
                isMiniModalOpen: true,
                place:place
            })
        }
        
        
    }

    chooseRate=(rate)=>{
        if(rate ==1){
            return "Mast visit"
        }
        if(rate == 2){
            return " Happy To visit "
        }
        return "Visit on time left"
    }

    checkValidity=()=>{
        if(this.state.place){
            console.log(this.state.place)
        return(
            <Modal show={this.state.isMiniModalOpen} onHide={()=>this.handleClose("isMiniModalOpen")}>
            <Modal.Header closeButton>
            <Modal.Title>{this.state.place.title}</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <p><b>Category: </b>{this.state.place.category}</p>
                <p><b>Rate: </b>{this.chooseRate(this.state.place.rate)}</p>
                <p><b>Address: </b>{this.state.place.address}</p>
                <p>{this.state.place.freeText}</p>
            </Modal.Body>
        </Modal>
        )
            
        }
    }
    render() {
        const list = this.createlist();
        const modalItem = this.checkValidity();
        return (
        
            <Container fluid className="p-maps screen">
                    {this.showItem()}
                <Row >
                    <Col className="list-bar" sm="12" md="3" lg="3">
                        <Card className="list ">
                        <div className="p-lists">
                        <Card.Header>
                            <Button type="button"
                                variant="info"
                                onClick={() => { this.setState({ isModalOpen: true }) }}
                                        >
                                Add new Place
                            </Button>   
                        </Card.Header>
                        <ListGroup variant="flush">
                                {list}
                            </ListGroup>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12" md="9" lg="9" className="gmap-container">           
                            <GMap className="map-container my-auto"
                                center={this.latlng}
                                places={this.props.list}
                            ></GMap>
                    </Col>
                </Row>

                <Modal show={this.state.isModalOpen} onHide={()=>this.handleClose("isModalOpen")}>
                    <Form >
                        <Modal.Header closeButton>
                            <Modal.Title>Search for a place
                         
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body >
                        <Autocomplete 
                                    updateAdress={this.updateAdress}
                                    id={this.id} />
                                    
                        <Form.Group className="add-to-list">
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
                                    <option value="market-place">Market Place</option>
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
                {modalItem}
            </Container>

        )
    }
}

export default withRouter(Lists);