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
    this.state = {};
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
        arr[i] = 5;
      }
      if (arr[i] > 9) {
        arr[i] = 4;
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
        arr[i] = 5;
      }
      if (arr[i] > 9) {
        arr[i] = 4;
      }
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count++;
      }
    }
    var total = Math.floor((count / arr.length) * 100);
    return total;
  }

  getClassNames() {
    var arrOfPossibilities = [
      "customerReviewsStars fiveStarsBig",
      "customerReviewsStars fourToFive",
      "customerReviewsStars threeToFour",
      "customerReviewsStars twoStarsBig",
    ];
    var avg = this.getAverageStars();
    if (Number(avg) > 4.8) {
      return arrOfPossibilities[0];
    }
    if (Number(avg) > 3.9) {
      return arrOfPossibilities[1];
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
                <span className="progress" style={styles5}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(5)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">4 star</td>
              <td className="meter">
                <span className="progress" style={styles4}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(4)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">3 star</td>
              <td className="meter">
                <span className="progress" style={styles3}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(3)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">2 star</td>
              <td className="meter">
                <span className="progress" style={styles2}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(2)}%
              </td>
            </tr>
            <tr>
              <td className="underline leftOfBar">1 star</td>
              <td className="meter">
                <span className="progress" style={styles1}></span>
              </td>
              <td className="underline rightOfBar">
                {this.findPercentageOfStars(1)}%
              </td>
            </tr>
          </table>
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
