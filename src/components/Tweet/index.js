import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col,Button ,Spinner} from "react-bootstrap";
import TweetComponent from "../TweetComponent"
import classes from "./index.module.scss";

const Tweet = () => {
  const [data, setData] = useState([]);
  const [ visible,setVisible]= useState(false)
  const [loading,setLoading]=useState(false)
  

  const onClick=()=>{
setVisible(!visible)

  }
  const getTweet = () => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
      setLoading(false)
    });
  };

  useEffect(() => {
    getTweet();
  }, []);

  const delFunc=(id)=>{

 axios.delete("https://jsonplaceholder.typicode.com/comments/"+id)
  .then(res => {     
        const posts = data.filter(item => item.id !== id);  
        setData(posts);  
 })
  }

    return (

      loading ? <Spinner variant={"success"} animation="grow" className={classes.Spinner} /> :
      <Row>
<Col md={"12"}>
<Row>
<Col></Col>
<Col>{visible?<TweetComponent/>:null} </Col>
<Col><Button variant={"primary"} onClick={onClick}></Button></Col>
</Row>
</Col>
      
    <Col md={12}>
      {data.map((data) => (
        
        <Row key={data.id}>
          <Col md={"3"}></Col>
          <Col md={"6"}>
              <Card bg={"success"} text={"white"} style={{ marginTop: "10px" }}>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {data.name}{" "}
                  </Card.Title>
                  <Card.Text>
                  {data.body}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant={"danger"} onClick={delFunc(data.id)}>Delete</Button>
                </Card.Footer>
              </Card>
          </Col>
          <Col md={"3"}></Col>
        </Row>
        
      ))}
    </Col>
    </Row>
      
  )
}

export default Tweet;
