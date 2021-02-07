import React from 'react'
import { addPostCreator,updateNewPostTextCreator } from "../../../../../redux/social-profile-reducer";
import {connect} from 'react-redux'
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
     profilePage : state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost :  () => {
      dispatch(addPostCreator())
  },
  onPostChangeInComponent :  (text) => {
    dispatch(updateNewPostTextCreator(text))
  }
}
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;