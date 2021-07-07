import './App.scss';
// import SideBar from'./component/sideBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row} from 'react-bootstrap'
import Signup from './component/Signup';
import Signin from './component/Signin';
import SideBar from './component/sideBar';
import AuthProvider from './context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './component/home';
import PrivateRoute from "./PrivateRoute"
function App() {
  return (
    <Container className = "w-100 d-flex flex-column justify-content-center">
      <Router>
      <AuthProvider>
        <Switch>
        <Row>
          <Col sm = {4} xs = {6} md = {4}>
            <SideBar />
          </Col>
          <Col sm = {8} xs = {12} md = {8}>
            <div className="header w-100 mb-5">
              <p className = "title">Chat System</p>
            </div>
            <PrivateRoute exact path = "/" component = {Home} />
            <div className = "w-100 d-flex justify-content-center ">
              
              <Route path = "/signup" component = {Signup} />
              <Route path = "/signin" component = {Signin} />
            </div>
          </Col>
        </Row>
        </Switch>
      </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
