

import React , {useState}  from 'react'
export default function TextForm(props) {
  const [text , setText] = useState( "");
  const handleonchange= (event)=>
  {
  
setText(event.target.value);  
}

  const handleupclick= ()=>
  {
    let newtext= text.toUpperCase();
    
setText(newtext );
}

const handlelowclick= ()=>
{
  let newtext= text.toLowerCase();
  
setText(newtext );
}
const handlecltext= ()=>
{
  let newtext= '';
  setText(newtext );
}

const changclr= ()=>
{
  alert("im triggred");
  if(document.getElementById("textbox").style.color==='black')
  {
  document.getElementById("textbox").style.color= "orange";
  let newtext= text
  setText(newtext );
  }
  else if(document.getElementById("textbox").style.color==='blue')
  {
    document.getElementById("textbox").style.color= "black";
    let newtext= text
    setText(newtext );
    }
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  

  return (
    
    <div>
        <div className="container my-3"  style= {{color: props.mode==='dark'? 'pink': 'blue'}}>
           <h1>
        {props.heading}
   </h1>
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">{props.l1}</label>
<input style= {{backgroundColor: props.mode==='dark'? 'gray': 'white', color: props.mode==='dark'? 'pink': 'blue'}} className="form-control" id="txt" placeholder="enter Text Here"/>
</div>
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label ">{props.l2}</label>
<textarea className="form-control" id="textbox"  value={text} onChange={handleonchange}  rows="8"></textarea>
<button className=" btn btn-primary  mx - 9" onClick={handleupclick}> convert to upper case</button>
<button className=" btn btn-primary  mx - 9" onClick={handlelowclick}> convert to lower case</button>
<button className=" btn btn-primary  mx - 9" onClick={handlecltext}> clear text</button>
<button className=" btn btn-success  mx - 9" onClick={changclr}> change color</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2"> click to Speak</button>
</div>

</div>
<div className=" my-9 container" id="textbox2" >
  <h1>your text summary</h1>
  <p> no of words are {text.split(" ").length} anf character are {text.length} </p>
  <p> no of words are {0.008* text.split(" ").length} minutes to read </p>
  <h2>preview</h2>
  
  <p > {text.length>0?  text:"ENTER SOME TEXT TO SEE PREVIEW"}</p>
  
</div>
</div>
)
}
