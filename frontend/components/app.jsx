import React from 'react';
import Header from "./header/header_container";
import MainFeed from "./main_feed/main_feed_container";

const App = ({ children }) => (
  <div>
    <Header/>
    <MainFeed/>
    { children }
  </div>
);

export default App;
