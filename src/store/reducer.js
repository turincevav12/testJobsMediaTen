

export function timeList(state = {

    timeList:[

    ],

    timeListPopover:{
        
    }

}, action) {
    switch( action.type ) {
        case "ADD_TIME" : 
            return [
                ...state.timeList,
                action.timeObject
            ]
        case "DELETE_TIME":
            return[
                [].timeList,
                action.timeObject
            ]
        case "CREAT_TIME_POPOVER":
            return[
                state.timeListPopover,
                action.objectPopoverTimes
            ]
    }
    return state;
}