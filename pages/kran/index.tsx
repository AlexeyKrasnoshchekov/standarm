import styles from './Kran.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

function Kran(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>ШАРОВЫЕ КРАНЫ</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Image
            src={'/images/icons/kranIcon2.png'}
            alt="иконка"
            width={70}
            height={70}
          />
          <Link className={styles.link} href={'/kran/1'}>
            КРАН ШАРОВОЙ ЦЕЛЬНОСВАРНОЙ ТИП СТМ Ш
          </Link>
        </li>
        <li className={styles.listItem}>
          <Image
            src={'/images/icons/kranIcon2.png'}
            alt="иконка"
            width={70}
            height={70}
          />
          <Link className={styles.link} href={'/kran/2'}>
            КРАН ШАРОВОЙ СО СЪЁМНОЙ КРЫШКОЙ ТИП СТМ Ш
          </Link>
        </li>
        <li className={styles.listItem}>
          <Image
            src={'/images/icons/kranIcon2.png'}
            alt="иконка"
            width={70}
            height={70}
          />
          <Link className={styles.link} href={'/kran/3'}>
            КРАН ШАРОВОЙ С ПРОБКОЙ В ОПОРАХ ТИП СТМ Ш
          </Link>
        </li>
        <li className={styles.listItem}>
          <Image
            src={'/images/icons/kranIcon2.png'}
            alt="иконка"
            width={70}
            height={70}
          />
          <Link className={styles.link} href={'/kran/4'}>
            КРАН ШАРОВОЙ РАЗБОРНОЙ С ПЛАВАЮЩИМ ШАРОМ ТИП СТМ Ш
          </Link>
        </li>
      </ul>
      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Kran);
