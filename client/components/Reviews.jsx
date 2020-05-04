import React from 'react';
import Review from './Review.jsx'

const Reviews = (props) => (
  <div>

 <div id='containertopleft'>
  <div id='customerReviews'>Customer Reviews</div>





  </div>
 <div>
  {props.reviews.map(review => (
          <Review id={review.id} name={review.name} stars={review.stars} date={review.date} reviewBody={review.review} image={review.image} title={review.title} avatar={review.avatar}/>
        ))}
 </div>
 </div>
);

export default Reviews;
