import React, { Component } from 'react';
import Modal from "react-modal"

import { Main } from "../Main/Main"
import { TopLine } from "../TopLine/TopLine"
import { ModalForm } from "../ModalForm/ModalForm"

export class App extends Component {
    constructor(props){
        super (props)
        this.state = {
            isOpenForm: false,
            enterTime: [],
            enterDopTime: []
        }
    }
    enterTimeFunction = (time) => {
        this.setState({
            isOpenForm:true,
            enterTime: time
        })
    }

    returnTime = (retTime) => {
        this.setState({
            enterDopTime: retTime,
            isOpenForm: false
        })
    }
    render (){
        return(
            <div>
                {(this.state.enterDopTime.length != 0) && <TopLine
                    data = {this.state.enterDopTime}
                />}
                
                <Main
                    isFunction = { this.enterTimeFunction}
                />

                <ModalForm
                    isOpen = {this.state.isOpenForm}
                    time = {this.state.enterTime}
                    returnTime = {this.returnTime}
                />
            </div>
        )
    }
}