import {createSlice} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
const initialAuthState = {
    isAuthenticated: false,
    
    id:"",
    transaction:"",
    walletAmount:null,

  };
  
  const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
      login(state,actions) {
        console.log(actions)
        state.isAuthenticated = true;
        // state={...actions.payload}
        state.id=actions.payload.id;
        state.transaction=actions.payload.transaction;
        state.walletAmount=actions.payload.walletAmount;
        // state.transaction.amount=actions.payload.transaction.amount;
        

        },
      logout(state) {
        state.isAuthenticated = false;
        state.id="";
        state.walletAmount=null;
        
        
      },
      update(state,actions){
        console.log(actions)
        state.isAuthenticated = true;
        // state={...actions.payload}
        state.id=actions.payload.id;
        state.transaction=actions.payload.transaction;
        state.walletAmount=actions.payload.walletAmount;
        state.name=actions.payload.name;
        
        console.log(state)

      }

      // setAutheration(state,actions){
      //   console.log(actions.payload)
      //   state = actions.payload
      // },
    },
  });
  const persistConfig ={
    key : "wallet",
    storage
}
const persistedReducer = persistReducer(persistConfig,authSlice.reducer)

  const Store = configureStore({
    reducer : {auth : persistedReducer}
})
export const persistor = persistStore(Store); 
  export const authActions = authSlice.actions;
  export default Store;
  
  
  
  