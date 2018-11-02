import React from 'react';
import video from './video.mp4'
import TeliportmeLogo from './logos/teliportme-logo.png';
import TutorialsforvrLogo from './logos/tutorialsforvr-logo.png';
import Unicefinnovationfund from './logos/unicef2.png';
import styled from 'styled-components';

const BgObject = styled.div.attrs({
  className: 'left-2-ns top--2'
})`
  position: absolute;
  z-index: -1;
  width: 639px;
  height: 600px;
  border-radius: 30% 70% 30% 100%;
  background-color: #ecf3ff;
  background-image: -webkit-linear-gradient(270deg,#ecf3ff,#fff);
  background-image: linear-gradient(180deg,#ecf3ff,#fff);
  @media screen and (max-width: 30em) {
    width: 300px;
    height: 350px;
  }
`;

const VideoPlayer = styled.video.attrs({
  className: 'w-80 mw-100-ns mt4 mt0-ns',
  autoPlay: true,
  muted: true,
  loop: true,
  src: video
})`
  transform: perspective(3190px) rotateY(-29deg) rotateX(4deg) rotate(1deg);
  box-shadow: 1px 1px 5px 0 rgba(26,26,67,.05), 39px 62.5px 125px -25px rgba(50,50,93,.5), 23.4px 37.5px 75px -37.5px rgba(0,0,0,.6);
  border: 3px solid black;
  padding: 2px;
  @media screen and (max-width: 30em) {
    transform: none;
  }
`;

const Home = () => (
  <React.Fragment>
    <div className="cf items-center justify-between ph2">
      <div className="fl w-100 w-50-l">
        <div className="center mt5-l mt4 mw7 pl3-ns tc tl-ns w-100">
          <button className="b--none bg-yellow black br-pill dib f6 fw6 mb2 no-underline outline-0 ph3 pv2 trackedine">Open Source</button>
        </div>
        <span className="db f1 f-subheadline-l fw5 center mw7 tc tl-ns ph2 lh-title">Collaboratively build customizable<span style={{ color: '#216ef4' }}>VR experiences</span></span>
        <BgObject />
        <div className="cf center mt5-l mt4 mw7 pl3-ns tc tl-ns w-100 flex ph2 ph0-ns">
          <div className="fl">
            <a href="https://github.com/teliportme/remixVR" className="link bg-red br2 ba bw1 dib dim f3 fw4 mb2 ph3 pv3 tracked white b--red">View on Github</a>
          </div>
          <div className="fl">
            <a className="link ml3 ba bw1 br2 dib dim f3 fw4 mb2 ph3 pv3 tracked red b--red" href="https://blog.teliportme.com/remixvr/">Learn More</a>
          </div>
        </div>
      </div>
      <div className="fl w-100 w-50-l tc mt5-ns">
        <VideoPlayer />
      </div>
    </div>
    <div className="mt5 ph7-l ph5-ns pv4 tc">
      <span className="ttu  tracked-mega relative bottom-1 fw6 light-silver f5">Supported By</span>
      <div className="mt3">
        <a href="https://unicefinnovationfund.org" className="link"><img className="w-100 w-25-ns mw5 mw6-ns" src={Unicefinnovationfund} /></a>
        <a href="https://tutorialsforvr.com" className="link"><img className="w-100 w-20-ns mw5 mw6-ns" src={TutorialsforvrLogo} /></a>
        <a href="https://teliportme.com" className="link"><img className="w-100 w-20-ns mw5 mw6-ns" src={TeliportmeLogo} /></a>
      </div>
    </div>
  </React.Fragment>
);

export default Home;