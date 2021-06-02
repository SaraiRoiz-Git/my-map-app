import React from "react";
import Chart from "react-google-charts";

class GoogleCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1
    }
  }

  onMapClick = (e) => {
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