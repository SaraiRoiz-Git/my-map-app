import React from "react";
import GoogleCharts from "../components/GoogleCharts";
import { checkUserValidity } from "../utility";

class Maps extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        checkUserValidity(this.props.user)

    }

    goTo = (id) => {
        window.location.href = `/#/list/${id}`

    }

    createlist = () => {

        return this.props.list.map((map) => {
            return <div onClick={() => { this.goTo(map.code) }}>
                <h4>{map.country}</h4>
                <div>{map.date}</div>
                <div>{map.subTitle}</div>
                <div>{map.free}</div>
            </div>
        })
    }

    makeListOfChosenCountries = (list) => {
        return (list.map((curr) => {
            return [curr.country]
        }))
    }

    setParameters = () => { }
    render() {
        const list = this.createlist()
        const ChosenCountries = this.makeListOfChosenCountries(this.props.list)


        return (
            <div className="list-container">

                <div>
                    {list}
                </div>
                <GoogleCharts
                    setParameters={this.setParameters}
                    data={ChosenCountries}
                    places = {list}
                >
                </GoogleCharts>
            </div>
        )

    }
}

export default Maps;