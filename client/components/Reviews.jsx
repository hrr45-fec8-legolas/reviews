import React from 'react';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(props) {
   return (
    <div>

    <div id='containertopleft'>
     <div id='customerReviews'>Customer Reviews</div>


     </div>
    <div>
     {this.props.reviews.map(review => (
             <Review id={review.id} name={review.name} stars={review.stars} date={review.date} reviewBody={review.review} image={review.image} title={review.title} avatar={review.avatar} foundThisHelpful={review.foundThisHelpful}/>
           ))}
    </div>
    </div>
   )
  }
 }

export default Reviews;
