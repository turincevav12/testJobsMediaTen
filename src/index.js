import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import { PopoverExampleMulti } from './components/App/App';

const ADD_TIME = "ADD_TIME"
const DELETE_TIME = "DELETE_TIME"

const store = createStore(timeList);

function timeList(state = [], action) {
    switch( action.type ) {
        case "ADD_TIME" : 
            return [
                ...state,
                action.addTimeAndId
            ]
    }
    return state;
}

function sorted(timesData){
    let sortedTime = []
    timesData.forEach((e, i) => {
        e.splice(2,1)
        e.push(i)
    })

    let lineTop = document.getElementsByClassName("topLines")[0]
    lineTop.innerHTML = ""
    timesData.forEach( e=> {
        var blockTime = document.createElement("div")
        blockTime.className = 'blockTimes'
        blockTime.innerText = e[0]
        blockTime.id = e[2]
        blockTime.onclick = (e) => {
            deleteTime(e)
        }
        lineTop.appendChild(blockTime)
    })

}

function deleteTime (e){
    let id = e.target.id
    store.getState().splice(id, 1)
    let timesData = store.getState()

    sorted(timesData)
}

export function addTime (time){
    store.getState().forEach((el, i) => {
        if (time[1] == el[1]){
            store.getState().splice(i, 1)          
        }        
    });

    store.dispatch ({
        type: "ADD_TIME",
        addTimeAndId: time
    })

    let timesData = store.getState()
    sorted(timesData)
    
}

ReactDOM.render(<PopoverExampleMulti />, document.getElementById('root'));