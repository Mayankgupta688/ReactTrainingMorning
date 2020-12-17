/* eslint-disable import/no-anonymous-default-export */

export default function movies(state=[], action) {
    if(action.type === "Add_MOVIES") {
        debugger
        return action.payload;
    }

    return state;
}

