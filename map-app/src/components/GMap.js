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
                    place={place}
                    lat={place.lat}
                    lng={place.lng} 
                    showItem={this.props.showItem}
                    handleClose = {this.props.handleClose}
                >
                </Marker>)
            })
        }
    }

    render() {

        const markers = this.createMarkers(this.props.places)
        console.log("zoom",this.props.zoom)
        console.log("center",this.props.center)
        return (
            <div className="g-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8' }}
                    height={'100%'} width={'100%'}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onClick={this.onMapClick}
                >
                    {markers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GMap;
