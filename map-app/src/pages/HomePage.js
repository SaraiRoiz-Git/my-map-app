import React from "react";
import { checkUserValidity } from "../utility";
import { Button, Col, Container, Form } from 'react-bootstrap';
import countries from '../data/countries.json'
import SearchBox from "../components/SearchBox";
import CountryData from "../components/CountryData";
import CreateMap from "./CreateMap";
import GoogleMap from "../components/GoogleMap";
import GMap from "../components/GMap";
import moment from 'moment';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.countries = countries;
        this.state = {
            input: '',
            country: '',
            filteredList: ''
        }
    }
    componentDidMount() {
        checkUserValidity(this.props.user)
    }

    componentDidUpdate() {
        checkUserValidity(this.props.user)
    }


    searchTextChanged = (filter) => {
        const filteredList = this.countries.filter((country) => {
            return country.name.toLowerCase().includes(filter.toLowerCase())
        })
        this.setState({
            filteredList: filteredList,
            input: filter
        })
    }

    chooseACountry = (country) => {
        this.setState({
            country: country,
            filteredList: '',
            input: country,

        })
    }

    createMap() {
        window.location.href = '/#/create-map'
    }

    addMap() {
    }

    setParameters = (obj) => {
        this.setState(obj)
        this.setState({
            input:obj.country
        })
        console.log(this.state)
        
    }

    render() {
        return (
            <Container className="screen">
                <GMap setParameters={this.setParameters}></GMap>
                <div className="p-create-map">
                    <div className="countries">
                        <Col lg="4" md="6" sm="12">
                            <SearchBox
                                search={this.state.input}
                                placeHolder={'Choose a country'}
                                result={this.state.filteredList}
                                onSearchChanged={this.searchTextChanged}
                                onResultSelected={this.chooseACountry}>
                            </SearchBox>
                        </Col>

                    </div>
                    <div>
                        <CountryData
                            country={this.state.country}>
                        </CountryData>
                    </div>
                    <div className="data">Date of create:{moment().format("MMM Do YYYY")}</div>
                    <Col lg="4" md="6" sm="12">
                        <Form >
                            <Form.Group>
                                <Form.Control type="text" placeholder="Add your own sub title" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Add Free text" />
                            </Form.Group>
                            <Button type="button"
                                variant="info"
                                onClick={this.addMap()}>
                                Create Map
                            </Button>
                        </Form>
                    </Col>
                </div>
                <div >
                </div>
            </Container >

        )

    }
}

export default HomePage;