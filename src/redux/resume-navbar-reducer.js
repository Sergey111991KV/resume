const TOUCH_TAG = 'TOUCH-TAG'
const EXIT_TAG = 'EXIT-TAG'
const MOUSE_ENTER_ITEM = 'MOUSE-ENTER-ITEM'
const MOUSE_ENTER_BLUR_ITEM = 'MOUSE-ENTER-BLUR-ITEM'
const MOUSE_EXIT_ITEM = 'MOUSE-EXIT-ITEM'



let initialState = {
    navMainItemDefault:  {id: 1, mainTag: '', name: 'Menu', refAdress: "", content: 'It is my resume'},
    mouseBlurItem:  {},
    mouseEnterItem: {},
    arrayAllItem: [
                {id: 1, mainTag: '', name: 'Menu', refAdress: "", content: 'It is my resume'},
                {id: 2, mainTag: 'Menu', name: 'Hard Scills', refAdress: "/main", content: 'It is my Hard Scills'},
                {id: 3, mainTag: 'Menu', name: 'Soft Scills', refAdress: "/main", content: 'It is my Soft Scills'},
                {id: 4, mainTag: 'Menu', name: 'Biography', refAdress: "/main", content: 'It is my Biography'},
                {id: 5, mainTag: 'Hard Scills', name: 'Frontend', refAdress: "/main", content: 'It is what I know about Frontend'},
                {id: 6, mainTag: 'Hard Scills', name: 'Backend', refAdress: "/main", content: 'It is what I know about Backend'},
                {id: 7, mainTag: 'Hard Scills', name: 'Mobile development', refAdress: "/main", content: 'It is my mobile develope skills'},
                {id: 8, mainTag: 'Frontend', name: 'React', refAdress: "/main", content: 'It is my React Project'},
                {id: 9, mainTag: 'React', name: 'Social Network', refAdress: "/social", content: 'It is my Social Network from React'},
                {id: 10, mainTag: 'Soft Scills', name: 'Some soft skills', refAdress: "/main", content: 'This my soft skills'},
                {id: 11, mainTag: 'Biography', name: 'My family', refAdress: "/main", content: 'This Information about my family'},
                {id: 12, mainTag: 'Biography', name: 'My work', refAdress: "/social", content: 'This Information about my carery'},
                {id: 13, mainTag: '', name: 'Exit', refAdress: "", content: ''},
    ]   
}
function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
}

const resumeNavReducer = (state = initialState,action) => {
    switch (action.type) {
        case TOUCH_TAG:
            let newMainItemDefault = state.arrayAllItem.find(item => item.name == action.nameTag)
            return  {
                ...state,
                navMainItemDefault: newMainItemDefault,
                mouseEnterItem: {}
            }
        case EXIT_TAG:
            let exitMainItemDefault = state.arrayAllItem.find(item => item.name == state.navMainItemDefault.mainTag)
            return {
                ...state,
                navMainItemDefault: exitMainItemDefault
            }
        case MOUSE_ENTER_ITEM:
            
            let mouseItem = state.arrayAllItem.find(item => item.name == action.nameItem)
            return {
                ...state,
                mouseEnterItem: mouseItem
            }
             
        case MOUSE_EXIT_ITEM:
            return {
                ...state,
                mouseEnterItem: {}
            }
        case MOUSE_ENTER_BLUR_ITEM:
            let mouseBItem = state.arrayAllItem.find(item => item.name == action.nameBlurItem)
            return {
                ...state,
                mouseBlurItem: mouseBItem
            }

        default:
            return state
    }
}
  
export  const touchTagCreator = (name) => ({type : TOUCH_TAG, 
                                    nameTag : name})

export  const exitTagCreator = () => ({type : EXIT_TAG})

export  const mouseEnterTagCreator = (name) => ({type : MOUSE_ENTER_ITEM,
                                        nameItem : name})

export  const mouseExitTagCreator = () => ({type : MOUSE_EXIT_ITEM})

export const mouseEnterBlurTagCreator = (name) => ({type : MOUSE_ENTER_BLUR_ITEM,
    nameBlurItem : name})

export default resumeNavReducer