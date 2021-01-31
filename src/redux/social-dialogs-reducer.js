const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {

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
    
   
}



const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6,textMessage: body} )
            return state

        default:
            return state
    }
}
export const sendMessageCreator = () => ({type : SEND_MESSAGE})
  
export  const updateNewMessageBodyCreator = (text) => ({type : UPDATE_NEW_MESSAGE_BODY, 
                                                    body : text})

export default dialogsReducer