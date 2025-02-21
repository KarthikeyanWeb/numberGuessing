// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Result from "./Result";

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {

  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);

    console.log(term);
  }

  return (
    <div className="container">
     <div className="head">
<label htmlfor="term">Guess the number between 1 to 10  (ans : {secretNum})</label>
     </div>
     <input id="term" type="text" name="term" onChange={handleChange} />
     <Result secretNum={secretNum}  term={term}/>
    </div>
  );
}

export default App;
