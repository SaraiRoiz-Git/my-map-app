// import React from "react";
// import { Button, Col, Container, Form } from 'react-bootstrap';
// import moment from 'moment';

// class CreateMap extends React.Component {
//     constructor(props) {
//         super(props)

//     }

//     addMap() {

//     }

//     render() {
//         return (
//             <Container>
//                 <div className="title">{this.props.country} Title</div>
//                 <div className="data">Date of create:{moment().format("MMM Do YYYY")}</div>
//                 <Col lg="4" md="6" sm="12">
//                     <Form >
//                         <Form.Group>
//                             <Form.Control type="text" placeholder="Add your own sub title" />
//                         </Form.Group>
//                         <Form.Group controlId="exampleForm.ControlTextarea1">
//                             <Form.Control as="textarea" rows={3} placeholder="Add Free text" />

//                         </Form.Group>
//                         <Button type="button"
//                             variant="info"
//                             onClick={this.addMap()}>
//                             Create Map
//                 </Button>
//                     </Form>
//                 </Col>
//             </Container >

//         )

//     }
// }

// export default CreateMap;