import * as types from "./ActionType"

const initialState = {
    users:[],
    loading:false
}

const usersReducers = (state = initialState , action) =>{
switch (action.type) {
    case types.GET_USERS:
        return{
            ...state,
            users: action.payload,
            loading:true
        }
    default:
        return state;
    
}
};
export default usersReducers;