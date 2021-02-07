const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {

  
        posts : [
            {id : 1, textPost : "It is good day", likesCount : 3},
            {id : 2, textPost : "I don't it meet", likesCount : 14},
            {id : 3, textPost : "I would like to go to park", likesCount : 4},
            {id : 4, textPost : "I want ice cream", likesCount : 2},
            {id : 5, textPost : "Get revie", likesCount : 33}
          ],
        newPostText : ''
    
  
}

const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: 
            let text = state.newPostText
            let newPost = {
                id : 6,
                textPost :text,
                likesCount : 0 }
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts,newPost]
                 }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
                }
        default:
            return state
    }      
    }
export const addPostCreator = () => ({type : ADD_POST})
  
export  const updateNewPostTextCreator = (text) => ({type : UPDATE_NEW_POST_TEXT, 
                                                        newText : text})

export default profileReducer