import styles from './Klin.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';

function Klin(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="ЗАДВИЖКА КЛИНОВАЯ" />
        <title>ЗАДВИЖКА КЛИНОВАЯ ТИП СТМ 3</title>
        <meta
          name="description"
          content="Предназначены для герметичного перекрытия потока среды в
              технологических установках в нефтяной, газовой, химической,
              металлургической, энергетической промышленностях, хранении и
              транспортировании сжиженного природного газа."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ЗАДВИЖКА КЛИНОВАЯ ТИП СТМ 3</h2>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <p className={styles.text}>
              Предназначены для герметичного перекрытия потока среды в
              технологических установках в нефтяной, газовой, химической,
              металлургической, энергетической промышленностях, хранении и
              транспортировании сжиженного природного газа.
            </p>
            <p className={styles.text}>
              В полностью открытом положении клиновой задвижки нижняя точка
              клина расположена выше проходного сечения трубопровода, что
              обеспечивает беспрепятственный проход рабочей среды, минимизирует
              потери рабочего давления, увеличивает эффективность
              транспортировки.
            </p>
          </div>
          <div className={styles.right50}>
            <Image
              src={'/images/prod_1_1.png'}
              alt="ЗАДВИЖКА КЛИНОВАЯ"
              width={200}
              height={400}
            />
          </div>
        </div>
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
            href={'/prod/klin_tl007.pdf'}
          >
            <a className={styles.link} target="_blank">
              Задвижка клиновая Тип СТМ З 11
            </a>
          </Link>
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
                <td className={styles.cell}>PN 1,6&divide;42,0 МПа</td>
              </tr>
              <tr>
                <td className={styles.cell}>Материал корпуса</td>
                <td className={styles.cell}>
                  ст. 20, ст. 20ГЛ, ст. 20Л, ст. 20ХМЛ, ст. 20Х2М1Л, ст. 09Г2С,
                  ст. 07Х18Н10П2СМ2Л, ст. 08Х17Н13М2, ст. 10Х18Н9Л, ст.
                  12Х18Н12МЗТЛ А216 WCB, А216 WCC, А352 LCB, А217 WC6, А217 WC9,
                  А351 CF3, А351 CF3M, А351 CF8, А351 CF8M
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>Производственный ряд</td>
                <td className={styles.cell}>
                  PN 1,6&divide;2,5 МПа DN 50&divide;1500 мм PN 4,0&divide;10,0
                  МПа DN 50&divide;900 мм PN 16,0&divide;25,0 МПа DN
                  50&divide;600 мм PN 42,0 МПа DN 50&divide;300 мм
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>Климатическое исполнение</td>
                <td className={styles.cell}>ГОСТ 15150-69</td>
              </tr>
              <tr>
                <td className={styles.cell}>Рабочая температура</td>
                <td className={styles.cell}>
                  -196°С &divide; +600°С - широкий диапазон рабочих температур в
                  зависимости от применяемой марки стали
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>
                  Стандарты и нормы проектирования
                </td>
                <td className={styles.cell}>
                  API 600, АPI 6D, ASME В16.34, АPI 598
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
                  ГОСТ 9544-2015, ISO 5208 – класс «А»
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
          <div className={styles.left60}>
            <div className={styles.flex}>
              <div>
                <h4 className={styles.listTitle}>СТАНДАРТНОЕ ИСПОЛНЕНИЕ</h4>
                <ul className={styles.list}>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Применяемые методы очистки сточных вод
                  </li>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Очистка ливневых, талых сточных вод
                  </li>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Очистка промышленных сточных вод
                  </li>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Очистка сточных вод для повторного использования
                  </li>
                </ul>
              </div>
              <div>
                <h4 className={styles.listTitle}>СПЕЦИАЛЬНОЕ ИСПОЛНЕНИЕ</h4>
                <ul className={styles.list}>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Применяемые методы очистки сточных вод
                  </li>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Очистка ливневых, талых сточных вод
                  </li>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Очистка промышленных сточных вод
                  </li>
                  <li>
                    <span>{<FaChevronRight />}</span>
                    Очистка сточных вод для повторного использования
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                Малое гидравлическое сопротивление делает клиновые задвижки
                особенно ценными для использования в магистральных
                трубопроводах, для которых характерно постоянное
                высокоскоростное движение рабочей среды.
              </p>
            </div>
          </div>
          <div className={styles.right40}>
            <h4 className={styles.listTitle}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h4>
            <p className={styles.text}>
              Задвижка изготавливается в исполнениях корпуса: фланцевое, под
              приварку. Установочное положение задвижки на вертикальном
              трубопроводе - любое. Установочное положение задвижки на
              горизонтальном трубопроводе - шпинделем вверх. При наклонном или
              горизонтальном положении задвижки должна быть предусмотрена
              дополнительная опора под привод. Направление подачи среды - с
              любой стороны магистральных фланцев. Ограничительное кольцо
              устанавливается по требованию заказчика. Конструкция
              полнопроходной клиновой задвижки обеспечивает свободный проход
              механических очистных и диагностических устройств.
            </p>
          </div>
        </div>

        <div className={styles.gradient}></div>
      </div>
    </>
  );
}

export default withLayout(Klin);
