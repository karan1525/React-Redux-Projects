import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This compement should produce some HTML

//ES2016 syntax (similar to var but a constant)
// const App = function() {
//   //JSX -> subset of JS that allows us to write HTML like JS
//   return <div>Hi!</div>;
// }

//Rule -> 1 component per file

//ES6 syntax
const App = () => {
  //JSX -> subset of JS that allows us to write HTML like JS
  return <div>Hi!</div>;
}

//Valid JSX if empty tag -> <app />

/**
Get's converted to HTML from JSX
return <o1>
        <l1> 1 </l1>
      </ol>;
*/
//Why use JSX? Creates HTML that is pushed to the DOM

// Take this compement's generated HTML and put on page (in the DOM)

//Doesn't work (react not defined)
// React.render(App)

//Also need to create the reactDOM. React JS only knows how to create elements
// Currently passing class and not the instance of it
// ReactDOM.render(App)

// Container is not a DOM element
// ReactDOM.render(<App />)

//Need to provide target DOM (where to render it on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
