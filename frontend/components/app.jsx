import React from 'react';
import Header from "./header/header_container";
import MainFeed from "./main_feed/main_feed_container";

const App = (props) => {
  return (
  <div>
    <Header/>
    { props.children }
  </div>
)};

export default App;
