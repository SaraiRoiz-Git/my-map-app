import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
let google = window.google;


class GMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    onMapClick = (e) => {
        // const geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ location: e }, (results, status) => {
        //     if (status === "OK") {
        //         if (results[0]) {
        //             // map.setZoom(11);
        //             // const marker = new google.maps.Marker({
        //             //   position: latlng,
        //             //   map: map,
        //             // });
        //             const res = results.find((country) => {
        //                 return country.types.includes("country")
        //             })


        //         } else {
        //             window.alert("No results found");
        //         }
        //     } else {
        //         window.alert("Geocoder failed due to: " + status);
        //     }

        //     this.props.setParameters(this.state.pin)
        //     });
    }

    createMarkers = (places) => {
        if (places) {
            return places.map((place) => {
                return (<Marker
                    lat={place.lat}
                    lng={place.lng}
                    text={place.title}
                    address={place.addres}
                    category={place.category}
                >
                </Marker>)
            })
        }
    }

    render() {
        const markers = this.createMarkers(this.props.places)
        return (
            <div className="g-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8' }}
                    height={'100%'} width={'100%'}
                    defaultCenter={this.props.center}
                    defaultZoom={7}
                    onClick={this.onMapClick}
                >
                    {markers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GMap;
