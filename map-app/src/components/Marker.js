import React from "react";

class Marker extends React.Component {
    render() {
        return (

            <div className="marker"  onClick={()=>this.props.showItem(this.props.place)} >
                <div className="marker-info">{this.props.place.title}</div>
                <div className={`marker-place ${this.props.place.category} ${this.props.place.name}`}></div>
            </div>
        )
    }
}
export default Marker