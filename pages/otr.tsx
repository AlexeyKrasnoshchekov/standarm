import { useEffect, useState } from 'react';
import styles from '../styles/Otr.module.css';

import { withLayout } from '../layout/Layout';

import Image from 'next/image';

import Link from 'next/link';
import MenuItem from '@/components/MenuItem/MenuItem';
import Htag from '@/components/Htag/Htag';
import P from '@/components/P/P';

function Otr(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h3 className={styles.heading}>
            <Link href={''}>Промышленность</Link>
          </h3>
          <div
            className={styles.textWrapper}
            style={{ backgroundImage: `url("/images/otr/prom_1w.png")` }}
          >
            <P size="m" className={styles.text}>
              Все заводы и фабрики используют жидкости, газы или порошковые
              среды, которые транспортируются, дозируются и обрабатываются. Мы
              разрабатываем арматуру, позволяющую добиться оптимальных решений
              для широкого спектра технологических процессов.
            </P>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h3 className={styles.heading}>
            <Link href={''}>Индустрия воды</Link>
          </h3>
          <div
            className={styles.textWrapper}
            style={{ backgroundImage: `url("/images/otr/prom_2w.png")` }}
          >
            <P size="m" className={styles.text}>
              Водное хозяйство не только в коммунальной сфере, но и на
              промышленном предприятии имеет основной приоритет. В получении,
              подготовке, доставке и очистке воды задействованы разнообразные
              технологические установки. Для надежного и бесперебойного
              управления потоками воды мы предлагаем различные комплексные
              решения.
            </P>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h3 className={styles.heading}>
            <Link href={''}>Нефть и газ</Link>
          </h3>
          <div
            className={styles.textWrapper}
            style={{ backgroundImage: `url("/images/otr/prom_3w.png")` }}
          >
            <P size="m" className={styles.text}>
              На сегодняшний день сложно назвать индустрию, в которой не
              применялись бы продукты из нефти или энергия газа. Основой работы
              с нефтью и газом является безопасность и надежное оборудование.
              Стандарм предлагает решения, удовлетворяющие самым строгим
              стандартам безопасности.
            </P>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h3 className={styles.heading}>
            <Link href={''}>Энергетика и особые применения</Link>
          </h3>
          <div
            className={styles.textWrapper}
            style={{ backgroundImage: `url("/images/otr/prom_4w.png")` }}
          >
            <P size="m" className={styles.text}>
              Энергия - двигатель всех индустриальных отраслей и основа
              современного коммунального хозяйства. К энергетической арматуре
              применяются особые особые требования по надежности как на
              традиционных производствах электроэнергии и тепла, так и на
              предприятиях с использованием возобновляемях источников
            </P>
          </div>
        </div>
      </div>
      <div className={styles.lowerMenu}>
        <Link href={'/water'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="water"
            size="big"
          >
            Технологии воды
          </MenuItem>
        </Link>
        <Link href={'/klin'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="klin"
            size="big"
          >
            Задвижки клиновые
          </MenuItem>
        </Link>
        <Link href={'/pneumo'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="pneumo"
            size="big"
          >
            Пневматика
          </MenuItem>
        </Link>
        <Link href={'/shiber'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="shiber"
            size="big"
          >
            Задвижки шиберные
          </MenuItem>
        </Link>
        <Link href={'/disk'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="disk"
            size="big"
          >
            Затворы дисковые
          </MenuItem>
        </Link>
        <Link href={'/kran'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="kran"
            size="big"
          >
            <span>Краны</span>
            <span>шаровые</span>
          </MenuItem>
        </Link>
        <Link href={'/arma'} className={styles.menuElem}>
          <MenuItem
            className={styles.lowerMenuIcon}
            appearance="primary"
            icon="arma"
            size="big"
          >
            Автоматизация арматуры
          </MenuItem>
        </Link>
      </div>
    </>
  );
}

export default withLayout(Otr);
