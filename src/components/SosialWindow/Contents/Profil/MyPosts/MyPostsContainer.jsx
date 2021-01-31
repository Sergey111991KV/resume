import React from 'react'
import { addPostCreator,updateNewPostTextCreator } from "../../../../../redux/social-profile-reducer";
import MyPosts from './MyPosts';


function MyPostsContainer(props) {

    let state = props.store.getState().profilePage                         

    let addPost = () => {
      props.store.dispatch(addPostCreator())
    }
    
    let onPostChangeInComponent = (text) => {
      props.store.dispatch(updateNewPostTextCreator(text))
    }

  return (
      <MyPosts  state={state} addPost={addPost}  onPostChangeInComponent ={onPostChangeInComponent}/>

  );
}

export default MyPostsContainer;