import React, { useState } from "react";





export default function Form(props) {
  const [text, setText] = useState("");

/*   const [weight, setStyle] = useState({
    fontWeight:"normal"
  });
 */  
  const upperCase = () => {
    //  console.log('hjbew'+text);
    let text1 = text.toUpperCase();
    setText(text1);
  };
  const lowerCase = () => {
    //  console.log('hjbew'+text);
    let text1 = text.toLowerCase();
    setText(text1);
  };
  const clearText = () => {
    //  console.log('hjbew'+text);
    let text1 = "";
    setText(text1);
  };

  const handleOnChange = (event) => {
    // console.log('hjbew');
    setText(event.target.value);
  };
  const copyText = () => {
    var text = document.getElementById("my-form");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  };

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  
/* const bold =()=> {

  return {fontWeight:weight==='normal'?'bold':'normal'};
}
 */


  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.name} </h3>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-form"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary mx-2" onClick={upperCase}>
          Convert to uppercase
        </button>
        <button    disabled={text.length===0} className="btn btn-primary mx-2 " onClick={lowerCase}>
          Convert to lowercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copyText}>
          Copy text{" "}
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 " onClick={removeExtraSpace}>
          Remove extra Space{" "}
        </button>
{/*         <button disabled={text.length===0} className="btn btn-primary " onClick={bold}>
          Convert to bold{' '}
        </button>
 */}      
 </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Text summary</h1>
        <p>
         {
          `The Total words is ${text.split(" ").filter((element)=>{return element.length!==0}).length} and character is
          ${text.length}`
         } 
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
