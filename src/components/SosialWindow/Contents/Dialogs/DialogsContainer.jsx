import Dialogs  from "./Dialogs";
import { sendMessageCreator,updateNewMessageBodyCreator } from "../../../../redux/social-dialogs-reducer";
import { connect } from 'react-redux';





// function DialogsContainer(props) {
  
//   return (
//     <StoreContext.Consumer>
//         {  (store) => {
//                 let state = store.getState().dialogsPage

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (text) => {
//                     store.dispatch(updateNewMessageBodyCreator(text))
//                 }   
//             return <Dialogs state={state} sendMessage={onSendMessageClick} changeMessage={onNewMessageChange} />
//             }
//         }
      
//   </StoreContext.Consumer> 

//   );
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage : () => {
            dispatch(sendMessageCreator())
        }
    }
} 

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer;