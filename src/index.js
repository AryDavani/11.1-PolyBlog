import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import HomePage from './components/HomePage';
import ShowPost from './components/ShowPost';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/create-post" component={ CreatePost } />
        <Route path="/show-posts/:id" component={ ShowPost } />
        <Route path="/show-posts" component={ PostList } />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
