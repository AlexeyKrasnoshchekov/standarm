import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import logo from '../../images/t1.png';
import MenuItem from '@/components/MenuItem/MenuItem';
import Link from 'next/link';

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <>
      <div className={cn(className, styles.headerWrapper)} {...props}>
        <div className={styles.headerLeft}>
          <Link href={'/'}>
            <Image src={logo} alt="лого стандарма" width={313} height={61} />
          </Link>
        </div>
        <div className={styles.headerCenter}>Трубопроводная арматура</div>
        <div className={styles.headerRight}>
          <p>Средства управления и автоматизации</p>
        </div>
        <div className={styles.headerAddress}>
          {/* <a href="tel:+74957750035">+7 (495) 775-00-35</a>
          <a href="mailto:info@standarm.ru">info@standarm.ru</a> */}
          <p>тел.: 8 (495) 775-00-35</p>
          <p>e-mail: info@standarm.ru</p>
          <p>г. Москва, ул. Летниковская</p>
          <p>дом.5, пом.l, ком.43</p>
        </div>
        <div className={styles.headerMenu}>
          <Link href={'/prod'}>
            <MenuItem className={styles.headerMenuItem} appearance="primary">
              Продукция
            </MenuItem>
          </Link>
          <Link href={'/otr'}>
            <MenuItem className={styles.headerMenuItem} appearance="primary">
              Отрасли
            </MenuItem>
          </Link>
          <Link href={'/service'}>
            <MenuItem className={styles.headerMenuItem} appearance="primary">
              Сервис
            </MenuItem>
          </Link>
          <Link href={'/oprlist'}>
            <MenuItem className={styles.headerMenuItem} appearance="primary">
              Опросный лист
            </MenuItem>
          </Link>
          <Link href={'/contact'}>
            <MenuItem className={styles.headerMenuItem} appearance="primary">
              Контакты
            </MenuItem>
          </Link>
          <Link href={'/response'}>
            <MenuItem className={styles.headerMenuItem} appearance="primary">
              Откзывы
            </MenuItem>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
