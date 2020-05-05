import React from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var arr = ['amazonStars oneStar', 'amazonStars twoStars', 'amazonStars threeStars', 'amazonStars fiveStars', 'amazonStars fiveStars', 'amazonStars fiveStars', 'amazonStars fiveStars', 'amazonStars fiveStars', 'amazonStars fiveStars', 'amazonStars threeStars', 'amazonStars twoStars', 'amazonStars twoStars']

var avatars = ['avatar avatar1', 'avatar avatar0', 'avatar avatar2', 'avatar avatar3', 'avatar avatar4', 'avatar avatar5', 'avatar avatar6', 'avatar avatar7', 'avatar avatar8', 'avatar avatar9', 'avatar avatar10', 'avatar avatar11', 'avatar avatar12', 'avatar avatar13', 'avatar avatar14'];

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 'helpfulButton',
    }
  }

  click () {
    this.setState({clicked: 'helpfulClicked'});
    //how can I increase found helpful?
  }

  render(props) {
   return (
    <div>
    <div id = 'reviewsContainer'>
    <button className={avatars[this.props.avatar]}></button>
 <span className='reviewName'>
  {this.props.name}
 </span>
  <div>

  <button className={arr[this.props.stars]}></button>
<span className="reviewTitle">{this.props.title}</span>

 </div>
 <div className='reviewDate'>
 {this.props.date}
 </div>
 <div id='reviewBody'>
 {this.props.reviewBody}
 </div>
 <div id='foundthishelpful'>
   {this.props.foundThisHelpful} people found this helpful
 </div>
 <button onClick = {this.click.bind(this)} className={this.state.clicked}>Helpful</button> <span className='divider'></span> <span className='comment'>Comment</span><span className='divider'></span><span className='reportAbuse'>Report abuse</span>
 </div>
 </div>
   )
  }
 }

export default Review;
