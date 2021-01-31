import React from 'react';

import UseEffectExample from './components/use-effect-example/use-effect-example.component';

import './App.css';
import User from './components/user/user.component';
import Post from './components/post/post.component';

const App = props => {
  return (
      <div className='App'>
        <UseEffectExample />
        <User userId={5} />
        <Post postId={15} />
      </div>
  );
};

export default App;
