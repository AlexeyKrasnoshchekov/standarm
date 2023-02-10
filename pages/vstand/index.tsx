import styles from './Vstand.module.css';
import { useState, useEffect } from 'react';
import { withLayout } from '@/layout/Layout';
import vstand from '../../images/vstand.gif';
import Image from 'next/image';
import MenuItem from '@/components/MenuItem/MenuItem';
import Link from 'next/link';

function Vstand(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Image src={vstand} alt="лого стандарма" width={1000} height={497} />

      <div className={styles.titleWrapper}>
        <h2>Высокий стандарт управления потоками</h2>
      </div>
      <div className={styles.descWrapper}>
        <h3>
          СВОЮ ЗАДАЧУ НА РОССИЙСКОМ РЫНКЕ МЫ ВИДИМ В УДОВЛЕТВОРЕНИИ ПОТРЕБНОСТИ
          ПРОМЫШЛЕННЫХ ПРЕДПРИЯТИЙ, ПРОЕКТНЫХ ИНСТИТУТОВ, ИНЖИНИРИНГОВЫХ
          КОМПАНИЙ, СТРОИТЕЛЬНЫХ И ПОДРЯДНЫХ ОРГАНИЗАЦИЙ В ВЫСОКОТЕХНОЛОГИЧНОМ
          ОБОРУДОВАНИИ ДЛЯ АВТОМАТИЗАЦИИ И УПРАВЛЕНИЯ ПОТОКАМИ.
        </h3>

        <h3>
          НАША АРМАТУРА НАДЁЖНО РАБОТАЕТ В НЕФТЕГАЗОВОМ КОМПЛЕКСЕ, В ЭНЕРГЕТИКЕ,
          В ВОДОСНАБЖЕНИИ И СИСТЕМАХ ВОДООТВЕДЕНИЯ, В РАЗЛИЧНЫХ ОБЛАСТЯХ
          ПРОМЫШЛЕННОСТИ, ОБЕСПЕЧИВАЯ УПРАВЛЕНИЕ ПОТОКАМИ ЖИДКОСТЕЙ, ГАЗОВ,
          ПОРОШКОВ, ГРАНУЛ И СПЕЦИАЛЬНЫХ СРЕД.
        </h3>
      </div>
      <div className={styles.menuWrapper}>
        <Link href={'/klin'}>
          <MenuItem
            className={styles.menuItem}
            appearance="primary"
            icon="klin"
            size="big"
          >
            Задвижки клиновые
          </MenuItem>
        </Link>
        <Link href={'/pneumo'}>
          <MenuItem
            className={styles.menuItem}
            appearance="primary"
            icon="pneumo"
            size="big"
          >
            Пневматика
          </MenuItem>
        </Link>
        <Link href={'/shiber'}>
          <MenuItem
            className={styles.menuItem}
            appearance="primary"
            icon="shiber"
            size="big"
          >
            Задвижки шиберные
          </MenuItem>
        </Link>
        <Link href={'/disk'}>
          <MenuItem
            className={styles.menuItem}
            appearance="primary"
            icon="disk"
            size="big"
          >
            Затворы дисковые
          </MenuItem>
        </Link>
        <Link href={'/kran'}>
          <MenuItem
            className={styles.menuItem}
            appearance="primary"
            icon="kran"
            size="big"
          >
            <span>Краны</span>
            <span>шаровые</span>
          </MenuItem>
        </Link>
        <Link href={'/arma'}>
          <MenuItem
            className={styles.menuItem}
            appearance="primary"
            icon="arma"
            size="big"
          >
            Автоматизация арматуры
          </MenuItem>
        </Link>
      </div>
      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Vstand);
