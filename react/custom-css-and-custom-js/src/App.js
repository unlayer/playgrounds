import React, { Component } from 'react';
import './App.css';

import EmailEditor from 'react-email-editor'

class App extends Component {
  render() {
    return (
      <EmailEditor
        projectId={1071}
        options={{
          customCSS: [
            `
              body {
                background-color: yellow;
              }
            `
          ],
          customJS: [
            `
              console.log('I am custom JS!');
            `
          ]
        }}
      />
    );
  }
}

export default App;
