import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';



class App extends Component {
  
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then(response => response.json())
      .then(json => this.setState({ walletInfo: json }));
  }

  render() {
    
    const { address, balance } = this.state.walletInfo;

    return (
      <div className='App'>
        <br />
        <div><span style={{ color: 'lightgreen' }}>Hey , </span><span style={{ color: 'lightgreen' }}>Let's Explore the sparkles of new space token </span></div>
        <img className='logo' src={logo} alt="loading..."/>
        <br />
        <div><span style={{ color: 'lightgreen' }}>Welcome to our new  blockchain...</span></div>
        <br />
        <div><Link to='/blocks'>Blocks</Link></div>
        <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
        <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
        <br />
       <div className='WalletInfo'>
       <div><span style={{ color: 'red' }}>Wallet Address:</span> {address}</div>
        <div><span style={{ color: 'red' }}>Your Current Balance:</span> {balance}</div>
       </div>
      </div>
   
    );
  }
}
export default App;