import styles from './Disk.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function Disk(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="ЗАТВОР ДИСКОВЫЙ, ЭКСЦЕНТРИКОВЫЙ, С МЯГКИМ УПЛОТНЕНИЕМ"
        />
        <title>ЗАТВОР ДИСКОВЫЙ</title>
        <meta name="description" content="ЗАТВОР ДИСКОВЫЙ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ЗАТВОРЫ ДИСКОВЫЕ</h2>
        <ul className={styles.list}>
          <li>
            <Image
              src={'/images/icons/diskIcon2.png'}
              alt="иконка дискового затвора"
              width={70}
              height={70}
            />
            <Link className={styles.link} href={'/disk/2'}>
              ЗАТВОР ДИСКОВЫЙ 2-ЭКСЦЕНТРИКОВЫЙ С МЯГКИМ УПЛОТНЕНИЕМ ТИП СТМ Д
            </Link>
          </li>
          <li className={styles.listItem}>
            <Image
              src={'/images/icons/diskIcon2.png'}
              alt="иконка дискового затвора"
              width={70}
              height={70}
            />
            <Link className={styles.link} href={'/disk/3'}>
              ЗАТВОР ДИСКОВЫЙ 3-ЭКСЦЕНТРИКОВЫЙ С МЯГКИМ УПЛОТНЕНИЕМ ТИП СТМ Д
            </Link>
          </li>
        </ul>
        <div className={styles.gradient}></div>
      </div>
    </>
  );
}

export default withLayout(Disk);
