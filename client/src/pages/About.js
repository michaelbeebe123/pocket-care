// TODO: WE PROBABLY DON'T NEED THIS FILE

import JumbotronComponent from "./components/Jumbotron";
import NavComponent from "./components/Nav";
import {General, Allergies, SpecialNeeds} from "./components/Form";
import PrescriptionsComponent from "./components/Prescriptions";
import AppointmentsComponent from "./components/Appointments";
import "../../App.css";
 function About() {
   return(
       <Container fluid>
           <Row>
               <Col size="md-6">
               <Calendar/>
               </Col>
           </Row>
       </Container>
       

      
   );
 }



export default About;