import './App.css';
import React from 'react';

class BindExamles extends React.Component {
  constructor() {
    super()
    this.state = {
      currentMounth: 'Februaly'
    }
  }

  showCurrentMounth() {
    //Здесь this не является контектом нашего класса
    //Здесь this перепресвоился на СОБСТВЕНЫЙ контекст метода
    //Который не определен
    console.log(this.state.currentMounth)
  }

  changeCurrentMonth(){
    this.setState({currentMounth:'July'})
  }
  //  если передать в onClick={this.changeCurrentMonth} state не изменится и в консоли будет ошибка
  // this будет неопределен

  render() {

    const showCurrentMounthArrowFunction = () => {
      //Стрелочная функия не имеет своего контекста
      //Она не перебивает контекст класса BindExamples
      //и поэтому при обращении к this мы обращаемся к контексту класса
      console.log(this.state.currentMounth)
    }

    function showCurrentMounthFunction() {
      //Здесь this не является контектом нашего класса
      //Здесь this перепресвоился на СОБСТВЕНЫЙ контекст функции
      //Который не определен
      console.log(this.state.currentMounth)
    }
    const changeCurrentMonthHandler=()=>{
      this.setState({currentMounth:'July'})
    }

    const showCurrentMounthHandler=()=>{
      this.showCurrentMounth()
    }

    return (
      <div>
        <h1>Bind Examles</h1>
        <button
          onClick={this.showCurrentMounth}
          // так работать не будет потому что this к которому мы обращаемся внутри метода showCurrentMounth
          // уже будет button. Избежать этого мы можем вызывая используя стрелочную функцию onClick={()=>this.showCurrentMounth()}
          // либо используя созданный ранее handler 
          // onClick={showCurrentMounthHandler}
          
          // {()=>this.showCurrentMounth()}
          // а вот так уже будет работать потому что благодаря стрелочной функции не теряется контекст
        >
          Check THIS
        </button>

        <button
          onClick={showCurrentMounthArrowFunction}
        >
          Check THIS
        </button>

        <button
          onClick={showCurrentMounthFunction}
        >
          Check THIS
        </button>
        <button
        // onClick={this.changeCurrentMonth.bind(this)}
        // так работает
        // onClick={this.changeCurrentMonth}
        // пишет что не может прочитать setState у underfined
        onClick={changeCurrentMonthHandler}
        // так работает
        >  
          ChangeCurrentMonth
        </button>
        <button onClick={showCurrentMounthHandler}>showCurrentMounthHandler</button>
      </div>
    )
  }
}

export default BindExamles;


