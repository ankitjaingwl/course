import React from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import AddCourse from './Components/AddCourse';
import AllCourse from './Components/AllCourse';
import Course from './Components/Course';
import Home from './Components/Home';
import Header from './Components/Header';
import Menus from './Components/Menus';
import { BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  const btnHandle = () => {
    toast.error("done", {
      position:"top-center"
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
                <Menus />
            </Col>
            
            <Col md={8}>
                <Route exact path='/' component={Home} />
                <Route exact path='/add-course' component={AddCourse} />
                <Route exact path='/view-course' component={AllCourse} />
                <Route exact path='/' component="home" />
                <Route exact path='/' component="home" />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
