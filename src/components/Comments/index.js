import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], user: '', comment: ''}

  onUserName = event => {
    this.setState({user: event.target.value})
  }

  onUserComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {user, comment} = this.state

    const initialBg =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      initialBgColor: initialBg,
      userName: user,
      newComment: comment,
      time: new Date(),
      likeComment: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      user: '',
      comment: '',
    }))
  }

  onLikeComment = likeId => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachLike => {
        if (likeId === eachLike.id) {
          return {...eachLike, likeComment: !eachLike.likeComment}
        }
        return eachLike
      }),
    }))
  }

  onDeleteComment = deleteId => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(
        eachComment => eachComment.id !== deleteId,
      ),
    })
  }

  render() {
    const {commentsList, user, comment} = this.state
    const count = commentsList.length

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="top-container">
          <div>
            <form className="input-container">
              <p className="paragraph">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                onChange={this.onUserName}
                value={user}
              />
              <textarea
                placeholder="Your Comment"
                rows="5"
                cols="20"
                className="text-area"
                onChange={this.onUserComment}
                value={comment}
              />
              <button
                className="btn-style"
                type="submit"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-img"
            alt="comments"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="comments-box">
          <p className="count-box">{count}</p>
          <p>Comments</p>
        </div>
        <ul className="comment-list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              onLikeComment={this.onLikeComment}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
