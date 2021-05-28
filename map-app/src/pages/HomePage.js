import React from "react";
import { checkUserValidity } from "../utility";
import { Button, Col, Container, Form, Row, Card } from 'react-bootstrap';
import countries from '../data/countries.json'
import SearchBox from "../components/SearchBox";
import moment from 'moment';
import CountryMap from "../data/CountryMap";
import GoogleCharts from "../components/GoogleCharts";
import allCountries from '../data/countriesForChart';

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
    // filter countries by input
    searchTextChanged = (filter) => {
        const filteredList = this.countries.filter((country) => {
            return country.name.toLowerCase().includes(filter.toLowerCase())
        })

        this.setState({
            filteredList: filteredList,
            input: filter
        })
    }
    // add to state the chosen country
    chooseACountry = (country) => {
        this.setState({
            country: country,
            filteredList: '',
            input: country,
            error: ""
        })
    }

    addMap = () => {
        const data = countries.find((curr) => curr.name === this.state.input)
        if (this.props.maps.find((curr) => curr.country === this.state.input)) {
            this.setState({
                error: `*you alredy have map of ${this.state.input} in your maps`
            })
        }
        else if (data) {
            const map = new CountryMap(
                this.state.country,
                data.country_code,
                data.latlng[0],
                data.latlng[1],
                data.capital,
                moment().format("MMM Do YYYY"),
                this.state.subTitle,
                this.state.freeText)
            this.props.addMap("maps", map);
            window.location.href = '#/maps'

        } else {
            this.setState({
                error: "*please enter valid country"
            })
        }
    }

    setParameters = (obj) => {
        this.setState({
            country: obj[0],
            input: obj[0],
            error: ""
        })
    }

    updateSubTitle = (e) => {
        this.setState({
            subTitle: e.target.value
        })
    }

    updateFreeText = (e) => {
        this.setState({
            freeText: e.target.value
        })
    }

    render() {
        checkUserValidity(this.props.user)
        return (
            <Container fluid className="screen p-maps">
                <Row cla>
                    <Col className="list-bar" sm="12" md="4" lg="3">
                        <Card className="list ">
                            <Card.Header >Start to explorer:</Card.Header>
                            <Card.Text className="search">
                                <SearchBox
                                    search={this.state.input}
                                    placeHolder={'Choose a country'}
                                    result={this.state.filteredList}
                                    onSearchChanged={this.searchTextChanged}
                                    onResultSelected={this.chooseACountry}>
                                </SearchBox>
                                <div className="error">{this.state.error}</div>

                                <div>
                                    <h4>{this.state.country}</h4>
                                </div>
                                <div className="data">Date of create:{moment().format("MMM Do YYYY")}</div>
                                <Form >
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add your own sub title"
                                            onChange={this.updateSubTitle}
                                            value={this.state.subTitle} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Add Free text"
                                            onChange={this.updateFreeText}
                                            value={this.state.freeText} />
                                    </Form.Group>
                                    <Button type="button"
                                        variant="info"
                                        onClick={this.addMap}
                                    >
                                        Create a Map
                            </Button>
                                </Form>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col sm="12" md="8" lg="9" className="map-container">
                        <GoogleCharts
                            setParameters={this.setParameters}
                            data={allCountries}
                        />
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default HomePage;