import React from "react";


class AddPlace extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Modal show={this.props.isModalOpen} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>

  

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                Name:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                    type="text" 
                    placeholder="Recipe Name"
                     value={this.state.recipeName}
                     onChange={(event)=> {this.setState({recipeName: event.target.value})}}
                      />
                </Col>

                <Form.Label column sm={2}>
                Description:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Recipe Description"
                    value={this.state.recipeDesc}
                    onChange={(event)=> {this.setState({recipeDesc: event.target.value})}}
                  />
                </Col>
                <Col sm={10}>
                    <Form.Label column sm={2}>
                    Image:
                    </Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Recipe image"  
                    value={this.state.recipeImg}
                    onChange={(event)=> {this.setState({recipeImg: event.target.value})}}
                    />
                </Col>
                
                
            </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={this.saveModalInfo}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>

        )

    }
}

export default AddPlace;