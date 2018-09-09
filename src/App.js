import React, { Component } from 'react';
import Board from './components/Board';
import logo from './logo.svg';
import styled, { keyframes } from "styled-components"
// import './App.css';

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const Container = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AppLogo src={logo} alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get start, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
