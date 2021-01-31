import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'

import ProfileInfo from './ProfileInfo/ProfileInfo'



function Profil(props) {
  return (
    <div >
      <ProfileInfo></ProfileInfo>
      <MyPostsContainer store={props.store}></MyPostsContainer>
      {/* <MyPostsContainer  store={props.store} /> */}
    </div>
  );
}

export default Profil;