import React from "react";
import Chart from "react-google-charts";

let google = window.google;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class GoogleCharts extends React.Component {
  constructor(props) {
    // const geocoder = new google.maps.Geocoder();
    super(props);
    this.state = {

      zoom: 1
    }
  }

  onMapClick = (e) => {
    // Code from here https://stackoverflow.com/questions/62135668/how-to-call-a-click-event-on-react-geo-chart
    let selectedId;
    try {
      selectedId = e.chartWrapper.getChart().getSelection();


    }
    catch (e) {
      return;
    }
    if (selectedId.length) {
      if (this.props.data[selectedId[0].row + 1]) {
        this.props.setParameters(this.props.data[selectedId[0].row + 1])
      }
    } else {
      console.log("No Country to show ");
    }
  }

  render() {

    return (
      <div className="g-map">

        <Chart className="mb-2"
          chartType="GeoChart"
          mapsApiKey="AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8"
           width={'100%'}
          regionClick={this.onMapClick}
          options={{
            backgroundColor: '127597',
            defaultColor: "bee9e8",
          }}

          data={this.props.data}

          chartEvents={[
            { eventName: 'select', callback: this.onMapClick }
          ]}
        />

      </div>
    );
  }
}

export default GoogleCharts;