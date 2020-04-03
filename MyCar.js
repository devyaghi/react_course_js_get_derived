import React from "react";

export default class MyCar extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            color:"white"
        }
    }

    static getDerivedStateFromProps(props,state){
        return {color:props.color_value}
    }

    render() {
        return (<div>Car Color is {this.state.color}</div>)

    }


}