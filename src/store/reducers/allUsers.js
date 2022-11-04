const init ={
    data:[]
}
export const allUsersReducer = (state = init, action) => {
    switch (action.type) {
        case "ALL_USERS":
            return {...state, data: action.payload}
        default:
            return state
    }
}