import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, reset }) => {
  return (

    <div className="container">
      <div className="counter" >{counter}</div>
      <div className="buttons1">
        <button onClick={inc} className="plus"><img src="images/Plus.svg" alt="plus"></img></button>
        <button onClick={dec} className="minus"><img src="images/Minus.svg" alt="minus"></img></button>
        <button onClick={reset} className="reset"><img src="images/Reset.svg" alt="reset"></img></button>
      </div>
      <div className="buttons2">
        <button className="download"><img src="images/download.svg" alt="down"></img></button>
        <button className="upload"><img src="images/upload.svg" alt="up"></img></button>
      </div>
    </div>

  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}



export default connect(mapStateToProps, actions)(Counter);