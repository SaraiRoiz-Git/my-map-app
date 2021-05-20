import React from "react";
import GoogleMapReact from 'google-map-react';
let google = window.google;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class GMap extends React.Component {
    constructor(props) {
        const geocoder = new google.maps.Geocoder();
        super(props);
        this.state = {
            center: {
                lat: 41.95,
                lng: -37.33
            },
            zoom: 1
        }
    }

    onMapClick = (e) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: e }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    // map.setZoom(11);
                    // const marker = new google.maps.Marker({
                    //   position: latlng,
                    //   map: map,
                    // });
                    const res = results.find((country) => {
                        return country.types.includes("country")
                    })


                } else {
                    window.alert("No results found");
                }
            } else {
                window.alert("Geocoder failed due to: " + status);
            }

            this.props.setParameters(this.state.pin)
        });
    }

    render() {

        return (
            // Important! Always set the container height explicitly
            <div className="g-map">
                <GoogleMapReact
                    yesIWantToUseGoogleMapApiInternals
                    bootstrapURLKeys={{ key: 'AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8' }}
                    height={'100%'} width={'100%'}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                // onClick={this.onMapClick}
                >
                    <AnyReactComponent
                        lat={32.07549}
                        lng={34.775485}
                        text={'Zara'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GMap;
