import Header from './Header';

const Layout = props =>
  <div>
    <div className="tc">
      <Header />
    </div>
    <div className="tc">
      {props.children}
    </div>
  </div>;

export default Layout;
