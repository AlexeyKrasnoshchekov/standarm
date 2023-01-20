import React from 'react';
import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';
import cn from 'classnames';

import Image from 'next/image';

const MenuItem = ({
  children,
  appearance,
  icon = 'none',
  className,
  ...props
}: MenuItemProps) => {
  return (
    <div
      // style={{
      //   width: '100px',
      //   height: '100px',
      //   borderRadius: '50%',
      //   background: 'black',
      // }}
      className={cn(styles.menuItem, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      <div className={icon !== 'none' ? styles.wrapper : ''}>
        {icon !== 'none' && icon === 'water' && (
          <span className={styles.icon}>
            <Image
              src={'/images/icons/waterIcon.png'}
              alt="иконка"
              width={25}
              height={25}
            />
          </span>
        )}
        {icon !== 'none' && icon === 'klin' && (
          <span className={styles.icon}>
            <Image
              src={'/images/icons/klinIcon.png'}
              alt="иконка"
              width={25}
              height={25}
            />
          </span>
        )}
        {icon !== 'none' && icon === 'shiber' && (
          <span className={styles.icon}>
            <Image
              src={'/images/icons/shiberIcon.png'}
              alt="иконка"
              width={25}
              height={25}
            />
          </span>
        )}
        {icon !== 'none' && icon === 'disk' && (
          <span className={styles.icon}>
            <Image
              src={'/images/icons/diskIcon.png'}
              alt="иконка"
              width={25}
              height={25}
            />
          </span>
        )}
        {icon !== 'none' && icon === 'kran' && (
          <span className={styles.icon}>
            <Image
              src={'/images/icons/kranIcon.png'}
              alt="иконка"
              width={25}
              height={25}
            />
          </span>
        )}
        {icon !== 'none' && icon === 'arma' && (
          <span className={styles.icon}>
            <Image
              src={'/images/icons/armaIcon.png'}
              alt="иконка"
              width={25}
              height={25}
            />
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default MenuItem;
