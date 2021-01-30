import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'



function Profil(props) {
  return (
    <div >
      <ProfileInfo></ProfileInfo>
      <MyPosts  store={props.store} />
    </div>
  );
}

export default Profil;