import React from "react";

class GMap extends React.Component {
    constructor(props) {
        super(props);
    }

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

    render() {

        return (
            <div id="map"></div>
        )
    }
}

export default GMap;