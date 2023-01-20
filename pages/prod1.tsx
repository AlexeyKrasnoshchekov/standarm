import { useEffect, useState } from 'react';
import styles from '../styles/Prod.module.css';

import { withLayout } from '../layout/Layout';

import Image from 'next/image';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import Link from 'next/link';
import MenuItem from '@/components/MenuItem/MenuItem';
import {
  AnimationHandler,
  AnimationHandlerResponse,
} from 'react-responsive-carousel/lib/ts/components/Carousel/types';

function Prod({ posts }: any): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Carousel
          useKeyboardArrows={true}
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5050}
          showThumbs={false}
          swipeable={false}
          showIndicators={false}
          animationHandler="slide"
        >
          {posts &&
            posts.map((post: Post) => (
              <>
                <div className="slide" key={post.id}>
                  <Image
                    src={post.images[0]}
                    alt="фото"
                    width={176}
                    height={235}
                  />
                </div>
                <h3 id="title">
                  <Link href={`/news/${post.id}`} className={styles.newsTitle}>
                    {post.title}
                  </Link>
                </h3>
              </>
            ))}
        </Carousel>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default withLayout(Prod);

import fsPromises from 'fs/promises';
import path from 'path';
import { Post, Posts } from '@/interfaces/post.interface';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = await JSON.parse(jsonData.toString());

  let convData = { posts: [] };

  convData.posts = objectData.posts
    .sort((a: Post, b: Post) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return {
    props: convData,
  };
}

const fadeAnimationHandler: AnimationHandler = (
  props,
  state
): AnimationHandlerResponse => {
  const transitionTime = props.transitionTime + 'ms';
  const transitionTimingFunction = 'ease-in-out';

  let slideStyle: React.CSSProperties = {
    position: 'absolute',
    display: 'block',
    zIndex: 1,
    minHeight: '100%',
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
    prevStyle: { ...slideStyle },
  };
};
