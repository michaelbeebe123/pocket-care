import React from "react";
// import "./modal.css";
import {Button, Modal, Form} from 'react-bootstrap'
export default class AppointmentsComponent extends React.Component {
    
    state = {
        show: false
    }
    constructor()
    {
        super()
        this.state.show = false 
    }
    handleModal() {
        this.setState({show:!this.state.show})
    }
render() {
    return (
        <div>
            <Button onClick={()=>{this.handleModal()}}>Create Event</Button>
            <Modal show={this.state.show} onHide={()=> this.handleModal()}>
            <Modal.Header closeButton>Create Event</Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Event Type</Form.Label>
    <Form.Control as="select">
      <option>Doctor's Appointment</option> TODO: Double check these options
      <option>Prescription Refill</option>
      <option>Social</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>

<Form.Group controlId="date.input"> TODO: Check the fullcalendar date time params, add validation
    <Form.Label>Date</Form.Label>
    <Form.Control type="text" placeholder="Day-Month-Year" />
</Form.Group>
<Form.Group controlId="time.input">
    <Form.Label>Time</Form.Label>
    <Form.Control type="text" placeholder="Event start" />
    <Form.Control type="text" placeholder="Event end" />
</Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Event Notes</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{this.handleModal()}}>Submit</Button>
               
            </Modal.Footer>
            </Modal>
            
        </div>
    )
}



}
