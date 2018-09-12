import React, { Component } from 'react';
import Modal from "react-modal"

import { timeList, ADD_TIME, replaceTime, addTime } from "../../index"

import styles from "./TopLine.css"

export class TopLine extends Component {
    constructor(props){
        super (props)
        this.state = {
            times: []
        }
    }

    render(){
        return(    
            <div className="topLines">
                
            </div>
        )
    }
}