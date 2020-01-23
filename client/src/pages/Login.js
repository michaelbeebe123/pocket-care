<<<<<<< HEAD
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CalendarComponent from "../components/Calendar";
// import JumbotronComponent from "../components/Jumbotron";
// import NavComponent from "../components/Nav";
// import {General, Allergies, SpecialNeeds} from "../components/Form";
// import {Input, FormButton, DeleteButton} from "../components/Prescriptions";
// import AppointmentsComponent from "../components/Appointments";
// import { Card, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';


// const LoginForm = ({
//   onSubmit,
//   onChange,
//   errors,
//   user
// }) => (
//   <Card className="container">
//     <form action="/" onSubmit={onSubmit}>
//       <h2 className="card-heading">Login</h2>

//       {errors.summary && <p className="error-message">{errors.summary}</p>}

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Email"
//           name="email"
//           errorText={errors.email}
//           onChange={onChange}
//           value={user.email}
//         />
//       </div>

//       <div className="field-line">
//         <TextField
//           floatingLabelText="Password"
//           type="password"
//           name="password"
//           onChange={onChange}
//           errorText={errors.password}
//           value={user.password}
//         />
//       </div>

//       <div className="button-line">
//         <RaisedButton type="submit" label="Log in" primary />
//       </div>

//       <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
//     </form>
//   </Card>
// );
=======
import CalendarComponent from "../components/Calendar";
import JumbotronComponent from "../components/Jumbotron";
import NavComponent from "../components/Nav";
import {General, Allergies, SpecialNeeds} from "../components/Form";
import {Input, FormButton, DeleteButton} from "../components/Prescriptions";
// import AppointmentsComponent from "../components/Appointments";
import React, { PropTypes } from 'react';
import { Link } from "react-router-dom";
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
);
>>>>>>> 40ef066a7020925dbe480c1618516c7f38de9e6c

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired
// };

<<<<<<< HEAD
// export default LoginForm;
=======
export default LoginForm;
>>>>>>> 40ef066a7020925dbe480c1618516c7f38de9e6c
