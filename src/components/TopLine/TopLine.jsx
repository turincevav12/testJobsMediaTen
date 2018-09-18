import React, { Component } from 'react';
import Modal from "react-modal"

import { deleteTime } from "../../store/actionCreators"

import styles from "./TopLine.css"

export class TopLine extends Component {
    constructor(props){
        super (props)
    }    


    deleteTimes = (e) => {

        let id = e.target.id
        deleteTime(id)
    }

    render(){
        console.log(this.props.timeList)
        return(    
            <div className="topLines">
                
            </div>
        )
    }
}