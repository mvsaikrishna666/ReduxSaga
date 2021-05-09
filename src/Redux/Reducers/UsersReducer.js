const initialstate={
    isLoading:false,
    users:{},
    error:{},
}

const UsersReducer=(state=initialstate,action)=>{
        switch(action.type){
            case 'REQUEST_DATA':
                return {...state,isLoading:true};
            case 'REQUEST_SUCCESS':
                return {...state,isLoading:false,users:action.payload,error:{}};
            case 'REQUEST_FAILURE':
                return {...state,isLoading:false,users:{},error:action.error};
            default:
                return state
        }
}

export default UsersReducer