import styles from './Arma.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheck2 } from 'react-icons/bs';

function Arma(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ЭЛЕКТРИЧЕСКИЕ ПРИВОДЫ AUMA</h2>
        <div className={styles.innerWrapper}>
          <div className={styles.textWrapper}>
            <p>
              ЭЛЕКТРИЧЕСКИЕ ПРИВОДЫ И РЕДУКТОРЫ AUMA ХАРАКТЕРИЗУЮТСЯ ПРОСТЫМ
              УПРАВЛЕНИЕМ, НАДЕЖНОСТЬЮ, ДОЛГИМ СРОКОМ СЛУЖБЫ В САМЫХ
              НЕБЛАГОПРИЯТНЫХ УСЛОВИЯХ ОКРУЖАЮЩЕЙ СРЕДЫ. БЛАГОДАРЯ РАЗЛИЧНЫМ
              ШАГАМ ПОЗИЦИОНИРОВАНИЯ, БОЛЬШОМУ КОЛИЧЕСТВУ ТИПОРАЗМЕРОВ И
              ИСПОЛНЕНИЙ МОДУЛЬНЫЕ ЭЛЕКТРОПРИВОДЫ ПОДХОДЯТ ДЛЯ ЛЮБЫХ МОНТАЖНЫХ
              ПОЛОЖЕНИЙ. НОВЫЕ МОДЕЛИ СОВМЕСТИМЫ С ВЫПУСКАВШИМИСЯ РАНЕЕ, ПОЭТОМУ
              ОБОРУДОВАНИЕ ЛЕГКО МОДИФИЦИРОВАТЬ. БЛОКИ УПРАВЛЕНИЯ AUMA И
              СООТВЕТСТВУЮЩИЕ ИНТЕРФЕЙСЫ ОБЕСПЕЧИВАЮТ НАДЕЖНУЮ СВЯЗЬ МЕЖДУ
              АРМАТУРОЙ И СИСТЕМОЙ УПРАВЛЕНИЯ.
            </p>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>НЕПОЛНООБОРОТНЫЙ ПРИВОД SQ</h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация дисковых затворов и шаровых кранов
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Типоразмеры: 05.2 - 14.2
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: 50 - 2400 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Время поворота на 90°: 6 - 100 сек
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Угол: 65°-180°
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Тип SQR для режима регулирования
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Тип SQEx/SQREx для взрывоопасных сред
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_1.png'}
                alt="лого стандарма"
                width={200}
                height={320}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>ЧЕРВЯЧНЫЙ РЕДУКТОР GS</h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация затворов и кранов
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: до 675 000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Время поворота на 90°: 9 - 392 сек
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_2.png'}
                alt="лого стандарма"
                width={200}
                height={275}
              />
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ЧЕРВЯЧНЫЙ РЕДУКТОР GS B КОМБИНАЦИИ С МНОГООБОРОТНЫМ ПРИВОДОМ SA
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация затворов и кранов
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: до 675 000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Время поворота на 90°: 9 - 392 сек
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_3.png'}
                alt="лого стандарма"
                width={200}
                height={235}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                КОНИЧЕСКИЙ РЕДУКТОР GK В КОМБИНАЦИИ С МНОГООБОРОТНЫМ ПРИВОДОМ SA
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация задвижек, в т.ч. с двойным штоком
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: до 16 000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Отклонение направления силы на 90°
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_4.png'}
                alt="лого стандарма"
                width={200}
                height={320}
              />
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ЦИЛИНДРИЧЕСКИЙ РЕДУКТОР GST В КОМБИНАЦИИ С МНОГООБОРОТНЫМ
                ПРИВОДОМ SA
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация задвижек
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: до 16 000 Нм
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_5.png'}
                alt="лого стандарма"
                width={200}
                height={390}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>КОНИЧЕСКИЙ РЕДУКТОР GK</h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация задвижек, в т.ч. с двойным штоком
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: до 16 000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Отклонение направления силы на 90°
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_6.png'}
                alt="лого стандарма"
                width={200}
                height={330}
              />
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>МНОГООБОРОТНЫЙ ПРИВОД SA</h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Автоматизация задвижек и проходной арматуры
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Типоразмеры: 07.2 - 16.2 и 25.1- 60.1
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: 10 Нм - 32 000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходная скорость: 6 - 180 об/мин
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Тип SAR для режима регулирования
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Тип SAEx/SAREx для взрывоопасных сред
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_7.png'}
                alt="лого стандарма"
                width={200}
                height={290}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          ПНЕВМАТИЧЕСКИЕ, ГИДРАВЛИЧЕСКИЕ И СПЕЦИАЛЬНЫЕ ПРИВОДЫ
        </h2>
        <div className={styles.innerWrapper}>
          <div className={styles.textWrapper}>
            <p>
              ПНЕВМАТИЧЕСКИЕ И ГИДРАВЛИЧЕСКИЕ ПРИВОДЫ ХАРАКТЕРИЗУЮТСЯ ШИРОКИМ
              ДИАПАЗОНОМ КРУТЯЩИХ МОМЕНТОВ И СКОРОСТЬЮ СРАБАТЫВАНИЯ. БЛАГОДАРЯ
              СВОЙСТВАМ ПОДГОТОВЛЕННОГО ВОЗДУХА КИПИА ПНЕВМАТИЧЕСКИЕ ПРИВОДЫ
              ИДЕАЛЬНО ПОДХОДЯТ ДЛЯ ПРИМЕНЕНИЯ В ПОЖАРО- И ВЗРЫВООПАСНЫХ ЗОНАХ
              НА ПРОИЗВОДСТВАХ. ГИДРАВЛИЧЕСКИЕ ПРИВОДЫ СО СДВОЕННОЙ ТРУБНОЙ
              ОБВЯЗКОЙ ДЛЯ ВХОДЯЩЕЙ И ВЫХОДЯЩЕЙ РАБОЧЕЙ СРЕДЫ МОГУТ
              УСТАНАВЛИВАТЬСЯ В ВЫСОКОПРОИЗВОДИТЕЛЬНЫХ СИСТЕМАХ. НАДЁЖНЫЕ БЛОКИ
              УПРАВЛЕНИЯ И ПОЗИЦИОНИРУЮЩИЕ УСТРОЙСТВА ОБЕСПЕЧАТ БЕСПЕРЕБОЙНЫЙ
              КОНТРОЛЬ НАД ПОТОКОМ.
            </p>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ГИДРАВЛИЧЕСКИЕ ПРИВОДЫ С КРИВОШИПНОЙ ПЕРЕДАЧЕЙ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Гидравлические приводы в конфигурациях двойного действия или с
                  пружинным возвратом
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Цилиндры, устойчивые к коррозии
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент до 600000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Совместимы с частичным тестированием хода устройства
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Сертификация для SIL применений
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_8.png'}
                alt="лого стандарма"
                width={200}
                height={260}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ПНЕВМАТИЧЕСКИЕ ПРИВОДЫ С КРИВОШИПНОЙ ПЕРЕДАЧЕЙ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Пневматические приводы в конфигурациях двойного действия или с
                  пружинным возвратом
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Цилиндры, устойчивые к коррозии
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент до 600000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Совместимы с частичным тестированием хода устройства
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Сертификация для SIL применений
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_9.png'}
                alt="лого стандарма"
                width={200}
                height={260}
              />
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ПРИВОДЫ ПОД ГАЗ ВЫСОКОГО ДАВЛЕНИЯ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Приводы с треугольным шатуном в конфигурациях двойного
                  действия или с пружинным возвратом
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Приоритетное гидравлическое ручное управление
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Управление скоростью в обоих направлениях
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент до 600000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Совместимы с частичным тестированием хода устройства
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_10.png'}
                alt="лого стандарма"
                width={200}
                height={180}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                КОМПАКТНЫЕ ПРИВОДЫ С КУЛИСНЫМ МЕХАНИЗМОМ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Компактные приводы с треугольным шатуном
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Конфигурация двойного действия и пружинного возврата
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Содержат пружинный модуль, обеспечивающий безопасность и
                  удобство эксплуатации
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент до 4600 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Совместимы с частичным тестированием хода устройства
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Сертификация для SIL2 применений как единое устройство
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_11.png'}
                alt="лого стандарма"
                width={200}
                height={340}
              />
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ПНЕВМАТИЧЕСКИЕ ПРИВОДЫ С РЕЕЧНОЙ ПЕРЕДАЧЕЙ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Конфигурация двойного действия и пружинного возврата
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Цилиндры, устойчивые к коррозии
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент от 2 Нм до 5800 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Управляющий пневматический сигнал: давление сжатого воздуха от
                  0,2 до 1,0 МПа
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Сертификация для SIL3 применений как единое устройство
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Совместимы с частичным тестированием хода устройства
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_12.png'}
                alt="лого стандарма"
                width={200}
                height={390}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                КОМПАКТНЫЕ ПРИВОДЫ С ЗУБЧАТОЙ ВИНТОВОЙ ПЕРЕДАЧЕЙ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Стойкие к агрессивным условиям окружающей среды
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Сертификация для SIL3 применений, в ограниченных пространствах
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Пневматические и гидравлические, одинарного и двойного
                  действия
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Крутящий момент: до 600000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Температурный диапазон от - 60 до 100°С
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_13.png'}
                alt="лого стандарма"
                width={200}
                height={250}
              />
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ПРИВОДЫ С КРИВОШИПНОЙ ПЕРЕДАЧЕЙ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Конфигурация двойного действия и пружинного возврата
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Цилиндры, устойчивые к коррозии
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент до 4500 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Сертификация для SIL3 применений как единое устройство
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_14.png'}
                alt="лого стандарма"
                width={200}
                height={190}
              />
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.listWrapper}>
            <div className={styles.listInnerWrapper}>
              <h4 className={styles.listTitle}>
                ПНЕВМОГИДРАВЛИЧЕСКИЕ ПРИВОДЫ С КРИВОШИПНОЙ ПЕРЕДАЧЕЙ
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Приводы с треугольным шатуном в конфигурациях двойного
                  действия или с пружинным возвратом
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Опции логического управления - низкое или высокое давление
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Приоритетное гидравлическое ручное управление
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Управление скоростью в обоих направлениях
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Выходной момент до 600000 Нм
                </li>
                <li>
                  <span>
                    <BsCheck2 />
                  </span>
                  Совместимы с частичным тестированием хода устройства
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src={'/images/arma/priv_15.png'}
                alt="лого стандарма"
                width={200}
                height={250}
              />
            </div>
          </div>
          <div className={styles.listWrapper}></div>
        </div>
        <div className={styles.gradient}></div>
      </div>
    </>
  );
}

export default withLayout(Arma);
