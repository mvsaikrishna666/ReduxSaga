import {all} from 'redux-saga/effects'
import {watchCount} from './Countersaga'
import {watchUserfetch} from './Usersaga'
export default function* Rootsaga(){
    yield all([watchCount(),watchUserfetch()])
}