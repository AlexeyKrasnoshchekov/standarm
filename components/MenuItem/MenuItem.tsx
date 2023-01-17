import React from 'react';
import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';
import cn from 'classnames';
import waterIcon from '../../icons/waterIcon.png';
import klinIcon from '../../icons/klinIcon.png';
import shiberIcon from '../../icons/shiberIcon.png';
import diskIcon from '../../icons/diskIcon.png';
import kranIcon from '../../icons/kranIcon.png';
import armaIcon from '../../icons/armaIcon.png';
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
            <Image src={waterIcon} alt="иконка" width={25} height={25} />
          </span>
        )}
        {icon !== 'none' && icon === 'klin' && (
          <span className={styles.icon}>
            <Image src={klinIcon} alt="иконка" width={25} height={25} />
          </span>
        )}
        {icon !== 'none' && icon === 'shiber' && (
          <span className={styles.icon}>
            <Image src={shiberIcon} alt="иконка" width={25} height={25} />
          </span>
        )}
        {icon !== 'none' && icon === 'disk' && (
          <span className={styles.icon}>
            <Image src={diskIcon} alt="иконка" width={25} height={25} />
          </span>
        )}
        {icon !== 'none' && icon === 'kran' && (
          <span className={styles.icon}>
            <Image src={kranIcon} alt="иконка" width={25} height={25} />
          </span>
        )}
        {icon !== 'none' && icon === 'arma' && (
          <span className={styles.icon}>
            <Image src={armaIcon} alt="иконка" width={25} height={25} />
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

export default MenuItem;
