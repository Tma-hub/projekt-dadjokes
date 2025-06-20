import { useState } from 'react';

const Joke = ({
  userAvatar,
  userName,
  text,
  likes: clickedLikes,
  dislikes: clickedDislikes,
}) => {
  const [likes, setLikes] = useState(clickedLikes);
  const [dislikes, setDislikes] = useState(clickedDislikes);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>
          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setLikes(likes + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setDislikes(dislikes + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Joke;
