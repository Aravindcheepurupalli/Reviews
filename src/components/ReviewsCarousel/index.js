import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  onRightArrow = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props

    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({activeId: prevState.activeId + 1}))
    }
  }

  ActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {activeId} = this.state

    if (activeId > 0) {
      this.setState(prevState => ({activeId: prevState.activeId - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state
    const reviewDetails = reviewsList[activeId]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onLeftArrow}
            className="arrow-button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.ActiveReview(reviewDetails)}

          <button
            type="button"
            onClick={this.onRightArrow}
            className="arrow-button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
