import React, { useState } from "react";

export default function TextInput(props) {
  const [text, setText] = useState("");

  const onUpperCaseClickHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase", "success");
  };

  const onLowerCaseClickHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase", "success");
  };

  const onClearClickHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Input Area Cleared", "success");
  };

  const handleCopy = () => {
    
    navigator.clipboard.writeText(text);
    props.showAlert(" Text Copied", "success");
  };

  const handlerRemoveExtraSpace = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert(" Extra spaces removed", "success");
  };

  const onChangeHandler = (event) => {
    // console.log("on text change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="m-3">
          <h3>Enter Text To Perform Operations</h3>
        </div>
        <div className="mb-3 ">
          <textarea
            value={text}
            onChange={onChangeHandler}
            style={{
              backgroundColor: props.mode === "dark" ? "#252422" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={onUpperCaseClickHandler}
        >
          Uppercase
        </button>
        <button disabled = {text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={onLowerCaseClickHandler}
        >
          Lowercase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={onClearClickHandler}>
          Clear
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy
        </button>
        <button disabled = {text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handlerRemoveExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        
          
            <p>
              {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
       
       
        <h2>{text.length > 0 ? "Your Text Preview" : "Nothing to Preview"}</h2>
        <p>{text.length > 0 ? text : "Enter Text To Analyse"}</p>
      </div>
    </>
  );
}
