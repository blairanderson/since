import Layout from '../components/MyLayout.js';
import Documentation from '../components/Documentation';
import { logEvent } from '../components/Analytics';
import moment from 'moment';
import { Component } from 'react';
import Head from 'next/head';
const Conversion = 100;

export default class extends React.Component {
  static getInitialProps({ query: { date, format, unit } }) {
    return { date, format, unit };
  }

  componentDidMount() {
    if (!!window) {
      logEvent(this.props);
    }
  }

  upcaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const date = this.props.date && moment(this.props.date, this.props.format);
    const unit = this.props.unit || 'days';
    const unitDisplay = this.upcaseFirst(unit);
    const diff = date && moment().diff(date, unit, false);
    let header = null;

    if (date) {
      header = (
        <div>
          <h1
            title={`${diff} days since ${date.format('dddd, MMMM Do YYYY')}`}
            className="near-black"
          >
            <div className="f1 fw6">{diff} {unitDisplay}</div>

            <div className="f3 f1-ns fw2 pa2">Since</div>
            <div className="f3 f1-ns fw2 pa2 bg-near-black near-white">
              {date.format('dddd, MMMM Do YYYY')}
            </div>
          </h1>
          <div className="measure-narrow center tl">
            <label className="f6 b db mb2">Select a Date:</label>
            <input
              type="date"
              name="date"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              defaultValue={date && date.format('YYYY-MM-DD')}
              onChange={e => {
                window.location.search = `date=${e.target.value}`;
              }}
            />
          </div>
        </div>
      );
    } else {
      header = (
        <h3>
          Try{' '}
          <a href={`?date=2017-06-29`}>
            days since 2017-06-29
          </a>
        </h3>
      );
    }

    return (
      <Layout>
        <Head>
          <title>
            Next | Moment{date
              ? ` : ${unitDisplay} Since ${date.format('YYYY-MM-DD')}`
              : ' : Date Calculator'}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"
          />
        </Head>
        {header}
        <Documentation />
      </Layout>
    );
  }
}
