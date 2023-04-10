import Link from 'next/link'
import './global.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/youtube">YouTube</Link> page.
      </p>
    </div>
  )
}

export default Home
