import React, { Component }  from 'react';
import API from "../utils/API"; //                               
import CalendarComponent from "../components/Calendar";
// import JumbotronComponent from "../components/Jumbotron";
// import NavComponent from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
// import FormComponent from "../components/Form";
// import {Input, FormButton, DeleteButton} from "../components/Prescriptions";
import AppointmentsComponent from "../components/Appointments";
import "../App.css";
class Calendar extends Component {
    loadForm = () => {
        API.getForm()
          .then(res => this.setState({}))
          .catch(err => console.log(err));
      }
    
      componentDidMount = () => {
        this.loadForm();
      }
 render() {
   return(

       <Container fluid>
           <Row>
               <Col size="md-6">
               <CalendarComponent/>
               <AppointmentsComponent />
               </Col>
           </Row>
       </Container>
       

      
   );
 }
}


export default Calendar;