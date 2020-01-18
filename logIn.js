
import React from 'react';
import DocumentTitle from 'react-document-title';

export default class LoginPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login: User Name</h3>
              <input/>
              <hr />
              <h3>Password:</h3>
              <input/>
            </div>
          </div>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;