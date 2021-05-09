import {INCREMENT, DECREMENT, UPDATE_COUNT} from './Actiontypes'

export const updatecount=(value)=>{
    return {
        type:UPDATE_COUNT,
        payload: value
    };
}

export const incaction =()=>{
    return{
        type:INCREMENT,
    };
};

export const decaction =()=>{
    return{
        type:DECREMENT,
    };
};