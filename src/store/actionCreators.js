import { createStore } from 'redux';
import { timeList } from "./reducer"

export const store = createStore(timeList);


export function sorted(timesData){
    let sortedTime = []
    timesData.forEach((e, i) => {
        e.splice(2,1)
        e.push(i)
    })
}

export function deleteTime (e){

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