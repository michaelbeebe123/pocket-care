// ---------------------------------
// DEPENDENCIES
// ---------------------------------
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "../utils/API";
// ---------------------------------
// IMPORTING PAGES
// ---------------------------------
// import About from "./pages/About";
// import Form from "./pages/Form";
// import Login from "./pages/Login";
// import Prescriptions from "./pages/Prescriptions";


// ---------------------------------
// IMPORTING COMPONENTS
// ---------------------------------
// import Calendar from "./components/Calendar";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import { General, Allergies, SpecialNeeds } from "./components/Form";
import Prescriptions from "./components/Prescriptions";
import Appointments from "./components/Appointments";

class Form extends Component {
    state = {
        // TODO: ADD DEFAULT STATE VALUES
    }

    componentDidMount() {
        this.loadForm();
    }

    loadForm = () => {
        API.getForm()
            .then(res =>
                this.setState({
                    // TODO:
                })
            )
            .catch(err => console.log(err));
    };

    deleteEntry = id => {
        // TODO:
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // TODO:
    }
}

// TODO:
// render() {};

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What's in your Pocket</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }   