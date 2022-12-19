import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
   <Container style={{width:"400px"}}>
      <Row>
        <Col>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
   </Container>
  );
}

export default App;
