import React from "react";
import { checkUserValidity } from "../utility";
import { Button, Col, Container, Form } from 'react-bootstrap';
import countries from '../data/countries.json'
import SearchBox from "../components/SearchBox";
import moment from 'moment';
import CountryMap from "../data/CountryMap";
import GoogleCharts from "../components/GoogleCharts";
import allCountries from '../data/countriesForChart'

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

    addMap = () => {
        const data = countries.find((curr) => curr.name === this.state.country)
        const map = new CountryMap(
            this.state.country,
            data.latlng[0],
            data.latlng[1],
            data.capital,
            moment().format("MMM Do YYYY"),
            this.state.subTitle,
            this.state.freeText)
        this.props.addMap(map);
        window.location.href = '/#/maps'
    }

    setParameters = (obj) => {
        // console.log("in setParams", obj)
        this.setState({
            country: obj[0],
            input: obj[0]
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
        return (
            <Container className="screen">
                <div>
                    <GoogleCharts
                        setParameters={this.setParameters}
                        data={allCountries}
                    >
                    </GoogleCharts>
                </div>
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
                        <h4>{this.state.country}</h4>
                        {/* <CountryData
                            country={this.state.country}>
                        </CountryData> */}
                    </div>
                    <div className="data">Date of create:{moment().format("MMM Do YYYY")}</div>
                    <Col lg="4" md="6" sm="12">
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