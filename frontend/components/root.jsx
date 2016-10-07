import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import StoryDisplayPageContainer from "./story_display/story_display_page_container";
import { fetchSelectedStory } from './../actions/selected_story_actions';
import MainFeed from "./main_feed/main_feed_container";




const Root = ({ store }) => {

  const fetchSelectedStoryOnEnter = (nextState) => {
    store.dispatch(fetchSelectedStory(nextState.params.storyId));
  };


  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainFeed}/>
              <Route path="stories/:storyId" component={StoryDisplayPageContainer} onEnter={fetchSelectedStoryOnEnter}></Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
