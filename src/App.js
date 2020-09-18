import React from 'react';

function Food({ fav }) {
  return (
    <h3>I love { fav }</h3>
  );
}

function App() {
    return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="김치" />
      <Food fav="스파게티" />
      <Food fav="쭈꾸미" />
      <Food fav="라면" />
    </div>
    );
}

export default App;
