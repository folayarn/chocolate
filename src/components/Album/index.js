import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col,Spinner } from "react-bootstrap";
import classes from "./index.module.scss";
import { Link, useParams } from "react-router-dom";

const Album = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  let { userId } = useParams();
  const getAlbum = () => {
     setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      const f = res.data.filter((e) => e.userId === userId);
      setData(f);
      setLoading(false)
    });
  };

  useEffect(() => {
    getAlbum();
  }, []);

    return (

      loading ? <Spinner variant={"success"} animation="grow" className={classes.Spinner} /> :(
    <Col>
      {data.map((data) => (
        
        <Row key={data.id}>
          <Col md={"3"}></Col>
          <Col md={"6"}>
            <Link to={"/album/"+data.id}>
              <Card bg={"success"} text={"white"} style={{ marginTop: "10px" }}>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {data.title}{" "}
                  </Card.Title>
                  
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={"3"}></Col>
        </Row>
        
      ))}
    </Col>
      )
  );
};

export default Album;
