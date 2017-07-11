import Header from './Header';

const Layout = props =>
  <div>
    <div className="tc">
      <Header />
    </div>
    <div className="tc">
      {props.children}
    </div>
    <a
      className="db ma0 tc pa4 hover-bg-near-black hover-b-near-white hover-white"
      href="https://github.com/blairanderson/since"
    >
      Fork Me On GitHub
    </a>
  </div>;

export default Layout;
