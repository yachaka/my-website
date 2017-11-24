
import React, { PureComponent } from 'react'
import cx from 'classnames';
import Link from 'gatsby-link';

import s from './index.module.scss';

class IndexPage extends PureComponent {
  componentDidMount() {
    synchronizeHover(this.refs.saasLink, this.refs.saasLinkBox, s.active);
    synchronizeHover(this.refs.mobileLink, this.refs.mobileLinkBox, s.active);
    synchronizeHover(this.refs.learnLink, this.refs.learnLinkBox, s.active);
  }

  render() {
    return (
      <div id={s.home}>
        <div class="container">
          <div class="row"><div class="col-xs-12">
            <h1 id={s.firstH1}>Hi, this is Project Leo, Dailymotion.</h1>
            <h1 id={s.secondH1}>We are an advertising SaaS.</h1>

            <h2 id={s.H2Presentation}>
              We can help you&nbsp;
              <a id={s.saasLinkText} href="#" class={s.saasLink} ref="saasLink">
                build SaaS
              </a>,&nbsp;
              <a id={s.mobileLinkText} href="#" class={s.mobileLink} ref="mobileLink">
                mobile applications
              </a> and <br/>
              <a id={s.learnLinkText} href="#" class={s.learnLink} ref="learnLink">
                learn latest JS technologies
              </a>.
            </h2>

            <h4 id={s.getStartedTitle} class={cx('flat-typo')}>Get Started</h4>
          </div></div>

          <div id={s.activities} class="row">
            <div class="col-xs-4">
              <a id={s.saasLinkBox} class={cx(s.activity, s.saasLink)} ref="saasLinkBox">
                <div class={s.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 81.25 81.25"><path stroke-miterlimit="10" d="M70.992 30.752c.396-1.478.63-3.02.63-4.626 0-9.942-8.058-18-18-18-6.95 0-12.96 3.942-15.965 9.707-1.348-.453-2.787-.708-4.286-.708-7.455 0-13.498 6.045-13.498 13.5-6.21 0-11.25 5.038-11.25 11.252 0 5.615 4.12 10.256 9.5 11.1v-12.35c0-2.764 2.24-5.002 5-5.002h45c2.763 0 5.002 2.238 5.002 5V52.47c4.368-1.547 7.5-5.7 7.5-10.597 0-5.66-4.186-10.332-9.632-11.12z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M68.122 35.625c2.764 0 5.003 2.238 5.003 5v32.5H18.123v-32.5c0-2.762 2.24-5 5-5z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M18.123 52.977c-5.38-.844-9.5-5.484-9.5-11.1 0-6.214 5.04-11.252 11.25-11.252 0-6.346 4.383-11.653 10.284-13.1V5.55c0-2.718-2.205-4.923-4.924-4.923H5.543C2.827.625.626 2.83.626 5.548v42.654c0 2.72 2.2 4.923 4.92 4.923h12.578z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M10.14 4.73c0 .36-.292.655-.657.655-.362 0-.655-.295-.655-.656 0-.363.293-.66.655-.66.365 0 .657.296.657.66zM12.108 4.73h6.563zM8.624 41.877c0-6.214 5.038-11.252 11.25-11.252 0-5.425 3.207-10.09 7.82-12.233V9.65c0-.45-.37-.82-.82-.82H3.904c-.45 0-.82.37-.82.82v34.453c0 .45.37.82.82.82H9.05c-.27-.97-.426-1.988-.426-3.046z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M35.624 26.126c0-2.994.74-5.81 2.033-8.293-1.292 2.482-2.033 5.3-2.033 8.293z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" d="M51.874 43.127h17.5v29.998h-17.5zM21.87 63.126h30v10h-30z"/><path stroke-miterlimit="10" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" d="M21.87 43.127h30v20h-30zM66.875 40.626h1.247c.692 0 1.25.56 1.25 1.25v1.25h-2.497zM21.875 43.125v-1.25c0-.69.558-1.25 1.247-1.25h38.755v2.5zM47.5 38.876c.344 0 .626-.28.626-.625 0-.344-.282-.625-.627-.625h-3.75c-.347 0-.626.28-.626.626 0 .345.28.626.627.626zM64.374 40.626h2.5v2.5h-2.5z"/><path stroke-miterlimit="10" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" d="M61.877 40.626h2.497v2.5h-2.497zM65.625 45.625c.686 0 1.25.563 1.25 1.25v8.75c0 .69-.564 1.25-1.25 1.25H55.623c-.686 0-1.25-.562-1.25-1.25v-8.75c0-.687.564-1.25 1.25-1.25zM35.624 73.125v-6.25c0-.687-.564-1.248-1.25-1.248l-8.75-.002c-.69 0-1.252.563-1.252 1.25v6.25zM24.372 55.626h15v5h-15zM48.123 45.625c.686 0 1.25.563 1.25 1.25v5c0 .688-.564 1.25-1.25 1.25h-22.5c-.688 0-1.25-.562-1.25-1.25v-5c0-.688.562-1.25 1.25-1.25zM54.372 59.374h12.503v2.5H54.372zM54.372 64.375h7.5v2.5h-7.5z"/><path stroke-miterlimit="10" d="M80.625 76.875v-1.25c0-1.38-1.12-2.5-2.502-2.5h-65c-1.38 0-2.5 1.12-2.5 2.5v1.25l5.264 2.632c1.23.615 3.363 1.118 4.737 1.118h50.003c1.375 0 3.504-.503 4.733-1.118z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M10.626 76.875h70zM53.125 73.125l-.813 1.14c-.24.337-.775.61-1.186.61H40.123c-.41 0-.943-.273-1.185-.61l-.813-1.14zM38.122 65.625h11.25v2.5h-11.25zM41.873 55.626h7.5v2.5h-7.5z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M70.992 30.752c.396-1.478.63-3.02.63-4.626 0-9.942-8.058-18-18-18-6.95 0-12.96 3.942-15.965 9.707-1.348-.453-2.787-.708-4.286-.708-7.455 0-13.498 6.045-13.498 13.5-6.21 0-11.25 5.038-11.25 11.252 0 5.615 4.12 10.256 9.5 11.1v-12.35c0-2.764 2.24-5.002 5-5.002h45c2.763 0 5.002 2.238 5.002 5V52.47c4.368-1.547 7.5-5.7 7.5-10.597 0-5.66-4.186-10.332-9.632-11.12z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" d="M6.836 12.578h17.11v5H6.835zM19.873 30.625c0-3.607 1.423-6.876 3.728-9.298H6.837v11.096h6.953c1.752-1.133 3.84-1.798 6.083-1.798z"/></svg>
                </div>
                <div class={s.text}>
                  <p>Build my SaaS</p>
                </div>
              </a>
            </div>
            <div class="col-xs-4">
              <a id={s.mobileLinkBox} class={cx(s.activity, s.mobileLink)} ref="mobileLinkBox">
                <div class={s.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 47.752998 81.25"><path stroke-miterlimit="10" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round" d="M.375 20.626h1.75v7.5H.375zM.375 30.625h1.75v7.5H.375z"/><path stroke-miterlimit="10" d="M47.127 26.45V8.128c0-4.143-3.36-7.502-7.5-7.502H9.625c-4.142 0-7.5 3.36-7.5 7.5v64.998c0 4.145 3.358 7.502 7.5 7.502h30.003c4.14 0 7.5-3.357 7.5-7.498V59.374z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M43.507 40.448V14.442c0-.688-.564-1.248-1.25-1.248h-35c-.687 0-1.38.495-1.38 1.182v52.5c0 .687.562 1.247 1.247 1.248l35.133.066c.686.002 1.25-.562 1.25-1.248zM28.627 74.126c0 2.208-1.792 4-4 4-2.212 0-4-1.792-4-4 0-2.21 1.788-4 4-4 2.208 0 4 1.79 4 4z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><circle stroke-miterlimit="10" cx="24.626" cy="3.876" r=".374" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><circle stroke-miterlimit="10" cx="15.625" cy="6.875" r=".999" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M19.625 6.875h10z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class={s.text}>
                  <p>Launch my Mobile Application</p>
                </div>
              </a>
            </div>
            <div class="col-xs-4">
              <a id={s.learnLinkBox} class={cx(s.activity, s.learnLink)} ref="learnLinkBox">
                <div class={s.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 66.204002 46.001999"><path stroke-miterlimit="10" d="M24.1 12.626c-1.657 0-3 1.343-3 3.004v-.004c0 .398.08.775.22 1.123l1.39 3.937c.073.183.18.344.313.48.273.284.656.458 1.078.458 0 4.972 4.03 9 9 9 4.972 0 9-4.028 9-9 .425 0 .807-.174 1.083-.457.13-.138.235-.3.312-.48l1.39-3.94c.14-.347.22-.724.22-1.122l-.003.004c0-1.66-1.344-3.004-3.002-3.004v-3c0-4.97-4.03-9-9-9s-9 4.03-9 9z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M24.1 12.626l2.25-3c1.962 1.963 4.518 2.957 7.09 3-.753-.777-1.217-1.833-1.218-3 1.472 1.472 3.39 2.218 5.32 2.25-.562-.584-.913-1.376-.913-2.25 1.145.764 2.415 1.174 3.697 1.267l1.772 1.733v-3c0-4.97-4.03-9-9-9-4.972 0-9 4.03-9 9v3z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M26.768 34.94c1.13-1.09 1.83-2.617 1.83-4.313v-1.213c1.328.767 2.86 1.213 4.502 1.213s3.174-.446 4.5-1.213v1.213c0 1.695.703 3.222 1.833 4.312-3.498 3.496-9.168 3.498-12.665 0z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M39.433 34.94c.55.53 1.2.96 1.923 1.25l10.867 4.5c.358.146.684.36.96.624.564.548.916 1.31.916 2.157v2.157h-42V43.47c0-.847.353-1.608.917-2.156.276-.264.602-.48.962-.623l10.864-4.5c.722-.29 1.373-.72 1.924-1.25 3.497 3.498 9.167 3.496 12.665 0z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M58.056 13.583c0-1.43-1.158-2.592-2.59-2.592V8.4c0-4.293-3.48-7.774-7.773-7.774-3.04 0-5.645 1.765-6.923 4.307.84 1.368 1.332 2.973 1.332 4.694v3c1.656 0 3 1.342 3 3 0 .4-.08.774-.217 1.122l-1.392 3.937c-.076.18-.183.343-.313.48-.272.284-.655.458-1.078.458 0 .754-.104 1.48-.28 2.18 1.426 1.66 3.513 2.732 5.87 2.732 4.295 0 7.774-3.48 7.774-7.773.367 0 .694-.153.93-.396.116-.12.21-.26.272-.416l1.2-3.4c.123-.3.19-.627.188-.97z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M47.697.626h-.004c-3.04 0-5.645 1.765-6.923 4.307.66 1.075 1.1 2.295 1.26 3.604 3.23 3.066 8.324 3.03 11.496-.136l1.94 2.593V8.4c0-4.293-3.48-7.774-7.77-7.774zM18.51 26.538c2.356 0 4.444-1.073 5.87-2.73-.173-.7-.28-1.428-.28-2.182-.424 0-.806-.174-1.078-.457-.133-.14-.24-.302-.31-.482l-1.394-3.938c-.14-.348-.22-.725-.22-1.123l.002.002c0-1.66 1.342-3.003 3-3.003v-3c0-1.72.493-3.326 1.33-4.694C24.156 2.39 21.55.626 18.51.626c-4.293 0-7.77 3.48-7.77 7.774v2.59c-1.433 0-2.592 1.162-2.592 2.593h-.002c0 .342.07.67.19.97l1.2 3.4c.064.157.156.295.27.415.236.243.565.396.933.396.002 4.294 3.48 7.774 7.772 7.774z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M12.7 8.357c2.1.034 4.19.846 5.794 2.45l.016-.044c1.478-1.43 3.474-2.317 5.684-2.356.17-1.26.604-2.436 1.24-3.475C24.156 2.39 21.55.625 18.51.625c-4.293 0-7.77 3.48-7.77 7.774v2.59l1.94-2.59z" fill="none" stroke="#000" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M24.846 36.19c.722-.292 1.373-.72 1.924-1.252.705-.68 1.215-1.543 1.52-2.5l-2.653-1.1c-.624-.25-1.186-.62-1.66-1.08-3.02 3.02-7.917 3.02-10.937 0-.476.46-1.037.83-1.66 1.08l-9.385 3.89c-.31.124-.59.31-.83.54-.487.472-.79 1.13-.79 1.86v1.863h16.502z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M13.043 30.264c3.02 3.016 7.913 3.016 10.934-.004 0 .002.002.002.003.002v-.002c-.976-.94-1.583-2.262-1.583-3.722v-1.052c-1.144.666-2.47 1.052-3.887 1.052-1.417 0-2.742-.386-3.886-1.052v1.052c0 1.46-.61 2.78-1.583 3.722l.003.002zM41.358 36.19c-.722-.292-1.373-.72-1.925-1.252-.704-.68-1.214-1.543-1.52-2.5l2.655-1.1c.623-.25 1.185-.62 1.657-1.08 3.02 3.02 7.918 3.02 10.938 0 .476.46 1.037.83 1.66 1.08l9.385 3.888c.31.125.593.312.83.54.488.473.79 1.13.79 1.86v1.864h-16.5z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/><path stroke-miterlimit="10" d="M53.16 30.264c-3.02 3.016-7.913 3.016-10.934-.004 0 .002 0 .002-.002.002v-.002c.975-.94 1.583-2.262 1.583-3.722v-1.052c1.144.666 2.468 1.052 3.886 1.052 1.418 0 2.742-.386 3.886-1.052v1.052c0 1.46.61 2.78 1.582 3.722v.002z" fill="none" stroke="#000" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class={s.text}>
                  <p>Learn Latest JS Techs</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default IndexPage


function synchronizeHover(el, target, classNameToAdd) {
  el.addEventListener('mouseover', function () {
    var classes = target.className.split(' ');
    classes.push(classNameToAdd);
    classes = classes.filter((c, i) => classes.indexOf(c) === i);
    target.className = classes.join(' ');
  });

  el.addEventListener('mouseout', function () {
    var classes = target.className.split(' ');
    classes = classes.filter((c, i) => c !== classNameToAdd);
    target.className = classes.join(' ');
  });  
}
