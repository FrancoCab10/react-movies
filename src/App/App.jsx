import React from "react";
import { Provider } from 'react-redux'
import { Route } from "react-router-dom";
import store from '../store';
import Frame from '../components/Frame';
import Home from '../pages/Home';
import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';
import E404 from '../pages/E404';
import Login from "../pages/Login";

const App = () => (
  <Provider store={store}>
    <Frame>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/movies" component={MovieList} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route path="*" component={E404} />
    </Frame>
  </Provider>
);

export default App;