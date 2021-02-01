const TOUCH_TAG = 'TOUCH-TAG'
const EXIT_TAG = 'EXIT-TAG'

let initialState = {

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
    
   
}



const resumeNavReducer = (state = initialState,action) => {
    switch (action.type) {
        case TOUCH_TAG:
            state.navMainTag.push(action.nameTag)
            return state

        case EXIT_TAG:
            let newState = state.navMainTag.pop()
            return newState

        default:
            return state
    }
}
  
export  const touchTag = (name) => ({type : TOUCH_TAG, 
                                    nameTag : name})

export  const exitTag = () => ({type : EXIT_TAG})

export default resumeNavReducer