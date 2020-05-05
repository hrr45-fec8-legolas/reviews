import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       reviews: [],
    }
  }


  componentDidMount() {
    var id = window.location.search;
    // console.log('id client: ', id);
    var thisBind = this;
    $.get(`http://localhost:3004/api/allreviews/${id}`, function(newData) {
      thisBind.setState({
        reviews: newData,
      })
    })
  }

  render() {
   return (
     <div>
     <Reviews reviews={this.state.reviews}/>
     </div>
   )
  }


 }

 ReactDOM.render(
   <App/>,
   document.getElementById('app') || document.createElement('div') //<----- the OR is for testing purposes
 );

 //for testing purposes
 export default App;