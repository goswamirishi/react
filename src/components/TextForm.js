import React, { useState } from 'react'

export default function TextForm(props) {
    // setText('Enter the value')

    const handleUpClick = () => {
        // console.log('click event triggered');
        setText(text.toUpperCase())
    }
    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter the value here')

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}
