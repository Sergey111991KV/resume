const TOUCH_TAG = 'TOUCH-TAG'
const EXIT_TAG = 'EXIT-TAG'
const MOUSE_ENTER = 'MOUSE-ENTER'
const MOUSE_ENTER_ITEM = 'MOUSE-ENTER-ITEM'

let initialState = {
    mouseEnterValue: '',
    navMainItemDefault:  {id: 1, mainTag: '', name: 'Menu', refAdress: "", content: 'It is my resume'},
    mouseEnterItem: {},
    arrayNavItem: [
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
    ]   
}



const resumeNavReducer = (state = initialState,action) => {
    switch (action.type) {
        case TOUCH_TAG:
            let newMainItemDefault = state.arrayNavItem.find(item => item.name == action.nameTag)
            let arrayCheck = state.arrayNavItem.filter(item => item.mainTag ===  newMainItemDefault.name)
            console.log(arrayCheck)
            if ( arrayCheck.length == 0 ){
                return state
            }
            state.navMainItemDefault = newMainItemDefault
            state.mouseEnterValue = ''
            return state

        case EXIT_TAG:
            let newState = state.navMainTag.pop()
            return newState

        case MOUSE_ENTER:
                state.mouseEnterValue = action.nameItem
                return state

        default:
            return state
    }
}
  
export  const touchTagCreator = (name) => ({type : TOUCH_TAG, 
                                    nameTag : name})

export  const exitTagCreator = () => ({type : EXIT_TAG})

export  const mouseEnterTagCreator = (name) => ({type : MOUSE_ENTER,
                                        nameItem : name})

export default resumeNavReducer