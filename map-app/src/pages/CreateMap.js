import React from "react";
import { checkUserValidity } from "../utility";
import { Col, Container, Form } from 'react-bootstrap';
import countries from '../data/countries.json'
import SearchBox from "../components/SearchBox";
import CountryData from "../components/CountryData";

class CreateMap extends React.Component {
    constructor(props) {
        super(props);
        this.countries = countries;
        this.state = {
            input: '',
            chosenCountry: '',
            filteredList: ''
        }
    }
    componentDidMount() {
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
            chosenCountry: country,
            filteredList: '',
            input: country,

        })
    }

    render() {
        return (
            <Container>
                <div className="p-create-map">
                    <div>Map will be here</div>
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
                        country info will be here
                        <CountryData
                            country={this.state.chosenCountry}>
                        </CountryData>
                    </div>
                </div>
            </Container >

        )

    }
}

export default CreateMap;