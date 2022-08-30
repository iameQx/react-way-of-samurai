import MyPosts from './MyPosts/MyPosts';
import profile from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  // console.log(props)

  return (
    <div className={profile.content}>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.postsData}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  )
};

export default Profile;