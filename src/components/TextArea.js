import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextArea(props) {

  const handleUpClick = () => {
    // console.log('UpperCase Button was Clicked!');
    let newText = text.toUpperCase();
    setText(newText);
    props.giveAlert('Converted to UpperCase', 'success');
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.giveAlert('Converted to LowerCase', 'success');
  };
  
  const handleClearText = () => {
    // let newText = text.toLowerCase();
    setText('');
    props.giveAlert('Cleared Text', 'success');
  };
  
  const handleChange = (event) => {
    // console.log('Change');
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
    <div className='container my-2'>
        <h1>{props.header}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="textBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            LowerCase
        </button>  
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
            Clear
        </button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p><hr />
        <h3>Preview:</h3>
        <div className="card">
            <div className="card-body" style={{ whiteSpace: 'pre-wrap' }}>
                {text.length>0?text:"Enter something to preview here..." }
            </div>
        </div>
    </div>
    </>
  )
}
