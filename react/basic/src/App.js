import React, { Component } from 'react';
import './App.css';

import EmailEditor from 'react-email-editor'

class App extends Component {
  render() {
    return (
      <EmailEditor
        projectId={1071}
      />
    );
  }
}

export default App;
