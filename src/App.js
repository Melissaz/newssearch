import React, { Component } from 'react';
import './css/main.css';

import Search from './Search';
import background from './images/background.jpg'

var sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',

};

class App extends Component {
  componentDidMount(){
    document.title = "Hacker News Search"
  }
  render() {
    return (
      <div style={sectionStyle}>
        <div className="search__container">
         <Search />
        </div>
      </div>  
      
    );
  }
}

export default App;
