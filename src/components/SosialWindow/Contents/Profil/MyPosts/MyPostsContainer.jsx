import React from 'react'
import { addPostCreator,updateNewPostTextCreator } from "../../../../../redux/social-profile-reducer";
import StoreContext from '../../../../../StoreContext';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {

  return (
      <StoreContext.Consumer> 
          { 
          (store) => {
            let state = store.getState().profilePage  
            let addPost = () => {
                store.dispatch(addPostCreator())
              }
              
            let onPostChangeInComponent = (text) => {
                store.dispatch(updateNewPostTextCreator(text))
              }      
            return <MyPosts     state={state}
                                addPost={addPost}  
                                onPostChangeInComponent ={onPostChangeInComponent}/>
          }
          }
      </StoreContext.Consumer>
  );
}

export default MyPostsContainer;