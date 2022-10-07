import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/welcome';
// import Hello from './components/hello';

import {Greetname} from './components/greetname';

import Message from './components/message';

  // return (
  //   <div className="App">
  //     {/* <Greet></Greet>
  //     <Welcome></Welcome> */}
  //     <Hello/>
  //   </div>
  // );
class App extends Component {
  render() {
  return (
  <div className="App">
 
    <Message></Message>

  <Greetname name="bruce" heroName='batman'>
    <p>this is children props</p>
  </Greetname>
  <Greetname name="Bob" heroName='superman'>
    <button>Action</button>
  </Greetname>
  <Greetname name="Diana" heroName='Wonder woman'/>
  
{/* <Welcome name="bruce" heroName='batman'></Welcome>
<Welcome name="anania" heroName='superman'></Welcome>
<Welcome name="yab" heroName='btman'></Welcome> */}

  </div>);
}
}

export default App;

