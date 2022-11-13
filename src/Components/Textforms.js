import React, {useState} from 'react'

export default function TextForms(props) {
    const handleupClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to uppercase","success")
    }
    const handleloClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase","success")
    }
    const handleclearClick =()=>{
        let newText = "";
        setText(newText)
        props.showalert("Text cleared","success")
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const spacehandleClick=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert("Extra space removed","success")
    }
    const handlecopyText=()=>{
       let myText = document.getElementById("myText");
       myText.select();
       navigator.clipboard.writeText(myText.value);
       props.showalert("Text is copied to clipboard","success")
    }
    const [text, setText] = useState("")
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8" style={{backgroundColor: props.mode==='dark'?'black':'rgb(242,242,242)',color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Click To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleloClick}>Click To Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={spacehandleClick}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handlecopyText}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008*text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}