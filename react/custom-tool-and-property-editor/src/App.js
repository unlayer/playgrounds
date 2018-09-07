import React, { Component } from 'react';
import './App.css';

import EmailEditor from 'react-email-editor'

class App extends Component {
  render() {
    return (
      <EmailEditor
        projectId={1071}
        options={{
          customJS: [
            window.location.protocol + '//' + window.location.host + '/custom.js',
          ]
        }}
      />
    );
  }
}

export default App;
