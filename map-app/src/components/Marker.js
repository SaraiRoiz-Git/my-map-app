import React from "react";

class Marker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className={this.props.category} className="marker">
                <div className="marker-info">{this.props.text}</div>
                <div className="marker-info">{this.props.addess}</div>  
                <div className="marker-color">
                </div>

            </div>
        )
    }
}
export default Marker