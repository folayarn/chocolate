import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col,Image,Spinner } from "react-bootstrap";
import classes from "./index.module.scss";
import { useParams } from "react-router-dom";

const AlbumList = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  let { id } = useParams();
  const getAlbum = () => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/albums/" +id+"/photos").then((res) => {
      setData(res.data);
      setLoading(false)
    });
  };

  useEffect(() => {
    getAlbum();
  }, [data]);

    return (
 loading ? <Spinner variant={"success"} animation="grow" className={classes.Spinner} /> :(
      
    <Col>
      {data.map((data) => (
        <Row key={data.id}>
          <Col md={"3"}></Col>
          <Col md={"6"}>
           
              <Card bg={"success"} text={"white"} style={{ marginTop: "10px" }}>
                <Card.Body>
                  <Card.Title>
                  <Image src={data.thumbnailUrl} width={"50"} height={"50"} roundedCircle fluid/>
                    {" "}
                    {data.title}{" "}
                  </Card.Title>
                  
                </Card.Body>
              </Card>
          </Col>
          <Col md={"3"}></Col>
        </Row>
      ))}
    </Col>
    )

  );
};

export default AlbumList;
