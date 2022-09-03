import { useRef } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  // console.log(props)

  let newPostElement = useRef(null);

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {props.postsData.map(item => {
          return <Post
            key={item.id}
            id={item.id}
            message={item.message}
            likesCount={item.likesCount}
          />
        })}
      </div>
    </div>
  )
};

export default MyPosts;