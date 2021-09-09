import React from "react"
import {Row,Col,Tabs,Tab} from "react-bootstrap"
import ListArtist from "../ListArtist"
import Tweet from "../Tweet"



const ArtistPage=()=>{


return(
<>
<Row >
<Col md={"12"} className="text-center"> <h3>Display all artist</h3></Col>

<Row>
<Col md={"2"}></Col>
<Col md={"8"}>
<Tabs defaultActiveKey="tweet" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="tweet" title="Tweets">
    <Tweet/>
  </Tab>
  <Tab eventKey="artist" title="All Artist">
    <ListArtist/>
  </Tab>
</Tabs>
</Col>
<Col md={"2"}></Col>
    </Row>
</Row>
</>
)
}


export default ArtistPage