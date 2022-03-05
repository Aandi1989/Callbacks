import logo from './logo.svg';
import './App.css';
import React from 'react';

class MethodsExample extends React.Component {

  writeOneMethod() {
    console.log('ONE-from method')
  }

  showMyClassName(e) {
    console.log(e.target.className)
  }
  

  render() {
    
    function writeOneFunction() {
      console.log('ONE-from function')
    }

    return(
      <div>
        <h1>Methods Example</h1>
        <button
          onClick={this.writeOneMethod}
          //обращаемся к методу класса
          //вызываем метод writeOneMethod этого (this) класса
        >
          ONE-from method
        </button>
        <button
          onClick={writeOneFunction}
          //вызывает просто функцию созданную ранее 
        >
          ONE-from function
        </button>

        {/* Событие EVENT */}
        <h1>Show classname</h1>
        <button
          className='stylish-button'
          onClick={(e) => this.showMyClassName(e)}
        >
          Show className
        </button>


        <button
          className='stylish-button'
          onClick={this.showMyClassName}
          //EVENT полюбому прилетает в функию как первый аргумент
        >
          Show className
        </button>
      </div>
    )
  }
}

export default MethodsExample;
