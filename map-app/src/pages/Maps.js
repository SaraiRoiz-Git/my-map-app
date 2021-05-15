import React from "react";
import { checkUserValidity } from "../utility";

class Maps extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        checkUserValidity(this.props.user)
    }
    render() {

        return (
            <div className="p-maps">
                Maps
            </div>
        )

    }
}

export default Maps;