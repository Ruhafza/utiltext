import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    
    }
    const handleLowerClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to lowercase","success")
    }
    const handleClearClick=()=>{
      let newtext="";
      setText(newtext);
      props.showAlert("Text cleared","success")
    }
    const handleT2SClick=()=>{
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleCopyClick=()=>{
      var copyText = document.getElementById("areatext");
      props.showAlert("Copied to clipboard","success")

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
    }

    const toggleStyle=()=>{
      if (myStyle.color==='black')
      {
        setmyStyle({
          color: 'white',
          backgroundColor: 'black'
        })
        setbtnbtn("Dark mode enabled")
        document.body.style.backgroundColor='#1F1B24'
      
      }
      else
      {
        setmyStyle({
          color: 'black',
          backgroundColor: 'white'
        }) 
        setbtnbtn("Dark mode disabled")
        document.body.style.backgroundColor='white'
      }
    }
    
    const [btnbtn, setbtnbtn] = useState("Dark mode disabled")

    const [text,setText]=useState("")
    
    const [myStyle,setmyStyle] = useState({
      color:'black',
      backgroundColor:'white'
    })



    

  return (
    <>
      <div className="container" style={{color:myStyle.color==='white'?'white':'black'}}>
    <h1>Enter the text here</h1>
  </div>
    
      <div className="container">
        
    <div className="mb-3">
      
  <textarea className="form-control" style={myStyle} value={text} onChange={handleOnChange} id="areatext" rows="10"></textarea> 
  <div className="form-check form-switch">
  <input className="form-check-input" onClick={()=>{toggleStyle();} }type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault " style={{color:myStyle.color==='white'?'white':'black'}}>{btnbtn}</label>
</div>


</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>change to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerClick}>change to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
<button className="btn btn-primary mx-1" onClick={handleT2SClick}>text to speech</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>copy to clickboard</button>



</div>
<div className="container my-3" style={{color:myStyle.color==='white'?'white':'black'}} id="enter">
  <h4>Text Summary</h4>
  <p>{text.length>0?text.trim().split(" ").length:0} words and {text.length} characters</p>
  <p>{(text.length>0?text.trim().split(" ").length:0)*0.008} minutes taken to read</p>
</div>
</>
  )
}
