import React from 'react'; 
export class Datetime extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div>
        <p>Current Date And Time : {this.state.curDT}</p>
      </div>
    );
  }
}
 
// export default Datetime;