import styles from './Shiber.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';

function Shiber(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Шиберные задвижки" />
        <title>ЗАДВИЖКА ШИБЕРНАЯ ТИП СТМ 3</title>
        <meta
          name="description"
          content="Шиберные задвижки не чувствительны к загрязнённым средам,
              поэтому они широко применяются в горно-обогатительных
              производствах, в камерных насосах для транспортирования абразивных
              сред, в целлюлозно-бумажной промышленности"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ЗАДВИЖКА ШИБЕРНАЯ ТИП СТМ 3</h2>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <p className={styles.text}>
              Предназначены для герметичного перекрытия потока среды в
              технологических установках в нефтяной, газовой, химической,
              металлургической, энергетической промышленностях, хранении и
              транспортировании сжиженного природного газа.
            </p>
            <p className={styles.text}>
              Также шиберные задвижки не чувствительны к загрязнённым средам,
              поэтому они широко применяются в горно-обогатительных
              производствах, в камерных насосах для транспортирования абразивных
              сред, в целлюлозно-бумажной промышленности для работы на пульпе, в
              фильтр-прессах для сепарации жидкой и твёрдой фаз, в системах
              пневмотранспорта сыпучих сред и пр.
            </p>
          </div>
          <div className={styles.right50}>
            <Image
              src={'/images/prod_2_1.png'}
              alt="задвижка шиберная"
              width={200}
              height={400}
            />
          </div>
        </div>
        <div className={styles.linkOuterWrapper}>
          <div className={styles.linkWrapper}>
            <Image
              src={'/images/icons/ico_opr.png'}
              alt="иконка"
              width={27}
              height={40}
              className={styles.icon}
            />
            <span>Типовой лист:</span>
            <Link
              legacyBehavior
              download
              className={styles.link}
              href={'/prod/shiber_tl008.pdf'}
            >
              <a className={styles.link} target="_blank">
                Задвижка шиберная Тип СТМ З 14
              </a>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Image
              src={'/images/icons/ico_opr.png'}
              alt="иконка"
              width={27}
              height={40}
              className={styles.icon}
            />
            <span>Краткое описание:</span>
            <Link
              legacyBehavior
              download
              className={styles.link}
              href={'/prod/shiber_ko9.pdf'}
            >
              <a className={styles.link} target="_blank">
                Задвижка шиберная облегчённой конструкции Тип СТМ З 14-О
              </a>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Image
              src={'/images/icons/ico_opr.png'}
              alt="иконка"
              width={27}
              height={40}
              className={styles.icon}
            />
            <span>Краткое описание:</span>
            <Link
              legacyBehavior
              download
              className={styles.link}
              href={'/prod/shiber_ko10.pdf'}
            >
              <a className={styles.link} target="_blank">
                Задвижка шиберная с составным шибером Тип СТМ З 15
              </a>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <Image
              src={'/images/icons/ico_opr.png'}
              alt="иконка"
              width={27}
              height={40}
              className={styles.icon}
            />
            <span>Краткое описание:</span>
            <Link
              legacyBehavior
              download
              className={styles.link}
              href={'/prod/shiber_ko11.pdf'}
            >
              <a className={styles.link} target="_blank">
                Задвижка шиберная с составным шибером топливный газ СТМ З 15-Т
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.cell}>Номинальный диаметр</td>
                <td className={styles.cell}>DN 50&divide;1500 мм</td>
              </tr>
              <tr>
                <td className={styles.cell}>Номинальное давление</td>
                <td className={styles.cell}>PN 1,0&divide;25,0 МПа</td>
              </tr>
              <tr>
                <td className={styles.cell}>Материал корпуса</td>
                <td className={styles.cell}>
                  ст. 20, ст. 20ГЛ, ст. 20Л, ст. 25Л, ст. 30Л, ст. 20ГМЛ, ст.
                  09Г2С, ст. 15ГЛ, А216 WCB, А216 WCC, А352 LCB, А352 LCC
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>Производственный ряд</td>
                <td className={styles.cell}>
                  PN 1,0&divide;4,0 МПа DN 50&divide;1500 мм<br></br> PN 10,0
                  МПа DN 50&divide;1200 мм<br></br> PN 16,0 МПа DN 50&divide;700
                  мм
                  <br></br>PN 25,0 МПа DN 50&divide;500 мм
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>Климатическое исполнение</td>
                <td className={styles.cell}>ГОСТ 15150-69</td>
              </tr>
              <tr>
                <td className={styles.cell}>Рабочая температура</td>
                <td className={styles.cell}>
                  -101°С ÷ +350°С - широкий диапазон рабочих температур в
                  зависимости от применяемой марки стали
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>
                  Стандарты и нормы проектирования
                </td>
                <td className={styles.cell}>
                  АPI 6D, API 608, ASME В16.34, ISO 17292, ASMEVIII
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>Форма фланцев</td>
                <td className={styles.cell}>
                  ГОСТ 33259-2015, ГОСТ 28759.4-90, ГОСТ 28919-91, DIN EN
                  1092-1, DIN 2696, ASME В16.5, ASME B16.25, ASME B16.47, ASME
                  B16.11
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>
                  Стандарт испытания герметичности в затворе
                </td>
                <td className={styles.cell}>
                  ГОСТ 9544-2015, ISO 5208 - класс «А»
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>
                  Оснащение исполнительным механизмом
                </td>
                <td className={styles.cell}>
                  Ручной, электрический, пневматический, гидравлический,
                  пневмогидравлический, электрогидравлический, специальный
                  приводной механизм
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.flex}>
          <div className={styles.left33}>
            <h4 className={styles.listTitle}>СТАНДАРТНОЕ ИСПОЛНЕНИЕ</h4>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Полнопроходная конструкция
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Крышка с соединением на болтах
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Самоцентрующийся сальник
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Фланцевое присоединение к трубопроводу
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Ограничитель хода шпинделя
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Местный указатель положения
              </li>
            </ul>
          </div>

          <div className={styles.left33}>
            <h4 className={styles.listTitle}>СПЕЦИАЛЬНОЕ ИСПОЛНЕНИЕ</h4>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Неполнопроходная конструкция
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Система уплотнения между штоком и крышкой
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Футерованный шибер для сред, содержащих механические примеси
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Уплотнение «металл-по-металлу» с упрочняющим покрытием
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Ввод смазки, дренажный и сбросной клапаны
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Удлиненный шпиндель
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Соответствие материалов требованиям ГОСТ 53678-2009, ГОСТ
                53679-2009, EN ISO 15156-1, NACE MR 0103
              </li>
            </ul>
          </div>
          <div className={styles.left33}>
            <h4 className={styles.listTitle}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h4>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Износостойкость
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Надежность уплотнений при эксплуатации
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Аварийное закрытие
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Безопасный сброс давления
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Простота в обслуживании
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Антикоррозионное покрытие
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Стойкость к сероводородному растрескиванию
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Огнестойкость
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Антистатическое устройство
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Корпус шиберной задвижки и трубопровод имеют одинаковый срок
                службы
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.gradient}></div>
      </div>
    </>
  );
}

export default withLayout(Shiber);
