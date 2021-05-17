import React from "react";
import Country from "../data/Country";
import { checkUserValidity } from "../utility";

class CountryData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        this.spreadData()
    }
    
    componentDidUpdate() {
        this.spreadData()
    }


    spreadData() {
        const country = this.props.country;
        console.log(country);
        fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            .then(stream => stream.json())
            .then(data => {
                console.log(data)
                if (data) {

                    const countryData = new Country(
                        data[0].capital,
                        data[0].region,
                        data[0].population,
                        data[0].demonym,
                        data[0].borders,
                        data[0].currencies,
                        data[0].languages)

                    this.setState({
                        data: countryData
                    })
                    console.log(countryData)
                }
            })
    }

    render() {

        return (
            <div className="p-edit-list">

                <div>{this.props.country}</div>
                <div>{this.state.data.capital}</div>
                <div>{this.state.data.region}</div>
                <div>{this.state.data.population}</div>
                <div>{this.state.data.demonym}</div>
                {/* <div>{this.state.data.borders}</div>
                <div>{this.state.data.languages}</div>
                <div>{this.state.data.currencies}</div> */}
            </div>
        )

    }
}

export default CountryData;