import {takeEvery,put,call} from 'redux-saga/effects'
import {fetchDataFailure,fetchDataSuccess} from '../Actions/UserActions'
import axios from 'axios'


function* asyncUserfetch(action){
    try{
        const url=`https://jsonplaceholder.typicode.com/users/${action.payload}`
        const response =yield call(()=>axios.get(url))   
        console.log(response)
        yield put(fetchDataSuccess(response.data))
    }catch(e){
        console.log(e)
        yield put(fetchDataFailure(e))
    }

}

export function* watchUserfetch(){
    yield takeEvery('REQUEST_DATA',asyncUserfetch)
}