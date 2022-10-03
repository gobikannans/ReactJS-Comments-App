import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikeComment, onDeleteComment} = props
  const {
    id,
    initialBgColor,
    userName,
    time,
    newComment,
    likeComment,
  } = commentDetails

  const initialLetter = userName.slice(0, 1).toUpperCase()
  const postTime = formatDistanceToNow(time)

  const likeStyle = likeComment ? 'btn-like-style' : 'normal-style'

  const onLike = () => {
    onLikeComment(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  const likedImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const likeImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-container">
      <div className="commentBox-container">
        <div className="top-comment-container">
          <div className={`${initialBgColor} initial`}>
            <p className="initial-name">{initialLetter}</p>
          </div>
          <div className="username-container">
            <p className="username">{userName}</p>
            <p className="time">{postTime}</p>
          </div>
        </div>
        <p className="comment">{newComment}</p>
        <div className="like-delete-container">
          <div className="like-container">
            <img
              src={likeComment ? likedImg : likeImg}
              alt="like"
              className="like-img"
            />
            <button type="button" className={likeStyle} onClick={onLike}>
              Like
            </button>
          </div>
          <button type="button" className="btn-delete-style" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
