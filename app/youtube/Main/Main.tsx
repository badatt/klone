import './Main.scss';
import data from './sample-yt-data';
import VideoCard from '../VideoCard/VideoCard';

function Main() {
  return (
    <main className="main-content">
      {data.items.map((item, i) => (
        <VideoCard
          key={i}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          views={Number(item.statistics.viewCount)}
          thumbnails={item.snippet.thumbnails}
          publishedAt={item.snippet.publishedAt}
          duration={item.contentDetails.duration}
        />
      ))}
    </main>
  );
}

export default Main;
