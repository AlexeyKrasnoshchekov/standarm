import styles from '../styles/Home.module.css';
import { withLayout } from '../../layout/Layout';
import Image from 'next/image';

function News({ posts }: any): JSX.Element {
  // console.log('first', posts);

  console.log('222', posts[0].images[0]);

  return (
    <div>
      <Image
        src={posts[0].images[0]}
        alt="лого стандарма"
        width={300}
        height={300}
      />
      {posts.map((post: Post) => (
        <div
          key={post.id}
          style={{ padding: 20, borderBottom: '1px solid #ccc' }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default withLayout(News);

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import { Post, Posts } from '@/interfaces/post.interface';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());

  let convData = { posts: [] };

  convData.posts = objectData.posts.sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    props: convData,
  };
}
