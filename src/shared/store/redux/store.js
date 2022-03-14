import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reducer } from './reducer';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 
};

const pReducer = persistReducer(persistConfig, reducer);
const it={
    searchkey:'',
    user:{
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
export const store = createStore(pReducer,it);
export const persistor = persistStore(store);