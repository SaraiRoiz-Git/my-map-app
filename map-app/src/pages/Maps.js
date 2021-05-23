import React from "react";
import { Card, ListGroup } from "react-bootstrap";
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

    // createlist = () => {
    //     return this.props.list.map((map) => {
    //         return <div onClick={() => { this.goTo(map.code) }}>
    //             <h4>{map.country}</h4>
    //             <div>{map.date}</div>
    //             <div>{map.subTitle}</div>
    //             <div>{map.free}</div>
    //         </div>
    //     })
    // }

    createlist = () => {
        return this.props.list.map((map) => {
            return (<ListGroup.Item onClick={() => { this.goTo(map.code) }}>
                <Card.Title>
                    {map.country}   
                    <span>            </span>
                        <span className="date">
                        {map.date}
                    </span>
                </Card.Title>
                <Card.Subtitle>
                    <span className="mb-2 text-muted">{map.subTitle} </span>
                </Card.Subtitle>
                <Card.Text>
                    {map.freeText}
                </Card.Text>
            </ListGroup.Item>)
        })
    }

    makeListOfChosenCountries = (list) => {
        return (list.map((curr) => [curr.country]))
    }

    setParameters = () => { }
    render() {
        const list = this.createlist()
        const ChosenCountries = this.makeListOfChosenCountries(this.props.list)

        return (
            <div className="list-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>My World Maps</Card.Header>
                    <ListGroup variant="flush">
                        {list}
                    </ListGroup>
                </Card>
                <div className="map-container">
                <GoogleCharts className="chart-map"
                    setParameters={this.setParameters}
                    data={ChosenCountries}
                    places={list}
                />
                </div>
                
            </div>
        )

    }
}

export default Maps;