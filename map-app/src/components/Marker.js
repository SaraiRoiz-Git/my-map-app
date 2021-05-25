import React from "react";

class Marker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="marker">
                <div className="marker-info">{this.props.text}</div>
                <div className={`market-place ${this.props.category}`}></div>
            </div>
        )
    }
}
export default Marker