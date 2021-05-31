import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
    }

    //component that use google map search restrict to the chosen country
    render() {

        return (
            <div className="pac-container">
                <ReactGoogleAutocomplete
                    apiKey={'AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8'}
                    onPlaceSelected={(place) => {
                        Geocode.setApiKey('AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8');
                        Geocode.fromAddress(place.formatted_address).then(
                            (response) => {
                                const { lat, lng } = (response ? response.results[0].geometry.location : "invalid");
                                this.setState({
                                    adress: place.formatted_address,
                                    marker: { lat, lng }
                                })
                                this.props.updateAdress(place.formatted_address, { lat, lng })
                            }
                        );
                    }}
                    options={{
                        types: [["establishment"], ["address"], ["(region)"]],
                        componentRestrictions: { country: this.props.id }
                    }}
                />
            </div>

        )

    }
}

export default Autocomplete;