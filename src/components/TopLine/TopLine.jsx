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

            console.log(e)

            sortedTimes.push(
                {
                    timeTypeInt: Number.parseInt(e[0]),
                    time: e[0],
                    id: e[2]
                }
            )

            console.log(sortedTimes.sort())
        });

        stores = (sortedTimes.sort(function(a, b) {
            return a.timeTypeInt - b.timeTypeInt;
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