import "./LikeButton.css";
import React, { useState } from "react";

const LikeButton = ({ likeAmount }) => {
  const [likes, setLikes] = useState(likeAmount);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {likes}
        {isLiked ? "❤︎" : "♡"}
      </button>
    </div>
  );
};

export default LikeButton;
