// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';

// class Block extends Component {
//     state = { displayTransaction: false};

//     toggleTransaction = () => {
//         this.setState({ displayTransaction: !this.state.displayTransaction});
//     }

//     get displayTransaction() {
//       return <div>Display Transaction: {exampleString}</div>
//     }

//   render() {
//     console.log('this.displayTransaction', this.displayTransaction)
//     const { timestamp, hash, data } = this.props.block;

//     const hashDisplay = `${hash.substring(0, 15)}...`;
//     const stringifiedData = JSON.stringify(data);

//     const dataDisplay = stringifiedData.length > 35 ?
//       `${stringifiedData.substring(0, 35)}...` :
//       stringifiedData;

//     return (
//       <div className='Block'>
//         <div>Hash: {hashDisplay}</div>
//         <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
//         <div>Data: {dataDisplay}</div>
//         {this.displayTransaction}
//       </div>
//     )
//   }
// }

// export default Block;


import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Block extends Component {
  state = { displayTransaction: false };

  toggleTransaction = () => {
    this.setState({ displayTransaction: !this.state.displayTransaction });
  }

  get displayTransaction() {
    const { data } = this.props.block;
    const stringifiedData = JSON.stringify(data);

    const dataDisplay = stringifiedData.length > 35 ?
      `${stringifiedData.substring(0, 35)}...` :
      stringifiedData;

    if (this.state.displayTransaction) {
      return (
        <div>
          {JSON.stringify(data)}
          <br />
          <Button
            bsStyle="danger"
            bsSize="small"
            onClick={this.toggleTransaction}
          >
            Show Less
          </Button>
        </div>
      )
    }

    return (
      <div>
        <div>Data: {dataDisplay}</div>
        <Button
          bsStyle="danger"
          bsSize="small"
          onClick={this.toggleTransaction}
        >
          Show More
        </Button>
      </div>
    );
  }

  render() {
    const { timestamp, hash } = this.props.block;

    const hashDisplay = `${hash.substring(0, 15)}...`;


    return (
      <div className='Block'>
        <div>Hash: {hashDisplay}</div>
        <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
        {this.displayTransaction}
      </div>
    )
  }
}
export default Block;