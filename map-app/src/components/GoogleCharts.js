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
      // console.log(selectedId)

    }
    catch (e) {
      return;
    }
    if (selectedId.length) {
      // debugger;

      //  console.log("Selected Country", this.props.data[selectedId[0].row + 1]);
      if (this.props.data[selectedId[0].row + 1]) {
        this.props.setParameters(this.props.data[selectedId[0].row + 1])
      }
    } else {
      console.log("No Country to show ");
    }
  }

  render() {

    return (
      // Important! Always set the container height explicitly
      <div className="g-map">

        <Chart className="mb-1"
          chartType="GeoChart"
          mapsApiKey="AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8"
          height={'100%'} width={'100%'}
          regionClick={this.onMapClick}
          options={{

            backgroundColor: '1b4965',
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