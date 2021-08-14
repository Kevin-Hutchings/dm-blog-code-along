import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';
import Post from './Components/Post/Post';

export default (
   <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Post} path="/topics/:id" />
      <Route component={TopicList} path="/topics" />
   </Switch>
)