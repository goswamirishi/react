import React, { useState } from 'react'

export default function TextForm(props) {
    // setText('Enter the value')

    const handleUpClick = () => {
        // console.log('click event triggered');
        setText(text.toUpperCase());
        props.showAlert('converted to uppercase', 'success')
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const handleLwClick = (event) => {
        setText(text.toLowerCase());
        props.showAlert('converted to lowercase', 'success')

    }

    const handleClearClick = (event) => {
        let clerTxt = '';
        setText(clerTxt);
        props.showAlert('Text cleared', 'success')

    }

    const handleExtraSpaces = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed extra spaces', 'success')

    }

    const [text, setText] = useState('');

    // const unCountExtraSpace = (word) => {
    //     let newWord = word.replace(/\s+/g, ' ').trim();
    //     let totWord = newWord.split(" ")[newWord.split(" ").length - 1] === '' ? newWord.split(" ").slice(0, newWord.split(" ").length - 1).length : newWord.split(" ").length;
    //     return totWord;
    //     // text.trim() === '' ? 0 : text.match(/\S+/g).length
    // }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#134 66e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLwClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div >
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Srisha my darling daughter</h1>
                <p>{text.split(" ").filter((tx) => { return tx.length != 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((tx) => { return tx.length != 0 }).length}Minutes read</p>
                <p>{text.length > 0 ? text : 'Please enter your text'}</p>
            </div>
        </>
    )
}
