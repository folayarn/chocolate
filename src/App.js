import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import"./App.scss";
import ArtistPage from "./components/ArtistPage";
import Album from "./components/Album";
import AlbumList from "./components/AlbumList";
import { Switch, Route ,Link} from "react-router-dom";

function App() {
  

  let routes = (
    <Switch>
      <Route exact path="/">
        <ArtistPage />
      </Route>
       <Route exact path="/album/:id">
        <AlbumList/>
      </Route>
      <Route path="/:userId">
        <Album/>
      </Route>
     
    </Switch>
  );
  return (
    <>
      <Container>
      <Row>
      <Col md={"12"}> 
      <Link to="/" className="goBack">Go Home</Link>
      </Col>
      
      {routes}
      </Row>
      </Container>
    </>
  );
}

export default App;
