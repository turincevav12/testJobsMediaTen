import React, { Component } from 'react';
import Modal from "react-modal"

import styles from "./Main.css"

export class Main extends Component {
    constructor(props){
        super (props)
        this.state = {
            allTime: ["Старт"]
        }
    }

    fillTime = () => {
        var allTimes = []

        for(var i = 9; i != 29; i++){
            if(i <= 23){
                var timeHours = i
            }else{
                var timeHours = i - 24
            }
            for(var j = 0; j != 2; j++){
                if (j == 0){
                    allTimes.push([timeHours, "00"])
                }else{
                    allTimes.push([timeHours, "30"])
                }
            }
        }

        this.state = ({
            allTime: allTimes
        })
    }

    clickTimes = (el) => {
        var enterTime = (el.target.innerText).split(":")
        this.props.isFunction(enterTime)
    }
    
    render (){   
        this.fillTime()
        return(
            <div className="Main">
                {
                    this.state.allTime.map(el => 
                        <div className="blockCLickTime" onClick={(el) => this.clickTimes(el)}>
                            {el[0]+":"+el[1]}
                        </div>
                    )
                }
            </div>
        )
    }
}