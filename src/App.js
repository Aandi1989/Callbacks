import logo from './logo.svg';
import './App.css';
import React from 'react';
import ButtonsExample from './ButtonsExample';
import MethodsExample from './MethodsExample';
import BindExamles from './BindExamles';

class App extends React.Component {

  render() {
    return(
      <>
        <ButtonsExample/>
        <MethodsExample />
        <BindExamles/>
      </>
    )
  }
}

export default App;
