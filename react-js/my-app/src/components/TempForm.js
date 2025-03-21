import React, {useState} from 'react'



export default function Form(props) {
    const handleUpClick = () => {
        // console.log("Converted to Upper Case");
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick = () => {
        // console.log("Converted to Lower Case");
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick = () => {
        // console.log("Cleared the message box");
        let newtext = ' ';
        setText(newtext)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
    }
    
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Enter text here');
    //setText("new text");

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" autoComplete='current-email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="InputPassword1" autoComplete='current-password'/>
                </div>
            </form>
            <div className="mb-3">
                <label htmlFor="message"  className="form-label">Message:</label><br />
                <textarea name="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black', border: '1px solid black'}} id="messageBox" rows="8"></textarea>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="Check1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out.</label>
            </div>
            {/* mx-2 is to create distancing betweent the buttons */}
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>    {/* my-2 is for distancing betwee the containers */}
            <div>
                <h1 className='heading'>Count: {count}</h1>
                <button className='btn btn-primary mx-2' onClick={() => setCount(count + 1)}>Increase</button>
                <button className='btn btn-primary mx-2' onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
            <h2>Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>   {/* calculates the time a person take to read the words */}
            <h2>Peview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
