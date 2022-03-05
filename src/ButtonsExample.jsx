import logo from './logo.svg';
import './App.css';
import React from 'react';

class ButtonsExample extends React.Component {

  render() {

    function test1() {
      console.log('1')
    }

    const test2 = () => {
      console.log('2')
    }

    const test5 = () => {
      console.log('5')
    }

    const onSameClick = (text) => {
      console.log(text)
    }

    const onSameClickHandler = (text) => () => console.log(text)

    const arr=[1,2,3]

    const onButtonClick=text=>()=>{
      console.log(text)
    }

    return(
      <div>
        <h1>Buttons Example</h1>
        {/* ----------Нету разници между стрелочной и не стрелоной функцией---------- */}
        <button 
          onClick={test1}
          //При событии Click вызывается функция 
          //переданная в onClick={функция}
        >Test1</button>
        <button
          onClick={test2}//
        //При событии Click вызывается функция 
        //переданная в onClick={функция}
        >Test2</button>
        {/* ----------Нету разници между стрелочной и не стрелоной функцией---------- */}

        <button
          onClick={test1()}
        //На момент инициализации функция уже вызвана
        //и по клику уже нечему отрабатывать
        >Test3</button>
        <button
          onClick={test2()}
        //На момент инициализации функция уже вызвана
        //и по клику уже нечему отрабатывать
        >Test4</button>
        <button
          onClick={() => test5()}
          //React вызывает при клике стрелочную функцию
          //Попадает внутрь на вызванную функцию test5 которая вызывает console.log()
        >                       
          test5
        </button>
        <button
          onClick={() => test5}
          //React вызывает при клике стрелочную функцию
          //Попадает внутрь НО функция test5 НЕ ВЫЗВАНА и поэетому не отрабатывает console.log()
        >                       
          test5/1
        </button>
        
        {/* ----------Преобразование инлайн функций в НОРМАЛЬНУЮ---------- */}
        <br/>
        <br/>
        <br/>
        <button
          onClick={() => onSameClick('SAME')}
          //React вызывает при клике стрелочную функцию
          //Попадает внутрь на вызванную функцию onSameClick которая вызывает console.log()
        >
          Do the same action
        </button>
        <button
          onClick={onSameClickHandler('SAME')}
        >
          Do the same action
        </button>
        <br/>
        <br/>
        <br/>
        <br/>
        {arr.map(el=>{
          return(
            <>
            <button onClick={onButtonClick(el)}>Button {el}</button>
            </>
          )
        })}
      </div>
    )
  }
}

export default ButtonsExample;
