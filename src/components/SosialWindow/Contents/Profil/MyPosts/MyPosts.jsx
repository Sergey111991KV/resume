import React from 'react'
import Post from './Post/Post'


function MyPosts(props) {
  
    let postElements = props.posts.map(post => <Post id={post.id} textPost={post.textPost}  likesCount ={post.likesCount} />)
  return (
    <div >
      <h3>
        My Posts
      </h3>
        <div >
            <textarea></textarea>
        </div>
        <div >
            <button>AddPost</button>
        </div>
        <div >
            {postElements}
        </div>
    </div>
  );
}

export default MyPosts;