import React from "react";

class Marker extends React.Component {
    render() {
        return (

            <div className="marker">
                <div className="marker-info">{this.props.text}</div>
                <div className={`marker-place ${this.props.category} ${this.props.name}`}></div>
            </div>
        )
    }
}
export default Marker