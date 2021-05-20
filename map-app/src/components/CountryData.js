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
      
    }
    
    componentDidUpdate() {
        this.spreadData()
    }


    spreadData() {
        const country = this.props.country;
        fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
            .then(stream => stream.json())
            .then(data => {
                console.log(data)
                if (data) {
                    console.log(data)
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
                
                }
            })
    }

    render() {

        return (
            <div className="map-data">

                <h4>{this.props.country}</h4>
                <div>Capital:{this.state.data.capital}</div>
                <div>Region:{this.state.data.region}</div>
                <div>Population:{this.state.data.population}</div>
                <div>Demonym:{this.state.data.demonym}</div>
                {/* <div>{this.state.data.borders}</div>
                <div>{this.state.data.languages}</div>
                <div>{this.state.data.currencies}</div> */}
            </div>
        )

    }
}

export default CountryData;