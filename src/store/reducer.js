
export function timeList(state = [], action) {
    switch( action.type ) {
        case "ADD_TIME" : 
            return [
                ...state,
                action.addTimeAndId
            ]
    }
    return state;
}