import { ReactComponent as Ytlogo } from './youtube-icon.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="main">
        <div className="banner">
          <span class="material-icons menu-icon">menu</span>
          <div className="yt-logo">
            <Ytlogo />
          </div>
        </div>
        <div className="search">
          <div className="search-wrapper">
            <input className="search-inp" placeholder="Search" />
            <button className="lens">
              <span class="material-icons icon">search</span>
            </button>
          </div>
          <button className="mic">
            <span class="material-icons icon">mic</span>
          </button>
        </div>
        <div className="action">
          <button className="btn">
            <span class="material-icons icon">apps</span>
          </button>
          <button className="btn">
            <span class="material-icons icon">more_vert</span>
          </button>
          <button className="btn signin">
            <span class="material-icons">account_circle</span>
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
