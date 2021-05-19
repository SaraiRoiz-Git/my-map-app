import React from "react";
import { Button } from "react-bootstrap";
import { checkUserValidity } from "../utility";
class Lists extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        checkUserValidity(this.props.user)

    }

    goTo = (id) => {
        window.location.href = `/#/edit-list/${id}`

    }

    createlist = () => {
  
        return this.props.list.map((place) => {
            return <div className="list-obj">
                <h4>{place.title}</h4>
                <div>{place.freeText}</div>
                <div>{place.category}</div>
            </div>
        })
    }
    render() {
        const list = this.createlist()
        return (
            <div className="p-lists">
                 <Button type="button"
                            variant="info"
                            onClick={() => { this.goTo(this.props.list.code) }}>
                            Add new Place
                         
                        </Button>
                {list}
            </div>
        )
    }
}

export default Lists;