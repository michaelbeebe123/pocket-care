import React from 'react'
import "../../App.css";
import "./style.css";
// import React,{Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { Button } from 'react-bootstrap';
import { createEventInstance } from '@fullcalendar/core';


// import './main.scss' // webpack must be configured to do this



export default class CalendarComponent extends React.Component {

  render() {
   
      return (
        <div class="CalendarComponent">
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]} />
     
      </div>
     
    )
   
    
  }

}

