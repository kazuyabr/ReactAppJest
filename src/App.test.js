import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe("# ESCOPO", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('teste dois apenas de exemplo', () => {
    expect(1).toBe(1);
  });

});
