import React, { Component } from 'react';
import Modal from "react-modal"

import styles from "./ModalForm.css"

export class ModalForm extends Component {
    constructor(props){
        super (props)
        this.state = {
            time: [],
            enterTime: []
        }
    }

    shouTimeDop = () => {
        var enterTimes = []
        var timeHours = this.props.time[0]
        var timeMinuts = this.props.time[1]

        timeMinuts = parseFloat(timeMinuts)

        for (var i = 0; i != 6; i++){
            enterTimes.push([
                timeHours, timeMinuts
            ])
            timeMinuts = timeMinuts + 5
        }

        this.state = ({
            enterTime: enterTimes
        })
    }

    returnTime = (e) => {
        this.props.returnTime(e.target.innerText)
        this.props.onRequestClose
    }
    
    render (){
        this.shouTimeDop()
        return(
            <Modal
                isOpen={this.props.isOpen}
                className = "Modal"
            >
                <div>
                    {
                        this.state.enterTime.map(e => <div className="enterTimeDop" onClick={(e) => this.returnTime(e)}>
                            {e[0]+":"+e[1]}
                        </div>)
                    }
                </div>
            </Modal>
        )
    }
}