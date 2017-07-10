import Layout from '../components/MyLayout.js';
import moment from 'moment';
import { Component } from 'react';
import Head from 'next/head';

const DateLink = ({ date }) =>
  <li>
    <a href={`?date=${date}`}>
      days since {date}
    </a>
  </li>;

export default class extends React.Component {
  static getInitialProps({ query: { date, format } }) {
    return {
      date,
      format,
      start: new Date()
    };
  }

  render() {
    const date = this.props.date && moment(this.props.date, this.props.format);
    const diff =
      date && Math.round(moment().diff(date, 'days', true) * 100) / 100;
    const mult = 1000;
    let header = null;

    if (date) {
      header = (
        <h1 className="f1">
          <span className="near-black fw6">{diff}</span>
          <br />
          <span className="near-black fw2">
            {' '}Days Since{' '}{date.format('YYYY-MM-DD')}
          </span>
        </h1>
      );
    } else {
      header = (
        <div>
          <h3>
            Try{' '}
            <a href={`?date=2017-6-29`}>
              days since 2017-6-29
            </a>
          </h3>
        </div>
      );
    }

    return (
      <Layout>
        <Head>
          <title>
            Next | Moment{date && ` : Days Since ${date.format('YYYY-MM-DD')}`}
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
        <div className="measure-wide center tl pa3 ba b-near-black br3 ">
          <legend>
            <h2 className="f2 ma0">A Next | Moment Mashup</h2>
            <p className="f4 b">Get the date diff from your url params</p>
            <strong>URL Param Signature</strong>
            {' '}Matches MomentJS parsing{' '}
            <a href="https://momentjs.com/docs/#/parsing/string-format/">
              String + Format
            </a>
          </legend>
          <kbd className="mv3 db">
            ?date={moment().format('YYYY-MM-DD')}&format=YYYY-MM-DD
          </kbd>
          <kbd className="mv3 db">moment(query.date, query.format);</kbd>
          <p>default format is "YYYY-MM-DD"</p>
          <code>moment("12-25-1995", "MM-DD-YYYY");</code>
          <p>Test out some dates</p>
          <ul>
            <DateLink date="2017-06-29" />
            <DateLink date="1991-08-06" />
            <DateLink date="1998-09-07" />
          </ul>
        </div>
      </Layout>
    );
  }
}
