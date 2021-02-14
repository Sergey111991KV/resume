import { createStore, combineReducers } from "redux";
import  dialogsReducer  from "./social-dialogs-reducer"
import  profileReducer  from "./social-profile-reducer"
import  sideBarReducer  from "./social-sideBar-reducer"
import resumeNavReducer from "./resume-navbar-reducer";
import usersReducer from "./social-users-reducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    sideBarPage : sideBarReducer,
    resumeNavPage : resumeNavReducer,
    usersPage : usersReducer
})

let store = createStore(reducers)



export default store