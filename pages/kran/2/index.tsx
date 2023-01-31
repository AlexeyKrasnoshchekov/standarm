import styles from './Kran.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

function Kran2(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        КРАН ШАРОВОЙ СО СЪЁМНОЙ КРЫШКОЙ ТИП СТМ Ш
      </h2>
      <div className={styles.middleWrapper}>
        <div className={styles.left50}>
          <p className={styles.text}>
            Предназначены для герметичного перекрытия потока среды в
            технологических установках в нефтяной, газовой, химической,
            металлургической, энергетической промышленностях, хранении и
            транспортировании сжиженного природного газа. Шаровые краны со
            съемной крышкой позволяют повысить безопасность процесса и
            производительность установки. Корпус шарового крана имеет одну
            поверхность разъема, что уменьшает вероятность утечек рабочей среды.
            Конструкция шарового крана может быть выполнена как с плавающим
            шаром, так и с пробкой в опорах
          </p>
        </div>
        <div className={styles.right50}>
          <Image
            src={'/images/prod_4_2.png'}
            alt="кран шаровый"
            width={300}
            height={290}
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
            href={'/prod/kran_tl002.pdf'}
          >
            <a className={styles.link} target="_blank">
              Кран шаровой со съёмной крышкой Тип СТМ Ш 32
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.middleWrapper}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.cell}>Номинальный диаметр</td>
              <td className={styles.cell}>DN 50&divide;2000 мм</td>
            </tr>
            <tr>
              <td className={styles.cell}>Номинальное давление</td>
              <td className={styles.cell}>PN 1,6&divide;42,0 МПа</td>
            </tr>
            <tr>
              <td className={styles.cell}>Материал корпуса</td>
              <td className={styles.cell}>
                ст. 20, ст. 20Г, ст. 25Г, ст. ЗОГ, ст. 09Г2С, ст. 03Х18Н11, ст.
                03X18Н12, ст. 03Х18Н10Т, ст. 05Х18Н10Т, ст. 06Х18Н11, ст.
                08Х18Н10, ст. 08Х18Н10Т, ст. 08Х18Н12Т, ст. 08Х18Н12Б, ст.
                03X17H14M3, ст. 10Х18Н9Л, ст. ХН73МБТЮ , ст. ХН80ТБЮ, МНЖМц
                28-2,5-1,5, ст. 12ХМ, ст. 13ХМ , ст. 15ХМ , ст. 10Х2М1, ст.
                12Х2М1, ст. 12Х18Н12МЗТЛ , ст. 20Х2М1Л , ст. 20ХМЛ, ст. 20Х5МЛ,
                ст. 20Х8ВЛ, ст. 07X18Н9Л, БрА10Ж4Н4Л, БрАЖ 9-4, А350 LF2, А350
                LF3, A105N, А182 F304, А182 F304L, А182 F316, А182 F316L, F11,
                F12, А105, F321, F347, F51, F53, F55, INCONEL, MONEL, А216 WCB,
                А352 LCB, A217 WC6, A217 WC9, A217 C5, A217 C12, A351 CF3, A351
                CF3M, A351 CF8, A351 CF8M, C95500, C61900, 4A, 5A
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Производственный ряд</td>
              <td className={styles.cell}>
                PN 1,6&divide;10,0 МПа DN 50&divide;1400 мм<br></br>
                PN 16,0 МПа DN 50&divide;1200 мм<br></br>
                PN 25,0 МПа DN 50&divide;700 мм<br></br>
                PN 42,0 МПа DN 50&divide;400 мм
              </td>
            </tr>
            <tr>
              <td className={styles.cell}>Климатическое исполнение</td>
              <td className={styles.cell}>ГОСТ 15150-69</td>
            </tr>
            <tr>
              <td className={styles.cell}>Рабочая температура</td>
              <td className={styles.cell}>
                -196°С &divide; +750°С - широкий диапазон рабочих температур в
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
        <div className={styles.left33}>
          <h4 className={styles.listTitle}>СТАНДАРТНОЕ ИСПОЛНЕНИЕ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              Шпиндель с защитой от вырывания
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Антистатическое устройство
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Герметичность шарового крана в любом направлении патока
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Полнопроходная или неполнопроходная конструкция
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Пожаробезопасная конструкция в соответствии с IS0 10497, API 607,
              API 6FA.BS 6755-2
            </li>
          </ul>
        </div>

        <div className={styles.left33}>
          <h4 className={styles.listTitle}>СПЕЦИАЛЬНОЕ ИСПОЛНЕНИЕ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              Присоединение к трубопроводу по варианту заказчика
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Защитное износостойкое покрытие шаровой пробки и седла
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Сёдла с двойным эффектом поршня
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Сёдла в компоновке - одно седло с с двойным эффектом поршня,
              другое седло с одинарным эффектом поршня
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Система двойной блокировки и сброса давления
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Аварийное дополнительное уплотнение сёдел и шпинделя
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Ввод уплотнительной смазки в зону уплотнения седел и шпинделя
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Дренажный клапан
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Удлинённый шпиндель
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Расширенная крышка
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Уплотнение &quot;металл по металлу&quot;
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Соответствие материалов требованиям ГОСТ 53678-2009, ГОСТ
              53679-2009, EN ISO 15156-1, NACEMR0103
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Опорные поверхности (лапы)
            </li>
          </ul>
        </div>
        <div className={styles.left33}>
          <h4 className={styles.listTitle}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h4>
          <ul className={styles.list}>
            <li>
              <span>{<FaChevronRight />}</span>
              Оптимальны для случаев, когда может потребоваться техническое
              обслуживание по месту установки.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Возможность снять крышку для свободного доступа к полости корпуса
              без демонтажа крана с трубопровода.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Серия специальных инструментов для технического обслуживания,
              позволяющая извлекать шар из седла.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Проведения техобслуживания в ограниченном пространстве вокруг
              шарового крана.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Исполнение как с полным, такие неполным проходом.
            </li>
            <li>
              <span>{<FaChevronRight />}</span>
              Присоединение к трубопроводу в зависимости от технологии возможно
              во фланцевом исполнении с любым видом уплотнительной поверхности
              или сварное.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Kran2);
