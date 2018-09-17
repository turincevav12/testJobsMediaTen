import React, { Component } from 'react';
import Modal from "react-modal"

import { timeList } from "../../store/reducer"
import { store, deleteTime } from "../../store/actionCreators"

import styles from "./TopLine.css"

export class TopLine extends Component {
    constructor(props){
        super (props)
        this.state = {
            times: [],
            reset: 0
        }
    }    

    assembly = () => {
        var stores = store.getState()
        let sortedTimes = []

        store.getState().forEach(e => {

            let intTime = e[0].split(":")
            sortedTimes.push(
                Number.parseInt(intTime[0] + intTime[1]) 
            )
        });

        stores = (sortedTimes.sort(function(a, b) {
            return a - b;
          }))
    }

    deleteTimes = (e) => {
        deleteTime(e)
        
        setTimeout(() => {
            this.setState({

            })
        }, 100);
    }

    render(){
        let sortedTimes = []
        let stores = store.getState()
        this.assembly()

        return(    
            <div className="topLines">
                {(stores.length != 0) && stores.map(e => <div className="blockTimes" id={e[2]} onClick = {e => this.deleteTimes(e)}>
                    {e[0]}
                </div>)}
            </div>
        )
    }
}