import React, { Component } from 'react';
import Modal from "react-modal"

import styles from "./TopLine.css"

export class TopLine extends Component {
    constructor(props){
        super (props)
        this.state = {
            data: []    
        }
    }

    pushTopLine = () => {
        this.state.data.push(this.props.data)
    }
    delete = (e) => {
        e.target.remove()
    }
    render (){
        if(this.props.data != this.state.data[this.state.data.length - 1]){
            this.pushTopLine()
        }
        return(
            <div className="TopLine">
                {
                    this.state.data.map(e => <div className="timeBlockTask" onClick={(e) => this.delete(e)}>
                        {e}
                    </div>)
                }
            </div>
        )
    }
}