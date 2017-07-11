import moment from 'moment';
const TestDates = ['2017-06-29', '1991-08-06', '1998-09-07'];

const DateLink = ({ date }) =>
  <li><a href={`?date=${date}`}>days since {date}</a></li>;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
  }
  renderButton() {
    return (
      <a
        className="db pointer ma0 tc pa4 hover-bg-near-black hover-b-near-white hover-white"
        onClick={e => {
          this.setState({ display: true });
        }}
      >
        View Docs
      </a>
    );
  }

  renderDocs() {
    return (
      <div className="ba b-near-black br3 pa3">
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
        <p>Test out some dates:</p>
        <ul className="list ma0 pa0">
          {TestDates.map(date => <DateLink key={date} date={date} />)}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="measure-wide center">
        {this.state.display ? this.renderDocs() : this.renderButton()}
      </div>
    );
  }
}
