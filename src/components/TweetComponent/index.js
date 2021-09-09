import React,{useState,useEffect} from "react"
import axios from 'axios'
import {Card,Row,Col} from "react-bootstrap"
import classes from "./index.module.scss"



const TweetComponent=()=>{
  const character = 120

  let value = ''
  if(value){
    value =value.substr(0,character)
  }

  const [textAreaValue, setTextAreaValue] = useState();
  const [textCount, setTextCount] = useState(value.length <= character ? character - value.length: 0);
  const [countColor, setCountColor] = useState((character - value.length) <= 15 ? "red":'black' );
  
  let onChange = (e) => {
    setTextAreaValue(e.target.value);
    setTextCount(character - e.target.value.length);
        if ((character - e.target.value.length) <= 15) {
        setCountColor("red");
    } else {
        setCountColor("black");
    }
  };
  
 

return(

<div className={classes.textarea}>
        <textarea rows="2"
         maxLength={character} 
        className={classes.multiText} 
        onChange={onChange}
        value={textAreaValue}
        name="tweet"
        ></textarea>
        <span className={classes.Span} style={{ color: countColor }}>({textCount})</span>
    </div>
)
}

export default TweetComponent