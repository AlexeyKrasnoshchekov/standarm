import { withLayout } from '@/layout/Layout';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/404.module.css';

type Props = {};

export function Error500({}: Props) {
  return (
    <div className={styles.mainbox}>
      <div className={styles.inner}>
        <div className={styles.err}>5</div>
        <div className={styles.err}>0</div>
        <div className={styles.err}>0</div>
      </div>
      <div className={styles.error}>Ошибка сайта</div>

      <Link href={'/'} className={styles.link}>
          Вернуться на домашнюю
        </Link>
    </div>
  );
}

export default withLayout(Error500);