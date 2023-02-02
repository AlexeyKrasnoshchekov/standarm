import styles from '../styles/Response.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

function Response(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <span className={styles.first}>КАЧЕСТВО.{'\u00A0'}</span>
        <span className={styles.second}>НАДЁЖНОСТЬ.{'\u00A0'}</span>
        <span className={styles.third}>ОТВЕТСТВЕННОСТЬ.</span>
      </div>
      <p className={styles.text}>
        СТАНДАРМ - ваш преданный эксперт в области арматуры и автоматизации
        потоков. В мире меняющихся технологий мы рады быть стабильным партнёром
        и проводником.
      </p>
      <h2 className={styles.heading}>МЫ ГАРАНТИРУЕМ:</h2>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Соответствие продукции всем действующим стандартам на
            проектирование, производство и обслуживание
          </p>
        </li>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Отклик на ваш запрос в течении одного рабочего дня
          </p>
        </li>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Оперативный подбор оборудования по вашему опросному листу
          </p>
        </li>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Своевременную поставку дополнительного оборудования и запасных
            частей
          </p>
        </li>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Изготовление оборудования в самые короткие сроки
          </p>
        </li>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Наш сервис-инженер сможет прибыть на ваш объект в течение нескольких
            дней
          </p>
        </li>
        <li className={styles.listItem}>
          <span>{<FaChevronRight />}</span>
          <p className={styles.listText}>
            Соблюдение договоренностей по срокам и условиям поставки
          </p>
        </li>
      </ul>
      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Response);
