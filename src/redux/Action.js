import axios from "axios"
import * as types from "./ActionType"

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload: users,
})

export const loadUsers = () =>{
    return function (dispatch){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res);
            dispatch(getUsers(res.data));
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}