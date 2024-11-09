import { CHANGE_USER_INFO } from "../actions/actions"

const User = {name: "Alice", status: "ok"}


const reducerUsInfo  = (state = User, action) => {
    if (action.type === CHANGE_USER_INFO) { 
        return { ...state, name: action.payload.name,
        status: action.payload.status }
    }
    return state
}




export default reducerUsInfo