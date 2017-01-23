import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './search_bar';

const API_KEY = 'AIzaSyBB1L2NfcSDwlBFn9EuSh9YiunwDu-2Dkk';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
