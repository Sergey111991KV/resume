import React from 'react'
import Post from './Post/Post'




function MyPosts(props) {

    let postElements = props.profilePage.posts.map(post => <Post  id={post.id} 
                                                      textPost={post.textPost}  
                                                      likesCount={post.likesCount} 
                                                      />)

    let newPostElement = React.createRef()                                       

    let sendPost = () => {
      props.addPost()
    }
    
    let onPostChange = () => {
      let text = newPostElement.current.value
      props.onPostChangeInComponent(text)
    }

  return (
    <div >
      <h3>
        My Posts
      </h3>
        <div >
            <textarea onChange={onPostChange} 
                      ref={newPostElement}
                      value={props.profilePage.newPostText} />
        </div>
        <div >
            <button onClick={sendPost}>AddPost</button>
        </div>
        <div >
            {postElements}
        </div>
    </div>
  );
}

export default MyPosts;