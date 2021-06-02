import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

class GMap extends React.Component {
    
    onMapClick = (e) => {
    }

    //create markers for the list of places
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
