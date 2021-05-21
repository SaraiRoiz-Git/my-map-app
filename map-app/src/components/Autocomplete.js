import React from "react";


class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Container>
                <ReactGoogleAutocomplete
                    apiKey={'AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8'}
                    onPlaceSelected={(place) => {
                        this.setState({
                            "adress": place.formatted_address
                        })
                        Geocode.setApiKey('AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8');
                        Geocode.fromAddress(place.formatted_address).then(
                            (response) => {
                                console.log(response.results[0].geometry.location)
                                const { lat, lng } = response.results[0].geometry.location;
                                console.log(lat, lng);

                                this.setState({
                                    marker: { lat, lng }
                                })
                            }
                        );

                    }}
                    options={{
                        types: ["establishment"],
                        componentRestrictions: { country: this.id }
                    }
                    }
                />
            </Container>

        )

    }
}

export default Autocomplete;