import { createStore, combineReducers } from "redux";
import  dialogsReducer  from "./social-dialogs-reducer"
import  profileReducer  from "./social-profile-reducer"
import  sideBarReducer  from "./social-sideBar-reducer"


let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    sideBarPage : sideBarReducer
})

let store = createStore(reducers)



export default store