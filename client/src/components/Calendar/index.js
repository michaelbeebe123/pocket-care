import React from 'react'

import "./style.css";
// import React,{Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
// import API from "../utils/API";
// import { Button } from 'reactstrap';
// import { createEventInstance } from '@fullcalendar/core';

// import './main.scss' // webpack must be configured to do this

export default class CalendarComponent extends React.Component {

  handleFormSubmit = () => {
    console.log('test-Calendar')
//     API.saveForm({
//       event_type: this.state.event_type,
//       event_date: this.state.event_date,
//       time_start: this.state.time_start,
//       time_end: this.state.time_end,
//       event_notes: this.state.event_notes
//     }
// )
// .then(() => this.loadForm())
// .catch(err => console.log(err));

  }

  render() {
   
      return (
        <div class="CalendarComponent">
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]} />
     
      </div>
     
    )
   
    
  }

}

