import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import filterEmojy from './filterImojy';
import Render from './Components/Render';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojy:filterEmojy('',20)
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch (ev) {
    this.setState({emojy:filterEmojy(ev,10)}) ;
  }
  
  render() {
    return (
      <div className="App"><span className="heading">Search Emojy </span>
        <Search textChange={ (ev)=>{this.handleSearch(ev)} }/>
        <Render emojyList={this.state.emojy}/>
      </div>
    );
  }
}

export default App;
