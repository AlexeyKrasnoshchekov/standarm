import styles from './Arma.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

function Arma(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>ТЕХНОЛОГИИ ОЧИСТКИ ВОДЫ</h2>

      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Arma);
