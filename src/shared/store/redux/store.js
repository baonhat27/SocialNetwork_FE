import { createStore } from 'redux';
import { reducer } from './reducer';

const it={
    searchkey:'',
    user:{
        _id:"",
        email: "",
        firstName:"",
        lastName:"",
        createdAt:"",
        avatar: "",
        dateOfBirth: "",
        gender:0,
        status:0
    }
}
export const store = createStore(reducer,it);