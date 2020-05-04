import React from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Review = (props) => (
  <div>
    <div id = 'reviewsContainer'>
    <button className='avatar'></button>
 <span className='reviewName'>
  {props.name}
 </span>
  <div>

  <button className='amazonStars'></button>
<span className="reviewTitle">{props.title}</span>

 </div>
 <div className='reviewDate'>
 {props.date}
 </div>
 <div id='reviewBody'>
 {props.reviewBody}
 </div>
 <div id='foundthishelpful'>
   {getRandomInt(86)} people found this helpful
 </div>
 <button id='helpfulButton'>Helpful</button> <span className='divider'></span> <span className='comment'>Comment</span><span className='divider'></span><span className='reportAbuse'>Report abuse</span>
 </div>
 </div>
);

export default Review;
