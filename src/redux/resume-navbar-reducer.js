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
                {id: 2, mainTag: '', name: 'Menu', refAdress: "", content: 'It is my first site-resume. I create it from React'},
                {id: 3, mainTag: 'Menu', name: 'Hard Scills', refAdress: "", content: 'It is my Hard Scills'},
                {id: 4, mainTag: 'Menu', name: 'Soft Scills', refAdress: "", content: 'It is my Soft Scills'},
                {id: 5, mainTag: 'Menu', name: 'Biography', refAdress: "", content: 'It is my Biography'},
                {id: 6, mainTag: 'Hard Scills', name: 'Frontend', refAdress: "", content: 'It is what I know about Frontend'},
                {id: 7, mainTag: 'Hard Scills', name: 'Backend', refAdress: "", content: 'It is what I know about Backend'},
                {id: 8, mainTag: 'Hard Scills', name: 'Mobile development', refAdress: "", content: 'It is my mobile develope skills'},
                {id: 9, mainTag: 'Backend', name: 'Haskell', refAdress: "", content: 'Pure Functional Language'},
                {id: 10, mainTag: 'Haskell', name: 'Bot', refAdress: "/", content: 'Simple VK and Telegrame, which can repeat simple messages', link: "https://github.com/Sergey111991KV/echoBot"},
                {id: 11, mainTag: 'Backend', name: 'Databases', refAdress: "", content: 'this is my knowledge about Databases'},
                {id: 12, mainTag: 'Databases', name: 'PostgreSQL', refAdress: "", content: 'I used this base with Haskell server, used common request and logig of store news'},
                {id: 13, mainTag: 'Haskell', name: 'Server', refAdress: "/", content: 'This simple news REST API server', link: "https://github.com/Sergey111991KV/thirdServer"},
                {id: 14, mainTag: 'Frontend', name: 'React', refAdress: "", content: 'It is my React Project'},
                {id: 15, mainTag: 'React', name: 'Simple Page Image Picker', refAdress: "", content: 'It is work with picker image, get data from API another server, module window'},
                {id: 16, mainTag: 'React', name: 'Social Network', refAdress: "/social", content: 'It is my Social Network from React by course it-kamasutra)'},
                {id: 17, mainTag: 'Soft Scills', name: 'Some soft skills', refAdress: "", content: 'This my soft skills'},
                {id: 18, mainTag: 'Biography', name: 'My family', refAdress: "", content: 'I have a wife and two children'},
                {id: 19, mainTag: 'Biography', name: 'My work', refAdress: "", content: "I have not experience in IT industry, but I'm sure, that it is a matter of time"},
                {id: 20, mainTag: '', name: 'Back', refAdress: "", content: ''},
                {id: 21, mainTag: 'React', name: 'Test app TOT', refAdress: "/testTOT", content: 'Some test chat implementation'},
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
            if (action.nameItem === "Exit") {
                return {
                    ...state,
                    mouseEnterItem: {}
                }
            } else {
                let mouseItem = state.arrayAllItem.find(item => item.name == action.nameItem)
                return {
                    ...state,
                    mouseEnterItem: mouseItem
                }
            }
            
             
        case MOUSE_EXIT_ITEM:
            return {
                ...state,
                mouseEnterItem: {},
                mouseBlurItem: {}
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