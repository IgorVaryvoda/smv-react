import React from "react";
// import { Helmet } from "react-helmet";

export default class Smv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }
    // This binding is necessary to make `this` work in the callback    this.handleClick = this.handleClick.bind(this);  }
  loadSirv(components) {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.src = "https://scripts.sirv.com/sirvjs/v3/sirv.js";
      script.type = "text/javascript";
      script.async = true;
      script.dataset.components = components;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  }
  componentDidMount() {
    this.loadSirv("spin, zoom, video").then(() => {
      window.Sirv.start('.basic');
    });
  }
  startSirv() {
    if (typeof window.Sirv === 'undefined') {
      this.loadSirv("spin").then(() => {
        window.Sirv.start('.off');
      });
    } else {
      window.Sirv.start('.off')
    }
    this.setState(state => ({isLoading: !state.isloading }));
  }
  previous() {
    if (window.Sirv.viewer.getInstance('.custom').isReady()) {
      window.Sirv.viewer.getInstance('.custom').prev();
    }
  }
  next() {
    if (window.Sirv.viewer.getInstance('.custom').isReady()) {
      window.Sirv.viewer.getInstance('.custom').next();
    }
  }
  render() {
    let isLoading = this.state.isLoading;
    return (
      <div className="container">
        <h3>Autostart: ON</h3>
        <p>SMV will render as soon as Sirv JS initializes</p>
      <div className="Sirv basic">
        <div data-src="https://demo.sirv.com/example.spin" />
        <div data-src="https://demo.sirv.com/image.jpg" data-type="zoom" />
        <div data-src="https://demo.sirv.com/video.mp4" />
      </div>
      <hr></hr>
      {!isLoading &&
      <div>
      <h3>Autostart OFF</h3>
    <p>Sirv Media Viewer will not initialize until you push this beautiful button below.</p>
      <div>
      <button className="glow-on-hover" onClick={this.startSirv.bind(this)}>Start</button>
      </div>
      </div>
      }
      <div className="Sirv off" data-options="autostart:off">
        <div data-src="https://demo.sirv.com/tshirt-aqua.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-red.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-grey.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-blue.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-green.spin"></div>
      </div>
      <hr></hr>
      <h3>Buttons</h3>
      <p>Custom buttons using the Sirv Media Viewer API.</p>
      <div className="Sirv custom" data-options="arrows:false;">
			<div data-src="https://demo.sirv.com/demo/apt/01.jpg" data-type="zoom"></div>
			<div data-src="https://demo.sirv.com/demo/apt/02.jpg" data-type="zoom"></div>
			<div data-src="https://demo.sirv.com/demo/apt/03.jpg" data-type="zoom"></div>
		</div>
		<div className="buttons">
		<button className="button1 bouncy" onClick={this.previous.bind(this)}>⬅ Previous</button>
		<button className="button1 bouncy" onClick={this.next.bind(this)}>Next ➡</button>
		</div>
    </div>
    );
  }
}
