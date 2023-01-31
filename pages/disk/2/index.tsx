import styles from './Disk.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

function Disk2(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        ЗАТВОР ДИСКОВЫЙ 2-ЭКСЦЕНТРИКОВЫЙ С МЯГКИМ УПЛОТНЕНИЕМ ТИП СТМ Д
      </h2>
      <div className={styles.middleWrapper}>
        <div className={styles.left50}>
          <p className={styles.text}>
            Предназначены для герметичного перекрытия потока среды в
            технологических установках в нефтяной, газовой, химической,
            металлургической, энергетической промышленностях, хранении и
            транспортировании сжиженного природного газа.
          </p>
          <p className={styles.text}>
            Конструкция дискового затвора выполнена таким образом, что в отличие
            от шарового крана, запирание осуществляется за счет поджима диска к
            седлу в конечной точке поворота, при этом трение между диском и
            седлом присутствует лишь на протяжении 5...8 градусов от общего угла
            поворота в момент закрытия и открытия дискового затвора. Это
            обеспечивает возможность длительной эксплуатации без повреждения
            уплотнения.
          </p>
        </div>
        <div className={styles.right50}>
          <Image
            src={'/images/prod_3_1.png'}
            alt="завтвор дисковый"
            width={200}
            height={380}
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
            href={'/prod/disk_tl006.pdf'}
          >
            <a className={styles.link} target="_blank">
              Затвор дисковый 2-эксцентриковый Тип СТМ Д 41
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.middleWrapper}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.cell}>Номинальный диаметр</td>
              <td className={styles.cell}>DN 50&divide;1200 мм</td>
            </tr>
            <tr>
              <td className={styles.cell}>Номинальное давление</td>
              <td className={styles.cell}>PN 1,0&divide;10,0 МПа</td>
            </tr>
            <tr>
              <td className={styles.cell}>Материал корпуса</td>
              <td className={styles.cell}>
                ст. 20, ст. 20ГЛ, Ст. 09Г2С, Ст. 25Л, Ст. 08Х17Н13М2Т, Ст.
                12Х18Н12МЗТЛ, А216 WCB, А351 CF8M
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Производственный ряд</td>
              <td className={styles.cell}>
                PN 1,0&divide;2,5 МПа DN 50&divide;1200 мм<br></br> PN 4,0 МПа
                DN 80&divide;1200 мм<br></br> PN 6,3&divide;10,0 МПа DN
                100&divide;600 мм
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Климатическое исполнение</td>
              <td className={styles.cell}>ГОСТ 15150-69</td>
            </tr>
            <tr>
              <td className={styles.cell}>Рабочая температура</td>
              <td className={styles.cell}>
                -60°С &divide; +260°С - широкий диапазон рабочих температур в
                зависимости от применяемой марки стали
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Стандарты и нормы проектирования</td>
              <td className={styles.cell}>API 609, ASME В16.34</td>
            </tr>
            <tr>
              <td className={styles.cell}>Форма фланцев</td>
              <td className={styles.cell}>
                ГОСТ 33259-2015, ГОСТ 28759.4-90, ГОСТ 28919-91, DIN EN 1092-1,
                DIN 2696, ASME В16.5, ASME B16.25, ASME B16.47, ASME B16.11
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
              Шпиндель с повышенной герметичностью
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Мягкое уплотнение
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Полностью закрытые уплотнением крутого сечения и втулками опор
              диска концы шпинделя из нержавеющей стали
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Самосмазывающиеся бронзовые втулки шпинделя
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Износостойкое и коррозионноустойчивое, защищенное от смещения
              седло
            </li>
          </ul>
        </div>

        <div className={styles.left33}>
          <h4 className={styles.listTitle}>СПЕЦИАЛЬНОЕ ИСПОЛНЕНИЕ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              Огнестойкое исполнение в соответствии с ГОСТ 30247.0-94, СТ ЦКБА
              001-2003, API 607, BS 6755-2.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Удлинённый шпиндель
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Специальные материалы
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Нестандартная строительная длина
            </li>
          </ul>
        </div>
        <div className={styles.left33}>
          <h4 className={styles.listTitle}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              За счет двойного эксцентриситета в начале поворотного движения
              открывания возникает вращательное движение, на которое
              накладывается поступательное движение. Затвор поворачивается и
              одновременно движется по направлению от посадочного кольца. Таким
              образом, уже при небольшой степени открытия он приподнимается с
              седла, за счет чего уплотнительное кольцо разгружается. Такая
              конструкция уменьшает износ уплотнения и снижает крутящий момент,
              благодаря чему затворы с двойным эксцентриком могут выдерживать
              свыше 100 000 циклов закрытия и открытия при сохранении
              герметичности.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Ремонтопригодность с возможностью легкой замены элементов уплотнений.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Disk2);
