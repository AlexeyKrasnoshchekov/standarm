import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import Link from 'next/link';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footerWrapper)} {...props}>
      {/* <div>OwlTop {format(new Date(), 'yyyy')} Все права защищены</div> */}
      <Link className={styles.link} href={'/vstand'}>
        Высокий стандарт управления потоками
      </Link>
      <div>Все права защищены, {format(new Date(), 'yyyy')}</div>
      <div>ООО Стандарм</div>
    </footer>
  );
};

export default Footer;
