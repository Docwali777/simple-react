import React, { Component } from  'react';
import { render } from 'react-dom';


class App extends Component {
  render(){
    return(
      <div>
    react-App-on Heroku
      </div>
    )
  }
}
render(<App />, document.getElementById('app'))
