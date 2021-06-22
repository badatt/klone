import './Navbar.scss';

const itemsList = [
  {
    title: '',
    items: [
      {
        icon: 'home',
        text: 'Home',
      },
      {
        icon: 'explore',
        text: 'Explore',
      },
      {
        icon: 'subscriptions',
        text: 'Subscriptions',
      },
    ],
  },
  {
    title: '',
    items: [
      {
        icon: 'video_library',
        text: 'Library',
      },
      {
        icon: 'history',
        text: 'History',
      },
    ],
  },
  {
    title: 'Best of Youtube',
    items: [
      {
        icon: 'music_note',
        text: 'Music',
      },
      {
        icon: 'emoji_events',
        text: 'Sports',
      },
      {
        icon: 'sports_esports',
        text: 'Gaming',
      },
      {
        icon: 'theaters',
        text: 'Movies',
      },
      {
        icon: 'article',
        text: 'News',
      },
      {
        icon: 'online_prediction',
        text: 'Live',
      },
      {
        icon: 'dry_cleaning',
        text: 'Fashion & Beauty',
      },
      {
        icon: 'emoji_objects',
        text: 'Learning',
      },
      {
        icon: 'ondemand_video',
        text: 'Spotlight',
      },
    ],
  },
  {
    title: '',
    items: [
      {
        icon: 'add_circle',
        text: 'Browse Channels',
      },
    ],
  },
  {
    title: 'More from Youtube',
    items: [
      {
        icon: 'ondemand_video',
        text: 'YouTube Premium',
      },
      {
        icon: 'online_prediction',
        text: 'Live',
      },
    ],
  },
  {
    title: '',
    items: [
      {
        icon: 'settings',
        text: 'Settings',
      },
      {
        icon: 'flag',
        text: 'Report history',
      },
      {
        icon: 'help',
        text: 'Help',
      },
      {
        icon: 'feedback',
        text: 'Send feedback',
      },
    ],
  },
];

function Item({ icon, text }) {
  return (
    <div className={text === 'Home' ? 'item selected' : 'item'}>
      <div className="item-icon">
        <span className="material-icons">{icon}</span>
      </div>
      <div className="item-text">{text}</div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {itemsList.map((il, ild) => (
          <div key={ild} className="item-group">
            {il.title && <div className="item-title">{il.title}</div>}
            {il.items.map((i, id) => (
              <Item key={id} icon={i.icon} text={i.text} />
            ))}
            <div className="divider" />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
