import React from "react";

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

var arr = [
  "amazonStars oneStar",
  "amazonStars oneStar",
  "amazonStars twoStars",
  "amazonStars twoStars",
  "amazonStars threeStars",
  "amazonStars threeStars",
  "amazonStars fourStars",
  "amazonStars fourStars",
  "amazonStars fourStars",
  "amazonStars fourStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
  "amazonStars fiveStars",
];

var avatars = [
  "avatar avatar1",
  "avatar avatar0",
  "avatar avatar2",
  "avatar avatar3",
  "avatar avatar4",
  "avatar avatar5",
  "avatar avatar6",
  "avatar avatar7",
  "avatar avatar8",
  "avatar avatar9",
  "avatar avatar10",
  "avatar avatar11",
  "avatar avatar12",
  "avatar avatar13",
  "avatar avatar14",
  "avatar avatar15",
];

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: "false",
      clicked: "helpfulButton",
    };
  }

  changeClass() {
    this.setState({ clicked: "helpfulClicked", boolean: "true" });
  }

  click() {
    if (this.state.boolean === "false") {
      this.setState({ clicked: "sendingFeedback" });
      var thisBind = this;
      setTimeout(function() {
        thisBind.changeClass();
      }, getRandomTime(50, 350));
    }
  }

  getStars() {
    if (this.props.stars < 2) {
      return "1.0";
    }
    if (this.props.stars > 1 && this.props.stars < 4) {
      return "2.0";
    }
    if (this.props.stars > 3 && this.props.stars < 6) {
      return "3.0";
    }
    if (this.props.stars > 5 && this.props.stars < 10) {
      return "4.0";
    }
    if (this.props.stars > 9) {
      return "5.0";
    }
  }

  render(props) {
    return (
      <div>
        <div id="reviewsContainer">
          <button className={avatars[this.props.avatar]}></button>
          <span className="reviewName">{this.props.name}</span>
          <div>
            <button className={arr[this.props.stars]}>
              <div class="tooltip">{this.getStars()} out of 5 stars</div>
            </button>
            <span className="reviewTitle">{this.props.title}</span>
          </div>
          <div className="reviewDate">{this.props.date}</div>
          <div className="verified">Verified Purchase</div>
          <div id="reviewBody">{this.props.reviewBody}</div>
          <div id="foundthishelpful">
            {this.props.foundThisHelpful} people found this helpful
          </div>
          <button
            onClick={this.click.bind(this)}
            className={this.state.clicked}
          >
            Helpful
          </button>{" "}
          <span className="divider"></span>{" "}
          <span className="comment">Comment</span>
          <span className="divider"></span>
          <span className="reportAbuse">Report abuse</span>
        </div>
      </div>
    );
  }
}

export default Review;
