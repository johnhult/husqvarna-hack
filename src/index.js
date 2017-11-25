import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home/Home.jsx';
import Problem from 'containers/Problem/Problem.jsx';
import Solution from 'containers/Solution/Solution.jsx';
import Technical from 'containers/Technical/Technical.jsx';
import Business from 'containers/Business/Business.jsx';
import Footer from 'containers/Footer/Footer.jsx';
import 'index.css';


// Here you can add global headers and footers that will stay the same over different pages
const App = () => (
	<div>
		<Main />
	</div>
);


// Add other routes inside Switch to change pages here
const Main = () => (
	<main>
        <Home />
        <Problem />
        <Solution />
        <Technical />
        <Business />
        <Footer />
	</main>
);

ReactDOM.render((
    <App />
), document.getElementById('root')
);
