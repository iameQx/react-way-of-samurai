import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <img src="https://i.redd.it/jeuusd992wd41.jpg" alt="profile picture" className={s.picture} />
      {props.message}
      <div>
        <span>like</span> <span>{props.likesCount}</span>
      </div>
    </div>
  )
};

export default Post;