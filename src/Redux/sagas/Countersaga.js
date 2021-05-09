import {takeEvery,put} from 'redux-saga/effects'
import {incaction,decaction} from '../Actions/CounterActions'

function* updatecount(action){
    if(action.payload === 'INCREMENT'){
       yield put(incaction());
    }else{
        yield put(decaction());
    }
}

export function* watchCount(){
    yield takeEvery('UPDATE_COUNT',updatecount)
}