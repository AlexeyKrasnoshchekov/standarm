import { useEffect, useState } from 'react';
import styles from '../styles/Prod.module.css';

import { withLayout } from '../layout/Layout';

import Image from 'next/image';

import Link from 'next/link';
import MenuItem from '@/components/MenuItem/MenuItem';
import { HiChevronDoubleDown } from 'react-icons/hi';

function Prod(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.menuElemWrapper}>
          <Link href={'/prod'} className={styles.menuElem}>
            <MenuItem className={styles.menuItem} appearance="primary">
              Технологии воды
            </MenuItem>
          </Link>
          <Link href={''} className={styles.link}>
            Проектирование, строительство и комплексная поставка систем очистки
            сточных вод промышленных предприятий и систем водоподготовки
          </Link>
        </div>
        <div className={styles.menuElemWrapper}>
          <Link href={'/prod'} className={styles.menuElem}>
            <MenuItem className={styles.menuItem} appearance="primary">
              Задвижки клиновые
            </MenuItem>
          </Link>
          <Link href={''} className={styles.link}>
            Самая распространённая арматура для всех областей промышленности
          </Link>
        </div>
        <div className={styles.menuElemWrapper}>
          <Link href={'/prod'} className={styles.menuElem}>
            <MenuItem className={styles.menuItem} appearance="primary">
              Задвижки шиберные
            </MenuItem>
          </Link>
          <Link href={''} className={styles.link}>
            Арматура для вязких сред и потоков с различными включениями
          </Link>
        </div>
        <div className={styles.menuElemWrapper}>
          <Link href={'/prod'} className={styles.menuElem}>
            <MenuItem className={styles.menuItem} appearance="primary">
              Затворы дисковые
            </MenuItem>
          </Link>
          <Link href={''} className={styles.link}>
            Малогабаритная арматура для эксплуатации на различных давлениях и
            температурах
          </Link>
        </div>
        <div className={styles.menuElemWrapper}>
          <Link href={'/prod'} className={styles.menuElem}>
            <MenuItem className={styles.menuItem} appearance="primary">
              Краны шаровые
            </MenuItem>
          </Link>
          <Link href={''} className={styles.link}>
            Наиболее надёжное решение для перекрытия потока
          </Link>
        </div>
        <div className={styles.menuElemWrapper}>
          <Link href={'/prod'} className={styles.menuElem}>
            <MenuItem className={styles.menuItem} appearance="primary">
              Автоматизация арматуры
            </MenuItem>
          </Link>
          <Link href={''} className={styles.link}>
            Оснащение исполнительными механизмами и средствами АСУТП
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Image
              src={'/images/prod/prodi_1.jpg'}
              alt="лого стандарма"
              width={200}
              height={320}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.inner}>
              <span className={styles.icon}>
                <HiChevronDoubleDown />
                <HiChevronDoubleDown className={styles.chevron} />
              </span>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>КАЧЕСТВО КАК ОСНОВА</h3>
                <p className={styles.text}>
                  Качество нашей продукции и услуг должно соответствовать
                  требованиям потребителей и превосходить их ожидания. Мы несём
                  ответственность за наше оборудование от его подбора и
                  разработки до монтажа и эксплуатации, обеспечиваем контроль
                  качества на всех стадиях производства.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card} style={{ justifySelf: 'center' }}>
            <Image
              src={'/images/prod/prodi_2.jpg'}
              alt="лого стандарма"
              width={200}
              height={320}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.inner}>
              <span className={styles.icon}>
                <HiChevronDoubleDown />
                <HiChevronDoubleDown className={styles.chevron} />
              </span>

              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>ИНТЕЛЛЕКТ КАК РЕСУРС</h3>
                <p className={styles.text}>
                  Мы идём в ногу со временем и на шаг впереди рынка, предлагаем
                  нашим клиентам современные решения и технологии по оптимальной
                  стоимости, используем отечественные и лучшие мировые методы
                  разработки арматуры при неизменном приоритете высоких
                  характеристик и надёжности продукции.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card} style={{ justifySelf: 'end' }}>
            <Image
              src={'/images/prod/prodi_3.jpg'}
              alt="лого стандарма"
              width={200}
              height={320}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.inner}>
              <span className={styles.icon}>
                <HiChevronDoubleDown />
                <HiChevronDoubleDown className={styles.chevron} />
              </span>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>УВАЖЕНИЕ К ПАРТНЁРАМ</h3>
                <p className={styles.text}>
                  Наш клиент всегда прав и его потребности всегда на первом
                  месте для нас. Задачи и проекты высокой сложности и большого
                  объёма мы обязуемся решать, применяя все наши ресурсы на
                  основе доверия и партнёрства.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src={'/images/prod/prodi_4.jpg'}
              alt="лого стандарма"
              width={200}
              height={320}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.inner}>
              <span className={styles.icon}>
                <HiChevronDoubleDown />
                <HiChevronDoubleDown className={styles.chevron} />
              </span>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>ШИРОКИЙ СПЕКТР ПРОДУКЦИИ</h3>
                <p className={styles.text}>
                  Мы предлагаем различные типы арматуры: шаровые краны,
                  задвижки, дисковые затворы - всё, что необходимо для
                  удовлетворения потребности в качественной арматуре в самых
                  разных технологических процессах. От малых труб до
                  максимальных пропускных способностей, от вакуума до пластовых
                  давлений, от криогенных температур до раскалённых газов - мы
                  обладаем опытом решения самых сложных задач.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card} style={{ justifySelf: 'center' }}>
            <Image
              src={'/images/prod/prodi_5.jpg'}
              alt="лого стандарма"
              width={200}
              height={320}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.inner}>
              <span className={styles.icon}>
                <HiChevronDoubleDown />
                <HiChevronDoubleDown className={styles.chevron} />
              </span>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>ВЫСОЧАЙШАЯ НАДЁЖНОСТЬ</h3>
                <p className={styles.text}>
                  Мы понимаем, на каких принципах построена стабильная и
                  успешная работа промышленного предприятия, производственной
                  компании и высокотехнологичного бизнеса. Огромные инвестиции в
                  индустриальное производство и добывающий комплекс,
                  ответственность в энергетическом и коммунальном хозяйстве
                  заставляют ориентироваться на проверенных производителей,
                  гарантирующих качество и безотказную работу. Мы предлагаем
                  арматуру, соответствующую самым строгим критериям отбора.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card} style={{ justifySelf: 'end' }}>
            <Image
              src={'/images/prod/prodi_6.jpg'}
              alt="лого стандарма"
              width={200}
              height={320}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.inner}>
              <span className={styles.icon}>
                <HiChevronDoubleDown />
                <HiChevronDoubleDown className={styles.chevron} />
              </span>
              <div className={styles.textWrapper}>
                <h3 className={styles.heading}>ОПИРАЕМСЯ НА СТАНДАРТЫ</h3>
                <p className={styles.text}>
                  В мире новых технологий огромное значение приобрели скорость
                  принятия и документирования важных технических решений. Мы
                  следуем всем стандартам и нормам, принятым для отраслей
                  применения трубопроводной арматуры. Все наши производственные
                  площадки и система менеджмента качества сертифицированы по
                  ГОСТ ISO 9001-2011.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Prod);
