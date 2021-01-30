import React from 'react'
import Post from './Post/Post'
import { addPostCreator,updateNewPostTextCreator } from "../../../../../redux/social-profile-reducer";

function MyPosts(props) {
    let state = props.store.getState().socialWindow.profilePage
    let postElements = state.posts.map(post => <Post  id={post.id} 
                                                      textPost={post.textPost}  
                                                      likesCount={post.likesCount} 
                                                      />)

    let newPostElement = React.createRef()                                       

    let addPost = () => {
      props.store.dispatch(addPostCreator())
    }
    
    let onPostChangeInComponent = () => {
      let text = newPostElement.current.value
      props.store.dispatch(updateNewPostTextCreator(text))
    }

  return (
    <div >
      <h3>
        My Posts
      </h3>
        <div >
            <textarea onChange={onPostChangeInComponent} 
                      ref={newPostElement}
                      value={state.newPostText} />
        </div>
        <div >
            <button onClick={addPost}>AddPost</button>
        </div>
        <div >
            {postElements}
        </div>
    </div>
  );
}

export default MyPosts;