import React, { useState } from 'react'

export default function TextForm(props) {
    // setText('Enter the value')

    const handleUpClick = () => {
        // console.log('click event triggered');
        setText(text.toUpperCase());
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const handleLwClick = (event) => {
        setText(text.toLowerCase());
    }

    const handleClearClick = (event) => {
        let clerTxt = '';
        setText(clerTxt);
    }

    const handleExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to lowercase</button>
                <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div >
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Srisha my darling daughter</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <p>{text.length > 0 ? text : 'Please enter your text'}</p>
            </div>
        </>
    )
}
