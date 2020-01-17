import React from 'react';
import './App.css';
import capitao from './capitao.png'

  class App extends React.Component{
    render() {
      return (
        <div className="App">
          <header className='caixa1'>
            <h1 className='titulo'>
                To Do Flix
            </h1>
          
          <div className='caixa2'>
            <p className='subtitulo'>
              categorias
            </p>
            <button className='botao'>
              adicionar filme
            </button>
            
            
          </div>
          </header>
          <div >
            <img src={capitao} className='imagem'/>
          </div>
        </div>
      );
    }
  }
  

export default App;
