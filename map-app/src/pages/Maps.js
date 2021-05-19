import React from "react";
import { checkUserValidity } from "../utility";

class Maps extends React.Component {
    constructor(props) {
        super(props);

        
    }
    componentDidMount() {
        checkUserValidity(this.props.user)

    }

    goTo =(id)=>{
        window.location.href = `/#/list/${id}` 

    }

    createlist = () => {
       
        return this.props.list.map((map) => {
            return <div onClick={()=>{this.goTo(map.code)}}>
                <h4>{map.country}</h4>
                <div>{map.date}</div>
                <div>{map.subTitle}</div>
                <div>{map.freeText}</div>
            </div>
        })
    }
    render() {
        const list = this.createlist()
        return (
            <div className="p-maps">
                {list}
            </div>
        )

    }
}

export default Maps;