import React, { Component } from  'react';
import { render } from 'react-dom';


class App extends Component {
  render(){
    return(
      <div>
    Let' Get this Party Started
   <img src='https://udemy-images.udemy.com/course/480x270/1037666_91c9_2.jpg' />
      </div>
    )
  }
}
render(<App />, document.getElementById('app'))
