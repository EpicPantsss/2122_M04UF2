import logo from './logo.svg';
import './titles.css';
import Titulillo from './titulillo.js';
import Tit_body from './titulillo_body.js';
import tweets from './tweets.js';
import pieazo from './pieazo.js';

function App() {
  return (
    <div className="App">
	  <Titulillo />
	  <Tit_body />
	  <tweets />
	  <pieazo />
	<header className="App-header">
	  </header>
</div>
  );
}

export default App;
