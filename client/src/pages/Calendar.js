import React, { Component }  from 'react';
import CalendarComponent from "../components/Calendar";
import JumbotronComponent from "../components/Jumbotron";
import NavComponent from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
// import FormComponent from "../components/Form";
// import {Input, FormButton, DeleteButton} from "../components/Prescriptions";
import AppointmentsComponent from "../components/Appointments";
import "../App.css";
class Calendar extends Component {
 render() {
   return(

       <Container fluid>
       <JumbotronComponent />
       <NavComponent />
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