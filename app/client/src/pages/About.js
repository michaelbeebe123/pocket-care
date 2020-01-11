import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Calendar from "../components/Calendar";

<FullCalendar
  defaultView="dayGridMonth"
  plugins={calendarPlugins}
  weekends={true}
  events={[
    { title: 'event 1', date: '2020-04-01' },
    { title: 'event 2', date: '2020-04-02' }
  ]}
  />


export default About;