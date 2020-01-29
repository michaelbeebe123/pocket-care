// import React from "react";
// // import "./modal.css";
// import API from "../../utils/API"; 
// import {Button, Modal, Form} from 'react-bootstrap'
// // import TextField from "material-ui/TextField";
// // import RaisedButton from "material-ui/RaisedButton";
// class AppointmentsComponent extends React.Component {
    
//     // state = {
//     //     show: false,
//     //     event_type: '',
//     //     event_date: '',
//     //     event_start: '',
//     //     event_end: '',
//     //     event_notes: ''
//     //     }
//     handleInputChange = (event) => {
//         console.log('test');
//         const { name, value } = event.target;
//         this.setState({
//           [name]: value
//         });
//       }
    
//     handleModal() {
//         if (this.state.show === false) {
//             this.setState({show:true})
//         }
//         else {this.setState({show:false})}
//     }

//     handleFormSubmit = () => {
//         console.log('test-Calendar')
//         API.saveForm({
//           event_type: this.state.event_type,
//           event_date: this.state.event_date,
//           time_start: this.state.time_start,
//           time_end: this.state.time_end,
//           event_notes: this.state.event_notes
//         },
//         this.handleModal()
//     )
//     .then(() => this.loadForm())
//     .catch(err => console.log(err));
    
//       }
    
// render() {
//     return (
//         <div>
//             <Button onClick={()=>{this.handleModal()}}>Create Event</Button>
//             <Modal show={this.state.show} >
//             <Modal.Header closeButton>Create Event</Modal.Header>
//             <Modal.Body>
//                 <Form>
//                 <Form.Group controlId="exampleForm.ControlSelect1">
//     <Form.Label>Event Type</Form.Label>
//     <Form.Control as="select">
//       <option>Doctor's Appointment</option> TODO: Double check these options
//       <option>Prescription Refill</option>
//       <option>Social</option>
//       <option>Other</option>
//     </Form.Control>
//   </Form.Group>

// <Form.Group controlId="date.input"> TODO: Check the fullcalendar date time params, add validation
//     <Form.Label>Date</Form.Label>
//     <Form.Control  type="text" placeholder="YYYY-MM-DD" name={'event_date'} value={this.state.event_date} onChange={this.handleChangeInput} />
// </Form.Group>
// <Form.Group controlId="time.input">
//     <Form.Label>Time</Form.Label>
//     <Form.Control type="text" placeholder="Event start" name={'event_start'} value={this.state.event_start} onChange={this.handleChangeInput} />
//     <Form.Control type="text" placeholder="Event end" name={'event_end'} value={this.state.event_end} onChange={this.handleChangeInput} />
// </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Event Notes</Form.Label>
//     <Form.Control as="textarea" rows="3" name={'event_notes'} value={this.state.event_notes} onChange={this.handleChangeInput} />
//   </Form.Group>
  
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={(this.handleFormSubmit)}>Submit</Button>
               
//             </Modal.Footer>
//             </Modal>
            
//         </div>
//     )
// }



// }
// export default AppointmentsComponent;
