import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { withLayout } from '../layout/Layout';
import cn from 'classnames';

import MenuItem from '@/components/MenuItem/MenuItem';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import anime from 'animejs';

import {
  AnimationHandler,
  AnimationHandlerResponse,
} from 'react-responsive-carousel/lib/ts/components/Carousel/types';
import Link from 'next/link';

const imagesCarousel = [
  '/images/prom_1.webp',
  '/images/prom_2.webp',
  '/images/prom_3.webp',
  '/images/prom_4.webp',
];

function Home({ posts, className, ...props }: any): JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === 3) {
      setIndex(0);
    }
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  // useEffect(() => {
  //   anime
  //     .timeline()
  //     .add({
  //       targets: '#title',
  //       opacity: [0, 1],
  //       duration: 1000,
  //       easing: 'easeInOutSine',
  //     })
  //     .add({
  //       targets: '#title',
  //       delay: 3000,
  //       duration: 1000,
  //       opacity: [1, 0],
  //       easing: 'easeInOutSine',
  //     });
  // }, [index]);

  return (
    <div className={cn(className, styles.bodyWrapper)} {...props}>
      <div className={styles.bodyLeft}>
        <div className={styles.news}>
          <Link className={styles.newsHeader} href={'/news'}>
            Новости компании
          </Link>

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
                <div key={post.id}>
                  <div className={styles.slide}>
                    <Image
                      src={post.images[0]}
                      alt="фото новости компании"
                      fill
                      quality={100}
                    />
                  </div>
                  <h3 className={styles.newsTitleWrapper}>
                    <Link
                      href={`/news/${post.id}`}
                      className={styles.newsTitle}
                    >
                      {post.titleShort ? post.titleShort : post.title}
                    </Link>
                  </h3>
                </div>
              ))}
          </Carousel>
        </div>
        <div className={styles.newsRight}></div>
      </div>
      <div className={styles.bodyRight}>
        <Carousel
          useKeyboardArrows={true}
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          animationHandler={fadeAnimationHandler}
          showThumbs={false}
          swipeable={false}
        >
          {imagesCarousel.map((URL, index) => (
            <div className={styles.slideMain} key={index}>
              <Image
                src={URL}
                alt="фото сфер деятельности компании"
                fill
                quality={100}
              />
            </div>
          ))}
        </Carousel>
        <div className={styles.lowerMenu}>
          <Link href={'/water'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="water"
            >
              Технологии воды
            </MenuItem>
          </Link>
          <Link href={'/klin'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="klin"
            >
              Задвижки клиновые
            </MenuItem>
          </Link>
          <Link href={'/pneumo'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="pneumo"
            >
              Пневматика
            </MenuItem>
          </Link>
          <Link href={'/shiber'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="shiber"
            >
              Задвижки шиберные
            </MenuItem>
          </Link>
          <Link href={'/disk'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="disk"
            >
              Затворы дисковые
            </MenuItem>
          </Link>
          <Link href={'/kran'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="kran"
            >
              <span>Краны</span>
              <span>шаровые</span>
            </MenuItem>
          </Link>
          <Link href={'/arma'}>
            <MenuItem
              className={styles.lowerMenuIcon}
              appearance="primary"
              icon="arma"
            >
              Автоматизация арматуры
            </MenuItem>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);

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
