import React, { useEffect, useState } from 'react';
import styles from '../../styles/NewsItem.module.css';
import Image from 'next/image';
import parse from 'html-react-parser';
import Link from 'next/link';



function Post({post}: Post) {
  const htmlContent = post.content && parse(post.content);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{post.title}</h3>
      <div className={styles.innerWrapper}>
        <div className={styles.imageWrapper}>
          {post.images.length !== 0 &&
            post.images.map((image: string) => {
              return (
                <Image
                  key={post.id}
                  src={`${image}`}
                  alt="фото новости"
                  layout="fill"
                  className={styles.image}
                  style={{ objectFit: 'contain' }}
                />
              );
            })}
        </div>
        <div className={styles.textWrapper}>
          {post.id === 5 && (
            <div className={styles.waterHeading}>
              <span>Мы рады представить Вам новый раздел нашего сайта:</span>
              <Link className={styles.waterLink} href={'/otr/5'}>
                Технологии очистки воды
              </Link>
            </div>
          )}
          {htmlContent && htmlContent}
        </div>
      </div>
    </div>
  );
}

export default withLayout(Post);

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
// import { Post, Posts } from '@/interfaces/post.interface';
import { withLayout } from '@/layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Post } from '@/interfaces/post.interface';
interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
// export async function getStaticProps(context) {
  const params = context.params;
  // const id = params.id;
  const { id } = context.params as IParams
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

  const post = objectData.posts.filter((post: Post) => post.id === Number(id))[0];
  if (post.id === 1) post.images.shift();
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

export const getStaticPaths:GetStaticPaths  = async () => {
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
