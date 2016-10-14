import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import StoryDisplayPageContainer from "./story_display/story_display_page_container";
import { fetchSelectedStory } from './../actions/selected_story_actions';
import { fetchAuthorShow } from './../actions/author_actions';
import MainFeed from "./main_feed/main_feed_container";
import AuthorDisplayPageContainer from "./author_display/author_display_page_container";
import StoryFormPageContainer from './story_form/story_form_page_container';
import {fetchTopicsIndex} from './../actions/topic_actions';




const Root = ({ store }) => {

  const fetchSelectedStoryOnEnter = (nextState) => {
    store.dispatch(fetchSelectedStory(nextState.params.storyId));
  };

  const fetchAuthorShowOnEnter = (nextState) => {
    store.dispatch(fetchAuthorShow(nextState.params.authorId));
  };


  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainFeed}/>
            <Route path="stories/:storyId" component={StoryDisplayPageContainer} onEnter={fetchSelectedStoryOnEnter}></Route>
            <Route path="authors/:authorId" component={AuthorDisplayPageContainer} onEnter={fetchAuthorShowOnEnter}></Route>
        </Route>
        <Route path="/writestory" component={StoryFormPageContainer}></Route>
      </Router>
    </Provider>
  )
}

export default Root;
