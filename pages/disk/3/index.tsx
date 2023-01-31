import styles from './Disk.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

function Disk3(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        ЗАТВОР ДИСКОВЫЙ 3-ЭКСЦЕНТРИКОВЫЙ С МЯГКИМ УПЛОТНЕНИЕМ ТИП СТМ Д
      </h2>
      <div className={styles.middleWrapper}>
        <div className={styles.left50}>
          <p className={styles.text}>
            Предназначены для герметичного перекрытия потока среды в
            технологических установках в нефтяной, газовой, химической,
            металлургической, энергетической промышленностях, хранении и
            транспортировании сжиженного природного газа. Дисковые затворы
            3-эксцентриковые являются прекрасным решением для эффективного и
            надежного функционирования в условиях высоких температур и давлений,
            а также коррозионных сред. В то же время они обладают всеми
            преимуществами обычных дисковых затворов, такими как: малые габариты
            и масса, простота монтажа, автоматизации и иные функции.
          </p>
        </div>
        <div className={styles.right50}>
          <Image
            src={'/images/prod_3_2.png'}
            alt="затвор дисковый"
            width={250}
            height={340}
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
            href={'/prod/disk_tl005.pdf'}
          >
            <a className={styles.link} target="_blank">
              Затвор дисковый 3-эксцентриковый Тип СТМ Д 42
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.middleWrapper}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.cell}>Номинальный диаметр</td>
              <td className={styles.cell}>DN 80&divide;2000 мм</td>
            </tr>
            <tr>
              <td className={styles.cell}>Номинальное давление</td>
              <td className={styles.cell}>PN 1,0&divide;42,0 МПа</td>
            </tr>
            <tr>
              <td className={styles.cell}>Материал корпуса</td>
              <td className={styles.cell}>
                ст. 20, ст. 20ГЛ, ст. 20Л , ст. 25Л , ст. 30Л, ст. 20ГМЛ, ст.
                09Г2С, ст. 16ГС, ст. 03X17H14M3, ст. 08Х18Н10Т, ст. 08Х18Н12Т,
                ст. 08Х17Н13М2Т, ст. 10Х18Н9Л, ст. 12Х18Н12М3ТЛ , ст. 13ХМ , ст.
                15ХМ , А352 LF2, А 352 LF3, А182 F316 , А182 F316L INCONEL,
                MONEL , А216 WCB, А352 LCB, A351 CF3M, A351 CF3M, A 351 CF8,
                A351 CF8M
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Производственный ряд</td>
              <td className={styles.cell}>
                PN 1,0 МПа DN 80&divide;1500 мм<br></br> PN 4,0 МПа DN
                80&divide;1000 мм<br></br> PN 10,0 МПа DN 80&divide;800 мм
                <br></br>PN 16,0 МПа DN 150&divide;600 мм
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Климатическое исполнение</td>
              <td className={styles.cell}>ГОСТ 15150-69</td>
            </tr>
            <tr>
              <td className={styles.cell}>Рабочая температура</td>
              <td className={styles.cell}>
                -196°С &divide; +1000°С - широкий диапазон рабочих температур в
                зависимости от применяемой марки стали
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Стандарты и нормы проектирования</td>
              <td className={styles.cell}>
                API 6D, API 608, ASME B16.34, ISO 17292, ASME VIII
              </td>
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
        <div className={styles.left50}>
          <h4 className={styles.listTitle}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              Огнестойкое исполнение
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Взаимозаменяемость деталей
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Тройной эксцентриситет значительно снижает коэффициент трения в
              точках контакта диска и седла, обеспечивая долговечность и
              увеличенный рабочий ресурс дискового затвора.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Поскольку трение между диском и седлом ничтожно мало, требуемый
              крутящий момент для управления дисковым затвором мал.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Отсутствует деформация уплотнения.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Форма диска и смещенная ось снижают потери на местное
              сопротивление в затворе, что увеличивает коэффициент пропускной
              способности и обеспечивает лучшие возможности для регулирования
              потока рабочей среды.
            </li>
          </ul>
        </div>

        <div className={styles.right50}>
          <h4 className={styles.listTitle}>СПЕЦИАЛЬНОЕ ИСПОЛНЕНИЕ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              Нулевая протечка в обоих направлениях
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Шпиндель с защитой от вырывания
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Уплотнение &quot;металл по металлу&quot;
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Корпус и диск изготавливаются из одного материала для обеспечения
              одинакового коэффициента температурного расширения.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Disk3);
