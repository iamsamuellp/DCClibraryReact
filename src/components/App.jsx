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
      bookNumber: 0
    };
  }

  goToNextBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if(tempBookNumber === this.books.length){
      tempBookNumber = 0;
    }

    this.setState({
      bookNumber: tempBookNumber
    });

  }

  goToPrevious= () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber--;
    if(tempBookNumber< 0){
      tempBookNumber=this.books.length - 1;
      }
      this.setState({
        bookNumber: tempBookNumber
      })
    }

  render() {
      return (
        <div className="container-fluid">
          <TitleBar />
          <div className= "row"> 
          <div className="col-md-4">
            {/*Button here to move the previous book viewed */}
            <button onClick={this.goToPreviousBook}>Previous Book</button>
          </div>
          <div className="col-md-4">
            {/*Display book with cover here  */}
            <h1>{this.books[this.state.bookNumber].title }</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className="col-md-4">
          {/*Button here to move to the next book viewed */}
          <button onClick={this.goToNextBook}>Next Book</button>
          </div>
          </div>
        </div>
      )

  }

}

export default App;
