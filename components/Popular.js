import moment from 'moment';
const TestDates = {
  '2017-06-29': 'Best Day Ever',
  '2021-01-20': 'Trump Is Gone'
};

const DateLink = ({ date }) =>
  <li><a href={`?date=${date}`}>{TestDates[date]}</a></li>;

const Popular = () =>
  <div className="measure-wide tc center pa3">
    <p>Popular Dates:</p>
    <ul className="list ma0 pa0 tc">
      {Object.keys(TestDates).map(date => <DateLink key={date} date={date} />)}
    </ul>
  </div>;

export default Popular;
