import React from "react";
import Review from "./Review.jsx";

function getRatings(numReviews) {
  var num = JSON.stringify(numReviews * 143);
  var arr = num.split("");
  if (arr.length > 3) {
    arr.splice(1, 0, ",");
  }
  var string = arr.join("");
  return string;
}

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.toggleClassSeeMore = this.toggleClassSeeMore.bind(this);
    this.state = {
      active: false,
      active2: false,
      see: "See more",
    };
  }

  getAverageStars() {
    var arr = [];
    for (var i = 0; i < this.props.reviews.length; i++) {
      arr.push(this.props.reviews[i].stars);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 2) {
        arr[i] = 1;
      }
      if (arr[i] > 1 && arr[i] < 4) {
        arr[i] = 2;
      }
      if (arr[i] > 3 && arr[i] < 6) {
        arr[i] = 3;
      }
      if (arr[i] > 5 && arr[i] < 10) {
        arr[i] = 4;
      }
      if (arr[i] > 9) {
        arr[i] = 5;
      }
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    var rounded = Math.round((total / arr.length) * 10) / 10;
    return rounded;
  }

  findPercentageOfStars(num) {
    var arr = [];
    for (var i = 0; i < this.props.reviews.length; i++) {
      arr.push(this.props.reviews[i].stars);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 2) {
        arr[i] = 1;
      }
      if (arr[i] > 1 && arr[i] < 4) {
        arr[i] = 2;
      }
      if (arr[i] > 3 && arr[i] < 6) {
        arr[i] = 3;
      }
      if (arr[i] > 5 && arr[i] < 10) {
        arr[i] = 4;
      }
      if (arr[i] > 9) {
        arr[i] = 5;
      }
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count++;
      }
    }
    var total = Math.ceil((count / arr.length) * 100);
    return total;
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  toggleClassSeeMore() {
    const currentState = this.state.active2;
    this.setState({ active2: !currentState });
    if (this.state.see === "See more") {
      this.setState({ see: "See less" });
    }
    if (this.state.see === "See less") {
      this.setState({ see: "See more" });
    }
  }

  getClassNames() {
    var arrOfPossibilities = [
      "customerReviewsStars fiveStarsBig",
      "customerReviewsStars fourToFive",
      "customerReviewsStars threeToFour",
      "customerReviewsStars twoStarsBig",
      "customerReviewsStars fourStarsBig",
    ];
    var avg = this.getAverageStars();
    if (Number(avg) > 4.8) {
      return arrOfPossibilities[0];
    }
    if (Number(avg) > 4.3) {
      return arrOfPossibilities[1];
    }
    if (Number(avg) > 3.9) {
      return arrOfPossibilities[4];
    }
    if (Number(avg) > 2.9) {
      return arrOfPossibilities[2];
    }
    if (Number(avg) > 1.9) {
      return arrOfPossibilities[3];
    }
  }

  render(props) {
    const styles5 = { width: `${this.findPercentageOfStars(5)}%` };
    const styles4 = { width: `${this.findPercentageOfStars(4)}%` };
    const styles3 = { width: `${this.findPercentageOfStars(3)}%` };
    const styles2 = { width: `${this.findPercentageOfStars(2)}%` };
    const styles1 = { width: `${this.findPercentageOfStars(1)}%` };
    return (
      <div>
        <div id="containertopleft">
          <div id="customerReviews">Customer reviews</div>
          <button className={this.getClassNames()}></button>
          <span className="nextToStarsText">
            {this.getAverageStars()} out of 5
          </span>
          <div className="numberCustomerRatings">
            {this.props.reviews.length} customer ratings
          </div>
          <table className="ratingsTable">
            <tr>
              <td className="underline leftOfBar">5 star</td>
              <td className="meter">
                <div class="tooltip2">
                  5 stars represent {this.findPercentageOfStars(5)}% of rating
                </div>
                <span className="progress" style={styles5}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(5)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">4 star</td>
              <td className="meter">
                <div class="tooltip2">
                  4 stars represent {this.findPercentageOfStars(4)}% of rating
                </div>
                <span className="progress" style={styles4}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(4)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">3 star</td>
              <td className="meter">
                <div class="tooltip2">
                  3 stars represent {this.findPercentageOfStars(3)}% of rating
                </div>
                <span className="progress" style={styles3}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(3)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">2 star</td>
              <td className="meter">
                <div class="tooltip2">
                  2 stars represent {this.findPercentageOfStars(2)}% of rating
                </div>
                <span className="progress" style={styles2}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(2)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">1 star</td>
              <td className="meter">
                <div class="tooltip2">
                  1 stars represent {this.findPercentageOfStars(1)}% of rating
                </div>
                <span className="progress" style={styles1}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(1)}%
              </td>
            </tr>
          </table>
          <div onClick={this.toggleClass} className="calculateStars">
            <button className="downArrow"></button>
            How do we calculate our star ratings?
          </div>
          <p className={this.state.active ? "calculateExplain" : "null"}>
            We calculate a product’s star ratings based <br></br>
            on a machine learned model instead of a raw <br></br>
            data average. The model takes into account <br></br>
            factors including the age of a rating, whether <br></br>
            the ratings are from verified purchasers, and <br></br>
            factors that establish reviewer trustworthiness. <br></br>
          </p>
          <span className="horizontalDivider"></span>{" "}
          <div className="byFeature">By feature</div>
          <div className="featureDiv">
            <span className="feature">Feature</span>
            <button className="amazonStars fourStars"></button>
            <span className="afterStar">4.1</span>
          </div>
          <div className="featureDiv">
            <span className="feature">Feature</span>
            <button className="amazonStars threeStars feature2"></button>
            <span className="afterStar">3.2</span>
          </div>
          <div className="featureDiv">
            <span className="feature">Feature</span>
            <button className="amazonStars fourStars feature3"></button>
            <span className="afterStar">3.9</span>
          </div>
          <div className={this.state.active2 ? "featureDiv" : "null"}>
            <span className="feature">Feature</span>
            <button className="amazonStars fourStars feature3"></button>
            <span className="afterStar">4.0</span>
          </div>
          <div
            onClick={this.toggleClassSeeMore}
            className="calculateStars seeMore"
          >
            <button className="downArrow arrow2"></button>
            {this.state.see}
          </div>
          <span className="horizontalDivider"></span>{" "}
          <div className="reviewThisProduct">Review this product</div>
          <div className="shareThoughts">
            Share your thoughts with other customers
          </div>
          <button className="btnWriteReview">Write a customer review</button>
          <span className="horizontalDivider"></span>{" "}
        </div>
        <div>
          {this.props.reviews.map((review) => (
            <Review
              id={review.id}
              name={review.name}
              stars={review.stars}
              date={review.date}
              reviewBody={review.review}
              image={review.image}
              title={review.title}
              avatar={review.avatar}
              foundThisHelpful={review.foundThisHelpful}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
