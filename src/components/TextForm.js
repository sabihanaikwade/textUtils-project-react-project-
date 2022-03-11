
import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        document.title='TextUtils-UpperCase '
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        document.title='TextUtils-LowerCase'
    }
    const handleOnChange=(event)=>{
        // console.log("uppercase clicked")
        setText(event.target.value);
    }
    const Clear=()=>{
        setText(" ")
    }
    const [text, setText] = useState('');
    //text='new text'; //wrong way to change the text
    //setText('new text') correct way to change the text
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':"white",color:props.mode==='dark'?'white':"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear the text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':"black"}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview here"}</p>
        </div>
        </>
    )
}
