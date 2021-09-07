import React, {Component } from 'react';
import './App.css'
import TitleBar from './TitileBar/TitleBar';

class App extends Component {
  constructor(props){
    super(props);
    this.books = [
      {title : "Ready Player One", author: "Ernest Cline"},
      {title :"Rich Dad Poor Dad",author: "Robert Kiyosaki & Sharon Lechter" }, 
      {title : "A Dance with Dragons",author:"George R.R. Martin"}
    ];
    this.state = {
      bookNumber: 1
    };
  }

  render() {
      return (
        <div className="container-fluid">
          <TitleBar />
          <div className= "row"> 
          <div className="col-md-4">
            {/*Button here to move the previous book viewed */}
          </div>
          <div className="col-md-4">
            {/*Display book with cover here  */}
            <h1>{this.books[this.state.bookNumber].title }</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className="col-md-4"></div>
          {/*Button here to move to the next book viewed */}
          </div>
        </div>
      )

  }

}

export default App;
