import {REQUEST_DATA,REQUEST_SUCCESS,REQUEST_FAILURE} from './Actiontypes'

export const fetchData=(data)=>{
    return {
        type: REQUEST_DATA,
        payload: data
    }
}

export const fetchDataSuccess=(user)=>{
    return {
        type: REQUEST_SUCCESS,
        payload: user
    }
}

export const fetchDataFailure=(error)=>{
    return {
        type: REQUEST_FAILURE,
        payload:{},
        error: error
    }
}