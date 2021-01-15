import React from "react";
// import { Helmet } from "react-helmet";

export default class Smv extends React.Component {
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
      window.Sirv.start('basic');
    });
  }
  startSirv() {
    this.loadSirv("spin").then(() => {
      window.Sirv.start('off');
    });
  }
  previous() {
    if (window.Sirv.viewer.getInstance('.buttons').isReady()) {
      window.Sirv.viewer.getInstance('.buttons').prev();
    }
  }
  next() {
    // if (window.Sirv.viewer.getInstance('.buttons').isReady()) {
      window.Sirv.viewer.getInstance('.buttons').next();
    // }
  }
  render() {
    return (
      <div className="container">
      <div className="Sirv basic">
        <div data-src="https://demo.sirv.com/example.spin" />
        <div data-src="https://demo.sirv.com/image.jpg" data-type="zoom" />
        <div data-src="https://demo.sirv.com/video.mp4" />
      </div>
      <hr></hr>
      <h3>Autostart OFF</h3>
    <p>Sirv Media Viewer will not initialize until you push this beautiful button below.</p>
      <div>
      <button className="glow-on-hover" onClick={this.startSirv.bind(this)}>Start</button>
      </div>
      <div className="Sirv off" data-options="autostart:off">
        <div data-src="https://demo.sirv.com/tshirt-aqua.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-red.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-grey.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-blue.spin"></div>
        <div data-src="https://demo.sirv.com/tshirt-green.spin"></div>
      </div>

      <h3>Buttons and stuff</h3>
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
