import './VideoCard.scss';
import millify from 'millify';
import momnent from 'moment';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

function VideoCard({ title, channel, views, when, thumbnails, publishedAt, duration }) {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo();
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img className="image" src={thumbnails.medium.url} />
        <div className="duration">
          {duration.replace('PT', '').replace('H', ':').replace('M', ':').replace('S', '')}
        </div>
        <div className="actions">
          <div>
            <span class="material-icons">watch_later</span>
          </div>
          <div>
            <span class="material-icons">segment</span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="avatar">
          <img src={thumbnails.default.url} />
        </div>
        <div className="data">
          <div className="title">{title}</div>
          <div className="channel">
            <div className="channel-title">{channel}</div>
            {views > 1000000 && (
              <div className="verified">
                <span class="material-icons">check_circle</span>
              </div>
            )}
          </div>
          <div className="stats">
            <div className="views">{millify(views)} views</div>
            <div className="publishedAt">{timeAgo.format(momnent(publishedAt, 'YYYY-MM-DDTHH:mm:ssZ').toDate())}</div>
          </div>
        </div>
        <div className="more">
          <span class="material-icons icon">more_vert</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
