import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {updatecount} from '../Redux/Actions/CounterActions'
const Counter = () => {

    const dispatch = useDispatch()
    const count=useSelector(state=>state.count.count)
    return (
        <div>
            <button onClick={()=>dispatch(updatecount('INCREMENT'))}>Increase</button>
             <h3>{count}</h3> 
             <button onClick={()=>dispatch(updatecount('DECREMENT'))}>Decrease</button>
        </div>
    )
}

export default Counter
