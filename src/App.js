import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="center"><img src={logo} className="App-logo" alt="logo" /> <span className="plus">+</span>
      <img
        src="https://sirv-cdn.sirv.com/website/img/sirv-logo.svg"
        width="250px"
      /></div>
        <div className="Sirv">
          <div data-src="https://demo.sirv.com/example.spin"></div>
          <div data-src="https://demo.sirv.com/image.jpg" data-type="zoom"></div>
          <div data-src="https://demo.sirv.com/video.mp4"></div>
        </div>
        <Helmet>
        <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js"></script>
        </Helmet>
      </header>
    </div>
  );
}

export default App;
