/* eslint-disable import/no-anonymous-default-export */

export default function employees(state=[], action) {
    debugger
    if(action.type === "Add_EMPLOYEES") {
        return [
            ...state,
            ...action.payload
        ]
    }

    if(action.type === "Append_Employee") {
        return [
            ...state,
            action.payload
        ]
    }

    if(action.type === "Delete_Employee") {
        return state.filter((emp) => {
            return emp.id != action.payload.id
        })
    }

    return state;
}