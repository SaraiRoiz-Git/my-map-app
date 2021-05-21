import React from "react";
import { Button, Container } from "react-bootstrap";
import countries from '../data/countries.json'
import GMap from "../components/GMap";
import { checkUserValidity } from "../utility";
import { withRouter } from "react-router";

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.url = window.location.href;
        this.id = this.props.match.params.id;
        this.latlng = countries.find(country => country.country_code === this.id).latlng;
      
    }
    componentDidMount() {
        checkUserValidity(this.props.user)
    }

    goTo = () => {

        window.location.href = `/#/edit-list/${this.id}`

    }

    createlist = () => {
        return this.props.list.map((place) => {
            if (place.code === this.id) {
                return <div className="list-obj">
                    <h4>{place.title}</h4>
                    <div>{place.freeText}</div>
                    <div>{place.category}</div>
                </div>
            }
            return
        })
    }
    render() {
        const list = this.createlist()
        return (
            <Container className="list-container">

                <div className="p-lists">
                    <Button type="button"
                        variant="info"
                        onClick={this.goTo}>
                        Add new Place

                        </Button>
                    {list}
                </div>
                <div className="google-map">
                    <GMap
                        lat={this.latlng[0]}
                        lng={this.latlng[1]}
                    ></GMap>
                </div>
            </Container>

        )
    }
}

export default withRouter(Lists);