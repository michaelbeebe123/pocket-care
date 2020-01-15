import React from 'react'
import "../../App.css";
// import React,{Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'


// import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]} />
    )
  }

}

