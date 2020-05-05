import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const id = window.location.search;
    const thisBind = this;
    $.get(`http://localhost:3004/api/allreviews/${id}`, (newData) => {
      thisBind.setState({
        reviews: newData,
      });
    });
  }

  render() {
    return (
      <div>
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app') || document.createElement('div'), // <----- the OR is for testing purposes
);

// for testing purposes
export default App;
