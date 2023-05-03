import React from 'react';
import '../styles/ScreenButton.css';

function ScreenButton(props) {
  return (
    <button className="screenButton" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default ScreenButton;
