import React from 'react'


function Post(props) {
  return (
    <div >
      <div >
        {props.textPost}
      </div>
      <div >
        {props.likesCount}
      </div>
    </div>
  );
}

export default Post;