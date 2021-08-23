import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/Action';

const Home = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data)
    useEffect(() => {
        dispatch(loadUsers());
    },[])
    return (
        <div>
            <h1>JSON Data fetching in React-Redux</h1>
            {
                   users.map((data, i) => {
                    <p>{data.title}</p>
                })
            }
        </div>
    )
}

export default Home
