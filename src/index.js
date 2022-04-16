import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
import CompA from "./ComponentA";
import CompB from "./ComponentB";
import './index.css';

// Configuração REACT ---------------------------------------------------------------

// function sum(a, b) {
//   return a + b
// }

// function primeiroJSX() {
//   return (
//     <div className='teste'>
//       <h1>Thiago Veiga - Introdução ao React JS</h1>
//       <h3>Soma: {sum(4, 7)} </h3>
//     </div>
//   )
// }

// const App = () => {

//   return (
//     <div className='App'>
//       {primeiroJSX()}
//     </div>
//   )
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement) 





// Renderização REACT ---------------------------------------------------------- 

// const element = 'Thiago Veiga'
// const element2 = <h1>Hello World</h1>

// function App () {
//   return (
//     <div>
//       {element}
//       {element2}
//     </div>
//   )
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App /> , rootElement) 




// Componentes e Propriedades REACT ---------------------------------------------------------- 

// function soma(a, b) {
//   alert(a + b)
// } 

// function App() {

//   return (
//     <div className='App'>
//       Hello World
//       <Button onClick={() => soma(10, 20)} name="Thiago Veiga" />
//       <CompA>
//         <CompB>
//           <Button onClick={() => soma(50, 20)} name="ABCDE" />
//         </CompB>
//       </CompA>
//       {/* Aqui dentro pode ter vários componentes */}
//     </div>
//   )
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App /> , rootElement) 




// Ciclo de vida REACT ----------------------------------------------------------

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
  