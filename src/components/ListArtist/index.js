import React,{useState,useEffect} from "react"
import axios from 'axios'
import {Card,Row,Col,Spinner} from "react-bootstrap"
import classes from "./index.module.scss"
import {Link} from 'react-router-dom'



const ListArtist=()=>{
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const getUser = () => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      setLoading(false)
    });
  };

  useEffect(() => {
    getUser();
  }, [data]);
 

return(
loading ? <Spinner variant={"success"} animation="grow" className={classes.Spinner} /> :(
<Col>
{
data.map((data) =>(
 
<Row key={data.id}>
<Col md={"3"}></Col>
<Col md={"6"}>

<Card bg={"success"} text={"white"} style={{marginTop:"10px"}}>
  <Card.Body>
    <Card.Title> <span className={classes.profileImage}>
{data.name.charAt(0)}
</span>{data.name} <em style={{color:"grey"}}>{"@"+data.username}</em></Card.Title>
    <Card.Text>
      website: <a href={"https://"+ data.website}>https://{data.website}</a> <br/>
       phone number: <a href={"tel:"+ data.phone}>{data.phone}</a> <br/>
    </Card.Text>

    <Card.Text>
     <Link to={`/${data.id}`} > <span className={classes.linkCard}> View Albums</span>
     
     </Link>
    
    </Card.Text>
  </Card.Body>
</Card>

</Col>
<Col md={"3"}></Col>
</Row>
)
)
}

</Col>
)
)
}

export default ListArtist