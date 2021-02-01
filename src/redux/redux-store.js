import { createStore, combineReducers } from "redux";
import  dialogsReducer  from "./social-dialogs-reducer"
import  profileReducer  from "./social-profile-reducer"
import  sideBarReducer  from "./social-sideBar-reducer"
import resumeNavReducer from "./resume-navbar-reducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    sideBarPage : sideBarReducer,
    resumeNavPage : resumeNavReducer
})

let store = createStore(reducers)



export default store