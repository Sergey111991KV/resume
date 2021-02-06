import  dialogsReducer  from "./social-dialogs-reducer"
import  profileReducer  from "./social-profile-reducer"
import  sideBarReducer  from "./social-sideBar-reducer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'



let store = {
    _state : {
        resumeWindow : {
            navMainTag : [],
            arrayNavItem: [
                {id: 1, mainTag: 'Menu', name: 'Hard Scills', refAdress: "/main"},
                {id: 2, mainTag: 'Menu', name: 'Soft Scills', refAdress: "/main"},
                {id: 3, mainTag: 'Menu', name: 'Biography', refAdress: "/main"},
                {id: 4, mainTag: 'Hard Scills', name: 'Frontend', refAdress: "/main"},
                {id: 5, mainTag: 'Hard Scills', name: 'Backend', refAdress: "/main"},
                {id: 6, mainTag: 'Hard Scills', name: 'Mobile development', refAdress: "/main"},
                {id: 7, mainTag: 'Frontend', name: 'React', refAdress: "/main"},
                {id: 8, mainTag: 'React', name: 'Social Network', refAdress: "/main"},
               
            ]
    
        },
        socialWindow : {
            dialogsPage : {
                persons : [
                    {id : 1, name : 'Dima'},
                    {id : 2, name : 'Igor'},
                    {id : 3, name : 'Stas'},
                    {id : 4, name : 'Sergey'},
                    {id : 5, name : 'Sveta'},
                  ],
                  messages : [
                    {id : 1, textMessage : "Hi"},
                    {id : 2, textMessage : "Hello"},
                    {id : 3, textMessage : "How are you?"},
                    {id : 4, textMessage : "Fine, and you?"},
                    {id : 5, textMessage : "Sancks!"}
                  ],
                  newMessageBody : "",

            },
            profilePage : {
                posts : [
                    {id : 1, textPost : "It is good day", likesCount : 3},
                    {id : 2, textPost : "I don't it meet", likesCount : 14},
                    {id : 3, textPost : "I would like to go to park", likesCount : 4},
                    {id : 4, textPost : "I want ice cream", likesCount : 2},
                    {id : 5, textPost : "Get revie", likesCount : 33}
                  ],
                newPostText : ''
    
            },
            sidebarPage : {

            }
            }
    },
    _callSubscriber () {
        console.log('Stat Changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber  = observer
    },

 
    dispatch (action) {
        dialogsReducer(this._state.socialWindow.dialogsPage,action)
        profileReducer(this._state.socialWindow.profilePage,action)
        sideBarReducer(this._state.socialWindow.sidebarPage,action)
        this._callSubscriber(this._state)
    }
}


export default store;



  
