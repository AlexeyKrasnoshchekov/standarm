import React, { useEffect, useState } from 'react';
import styles from '../../styles/Post.module.css';
// import Container from '../../components/Container';

function Post(post: any) {
  //   console.log('999', post.post.id);
  return <h3>{post.post.title}</h3>;
}

export default withLayout(Post);

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import { Post, Posts } from '@/interfaces/post.interface';
import { withLayout } from '@/layout/Layout';
export async function getStaticProps(context: any) {
  const params = context.params;
  const id = params.id;
  //   console.log('333', id);

  if (!id) {
    return {
      notFound: true,
    };
  }

  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());
  //   console.log('444', objectData);

  const post = objectData.posts.filter((post: Post) => post.id == id)[0];
  //   console.log('555', post);
  if (post === 0) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { post }, // will be passed to the page component as props
    };
  }
}

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());
  // const users = await response.json();

  const ids = objectData.posts.map((post: Post) => post.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
