import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import waterIcon from '../../icons/waterIcon.png';
import Image from 'next/image';

const Button = ({
  children,
  appearance,
  icon = 'none',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {icon !== 'none' && icon === 'water' && (
        <span className={styles.icon}>
          <Image src={waterIcon} alt="капля воды" width={25} height={25} />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
