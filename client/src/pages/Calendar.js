import React, { Component } from 'react';
import API from "../utils/API";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { Col, Row, Container } from "../components/Grid";
import { Button, Modal, Form } from 'react-bootstrap'
import "../App.css";


class Calendar extends Component {

  state = {
    events: [],
    show: false,
    event_type: '',
    event_date: '',
    event_start: '',
    event_end: '',
    event_notes: ''
  }
  handleInputChange = (event) => {
    console.log('test');
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleModal() {
    if (this.state.show === false) {
      this.setState({ show: true })
    }
    else { this.setState({ show: false }) }
  }

  handleFormSubmit = () => {
    console.log('test-Calendar')
    API.saveForm({
      event_type: this.state.event_type,
      event_date: this.state.event_date,
      event_start: this.state.event_start,
      event_end: this.state.event_end,
      event_notes: this.state.event_notes
    },
      this.handleModal()
    )
      .then(() => this.loadForm())
      .catch(err => console.log(err));

  }
  loadForm = () => {
    API.getForm()
      .then(res => {
        console.log("Posts", res.data);
        this.setState({
          events: res.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.loadForm();
  }
  render() {
    return (

      <Container fluid>
        <br></br>
        <Row>
          <Col size="md-6">
            <div class="CalendarComponent">
              <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                events={[]}
              />
              <br></br>

            </div>

            <div>
              <Button onClick={() => { this.handleModal() }}>Create Event</Button>
              <br></br>


              <Modal show={this.state.show} >
                <Modal.Header closeButton>Create Event</Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Event Type</Form.Label>
                      <Form.Control name={'event_type'} as="select" value={this.state.event_type} onChange={this.handleInputChange}>
                        <option defaultValue>Select an Option</option>
                        <option value="Doctor's Appointment">Doctor's Appointment</option>
                        <option value="Prescription Refill">Prescription Refill</option>
                        <option value="Social">Social</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="date.input">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="text" placeholder="YYYY-MM-DD" name={'event_date'} value={this.state.event_date} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="time.input">
                      <Form.Label>Time</Form.Label>
                      <Form.Control type="text" placeholder="Event start" name={'event_start'} value={this.state.event_start} onChange={this.handleInputChange} />
                      <Form.Control type="text" placeholder="Event end" name={'event_end'} value={this.state.event_end} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Event Notes</Form.Label>
                      <Form.Control as="textarea" rows="3" name={'event_notes'} value={this.state.event_notes} onChange={this.handleInputChange} />
                    </Form.Group>
                  </Form>
                </Modal.Body>


                <Modal.Footer>
                  <Button onClick={(this.handleFormSubmit)}>Submit</Button>

                </Modal.Footer>
              </Modal>

            </div>
            <br></br>
          </Col>
        </Row>
      </Container>



    );
  }
}


export default Calendar;