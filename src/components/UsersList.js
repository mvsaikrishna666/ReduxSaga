import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from '../Redux/Actions/UserActions'
const UsersList = () => {
    const dispatch = useDispatch()
    return (
        <div>
            AJAX Calls using Saga
            <br/>
        <button onClick={()=>dispatch(fetchData(3))}>Fetch Data</button>
        </div>
    )
}

export default UsersList