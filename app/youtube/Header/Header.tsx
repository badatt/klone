import Logo from './youtube-icon';

function Header() {
  return (
    <header className="header">
      <div className="main">
        <div className="banner">
          <span className="material-icons menu-icon">menu</span>
          <div className="yt-logo">
            <Logo />
          </div>
        </div>
        <div className="search">
          <div className="search-wrapper">
            <input className="search-inp" placeholder="Search" />
            <button className="lens">
              <span className="material-icons icon">search</span>
            </button>
          </div>
          <button className="mic">
            <span className="material-icons icon">mic</span>
          </button>
        </div>
        <div className="action">
          <button className="btn">
            <span className="material-icons icon">apps</span>
          </button>
          <button className="btn">
            <span className="material-icons icon">more_vert</span>
          </button>
          <button className="btn signin">
            <span className="material-icons">account_circle</span>
            sign in
          </button>
        </div>
      </div>
      {/* <div className="suggestions">
        <div className="chips">suggestion chips</div>
      </div> */}
    </header>
  );
}

export default Header;
