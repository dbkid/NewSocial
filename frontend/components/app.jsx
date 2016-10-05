import React from 'react';
import Header from "./header/header_container";

const App = ({ children }) => (
  <div>
    <h1>New Social</h1>
    <Header/>
    { children }
  </div>
);

export default App;
