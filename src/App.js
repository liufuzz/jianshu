import React, { PureComponent } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Note from './pages/note/loadable';
import Topic from './pages/topic';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path='/' exact component={Home}></Route>
            <Route path='/topic' exact component={Topic}></Route>
            <Route path='/note/:id' exact component={Note}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
