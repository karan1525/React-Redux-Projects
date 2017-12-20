import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// Only have the top level parent fetch all data

// need to provide actual path to a file you created yourself.
// if library, don't need to do this.

const API_KEY = 'AIzaSyAbBcmI0G6nNbPTNtnyF3QrLNl3GHKGIvI';

//Comments are notes

// Create a new component. This compement should produce some HTML

//ES2016 syntax (similar to var but a constant)
// const App = function() {
//   //JSX -> subset of JS that allows us to write HTML like JS
//   return <div>Hi!</div>;
// }

//Rule -> 1 component per file

//ES6 syntax (convert app to class based component)
// const App = () => {
//   //JSX -> subset of JS that allows us to write HTML like JS
//   return(
//    <div>
//   		<SearchBar />
//   </div>
//   );
// }

class App extends Component{

  constructor(props) {
  	super(props);

  	this.state = {videos: [] };


	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		this.setState({ videos });
		//this.setState( { videos: videos } ) //only if the key and property is the same
	});
  }

  render () {
  	return(
   	<div>
  			<SearchBar />
  			<VideoList  videos={this.state.videos} />
  	</div>
  	);
  }
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