import styles from './Water.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { FaChevronRight } from 'react-icons/fa';
import P from '@/components/P/P';
import MenuItem from '@/components/MenuItem/MenuItem';
import Head from 'next/head';

function Water(): JSX.Element {
  const files = [
    {
      name: 'ОЛ Водопроводные очистные сооружения',
      link: '/oprlist/oprlist8.pdf',
    },
    {
      name: 'ОЛ Ливневые очистные сооружения',
      link: '/oprlist/oprlist9.pdf',
    },
    {
      name: 'ОЛ Очистка промышленных сточных вод',
      link: '/oprlist/oprlist10.pdf',
    },
    {
      name: 'ОЛ Очистка хоз-бытовых сточных вод',
      link: '/oprlist/oprlist11.pdf',
    },
    {
      name: 'ОЛ Цех мех обезвоживания',
      link: '/oprlist/oprlist12.pdf',
    },
  ];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="ВОДОПОДГОТОВКА, ПОДГОТОВКА ТЕХНИЧЕСКОЙ ВОДЫ, ПОДГОТОВКА питьевой ВОДЫ"
        />
        <title>ТЕХНОЛОГИИ ОЧИСТКИ ВОДЫ</title>
        <meta
          name="description"
          content="Все очистные сооружения просты в монтаже и обслуживании,
          обеспечивают гарантированно стабильное качество очистки, а также
          высокую степень энергосбережения."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>ТЕХНОЛОГИИ ОЧИСТКИ ВОДЫ</h2>
        <div
          className={styles.innerWrapper}
          // style={{ backgroundImage: `url("/images/water.webp")` }}
        >
          <div className={styles.left50}>
            {/* <div className={styles.textWrapper}> */}
            <P size="m" className={styles.text}>
              Одним из ключевых направлений деятельности нашей компании является
              проектирование, строительство и комплексная поставка систем
              очистки сточных вод промышленных предприятий и систем
              водоподготовки. Работая в данном направлении на протяжении более
              10 лет, мы непрерывно совершенствовали предлагаемые технические
              решения и на сегодняшний день готовы выполнить весь комплекс работ
              необходимый для обеспечения производственных задач любой сложности
              от блочно-модульных установок для очистки малых объемов воды до
              строительства комплекса сооружений для сложных производственных
              задач.
            </P>
            <P size="m" className={styles.text}>
              Все очистные сооружения просты в монтаже и обслуживании,
              обеспечивают гарантированно стабильное качество очистки, а также
              высокую степень энергосбережения. Для проектных организаций мы
              разработали типовые решения, позволяющие сократить срок и
              стоимость разработки проектно-сметной документации и выполняющие
              все требования для прохождения государственной экспертизы.
            </P>
            <p className={styles.text} style={{ marginTop: '1rem' }}>
              Предлагаем Вам{' '}
              <Link className={styles.link} href={'#opr'}>
                опросные листы
              </Link>{' '}
              для отправки нам детальных запросов
            </p>
            {/* </div> */}
          </div>
          <div className={styles.right50}>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/water.jpg'}
                alt="водоподготовка"
                layout="fill"
                className={styles.image}
                // style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>ВОДОПОДГОТОВКА</h2>
        </div>
        <div className={styles.inner}>
          <span>
            <HiChevronDoubleDown />
            <HiChevronDoubleDown className={styles.chevron} />
          </span>
          <div className={styles.textInnerWrapper}>
            <p className={styles.text}>
              Качество нашей продукции и услуг должно соответствовать
              требованиям потребителей и превосходить их ожидания. Мы несём
              ответственность за наше оборудование от его подбора и разработки
              до монтажа и эксплуатации, обеспечиваем контроль качества на всех
              стадиях производства.
            </p>
          </div>
          <div className={styles.image1}>
            <Image
              src={'/images/ob_2.png'}
              alt="иконка"
              width={458}
              height={305}
            />
          </div>
        </div>
        <div className={styles.inner}>
          <span>
            <HiChevronDoubleDown />
            <HiChevronDoubleDown className={styles.chevron} />
          </span>
          <div className={styles.textInnerWrapper}>
            <p className={styles.text}>
              Вода для питьевых нужд должна удовлетворять требованиям
              санитарно-эпидемиологической и радиационной безопасности, быть
              безвредной по химическому составу и обладать благоприятными
              органолептическими свойствами. Это достигается путём удаления
              биогенных элементов, тяжёлых металлов, галогенопроизводных,
              бактерий и пр., а также, в случае необходимости, добавления
              недостающих микроэлементов.
            </p>
          </div>
          <div className={styles.image1}>
            <Image
              src={'/images/ob_3.png'}
              alt="иконка"
              width={458}
              height={305}
            />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>ПОДГОТОВКА ТЕХНИЧЕСКОЙ ВОДЫ</h2>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left30}>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_4.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>ГЕНЕРАЦИЯ</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_5.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>МЕТАЛЛУРГИЯ</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_6.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>НЕФТЕДОБЫЧА</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_7.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>НЕФТЕПЕРЕРАБОТКА</h4>
            </div>
          </div>
          <div className={styles.right70}>
            <div className={styles.rightTextWrapper}>
              <p className={styles.text}>
                Качественная подготовка технической воды – комплекс мероприятий,
                требующий серьезных предварительных исследований, основательных
                инженерных решений и разработки целой системы водного хозяйства
                промышленного предприятия.
              </p>
              <p className={styles.text}>
                Потребление больших объемов технической воды – потребность
                многих современных предприятий. Постоянная водоподготовка и
                последующий сброс требует серьезных затрат, которые возникают в
                результате функционирования незамкнутой системы водоснабжения.
                Лучший способ экономично подготовить нужный объем технической
                жидкости – организовать систему оборотного водоснабжения
                (замкнутую систему водного хозяйства). Такая система
                предполагает повторную очистку технической воды после ее
                использования.
              </p>
            </div>
            <h4 className={styles.listTitle}>Виды работ:</h4>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Приготовление подпиточной воды котельных ТЭЦ и АЭС
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Приготовление подпиточной воды оборотных циклов
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Приготовление воды для производственных нужд (металлургия, хим.
                производство, нефтегазовое производство)
              </li>
            </ul>
            <h4 className={styles.listTitle}>Применяемые технологии:</h4>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Фильтры (напорные и безнапорные)
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Ультрафильтрация
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Дегазаторы
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Ионный обмен
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Обратный осмос
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Обеззараживание
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Обезжелезивание
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Комплексы приготовления и дозирования реагентов.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>ПОДГОТОВКА ПИТЬЕВОЙ ВОДЫ</h2>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.left50}>
            <p className={styles.text}>
              На сегодняшний день, сложно найти источники воды пригодной для
              питья без предварительной очистки. Для решения этой проблемы
              разработаны и успешно внедряются станции очистки малозагрязненных
              природных вод – автоматизированные блочно-модульные станции
              водоподготовки. Станции специально разработаны для локальной
              очистки малозагрязненных природных вод от населенных пунктов
              численностью от 200 до 3200 жителей, в местах, где подключение к
              действующим сетям не возможно или экономически не выгодно.
            </p>
            <p className={styles.text}>
              Очистные сооружения выпускаются с производства уже
              укомплектованные всем необходимым оборудованием, исходная вода
              может подаваться на очистку после монтажа станции на объекте и
              подключения к инженерным сетям.
            </p>
          </div>
          <div className={styles.right50}>
            <Image
              src={'/images/ob_8.png'}
              alt="схема работы станции"
              layout="fill"
              className={styles.image}
              style={{ alignSelf: 'center' }}
            />
            <p className={styles.text}>
              Мы также предлагаем сервисное обслуживание и готовы
              эксплуатировать фирменные очистные сооружения с обеспечением
              высоких показателей очистки воды.
            </p>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>ОЧИСТКА СТОЧНЫХ ВОД</h2>
        </div>
        <div>
          <div className={styles.inner}>
            <p className={styles.text}>
              Очистка сточных вод является одной из лидирующих и актуальных
              проблем наших дней. Необходимость в очищении сточных вод от
              всевозможных типов загрязнений возникает, если качество
              исследуемой воды не соответствует общепринятым регламентированным
              требованиям.
            </p>
          </div>
          <div className={styles.flex}>
            <div className={styles.left50}>
              <h4 className={styles.listTitle}>Направление работ:</h4>
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
            <div className={styles.right50}>
              <h4 className={styles.listTitle}>
                Применяемые методы очистки сточных вод:
              </h4>
              <ul className={styles.list}>
                <li>
                  <span>{<FaChevronRight />}</span>
                  Механические
                </li>
                <li>
                  <span>{<FaChevronRight />}</span>
                  Физико-химические
                </li>
                <li>
                  <span>{<FaChevronRight />}</span>
                  Биохимические
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.inner}>
            <p className={styles.text}>
              Выбор технологии для очистки ливневых, хозбытовых стоков, или
              стоков производств в первую очередь влияет на дальнейшие
              капитальные и эксплуатационные расходы предприятия. Расчет
              основных технико-экономических показателей процесса очистки
              позволит выбрать оптимальную технологию.
            </p>
          </div>
          <div className={styles.imageCenter}>
            <Image
              src={'/images/ob_9.png'}
              alt="иконка"
              width={770}
              height={320}
            />
          </div>
          <div className={styles.inner}>
            <p className={styles.text}>
              Хозяйственно-бытовые сточные воды образуются в результате
              использования населением водопроводной воды для удовлетворения
              бытовых и физиологических потребностей и последующего поступления
              используемой воды в канализационную сеть через
              санитарно-технические приборы. Сточные воды загрязняются
              физиологическими выделениями человека, бытовыми кухонными
              отбросами, домовым мусором.
            </p>
          </div>
          <div className={styles.innerWrapper}>
            <Image
              src={'/images/ob_10.png'}
              alt="иконка"
              width={700}
              height={320}
              className={styles.imageLeft}
            />
            <p className={styles.text}>
              Для наилучшей очистки хозяйственно-бытовых и близких по составу
              сточных вод мы предлагаем три типа различных по конструктивному
              решению и бюджету станции биологической очистки, которые работают
              по усовершенствованной классической технологии. Данная технология
              относится к способам биологической очистки стоков
              свободноплавающим активным илом, при которой качественная очистка
              достигается за счет создания равномерно распределенной
              технологической нагрузки в течении суток на все сооружения.
              Станции разработаны для локальной очистки сточных вод от
              населенных пунктов численностью от 80 до 4 800 жителей.
              Усовершенствованная технология позволяет добиться стабильно
              высоких показателей очистки и повторно использовать очищенную воду
              в технических целях.
            </p>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.left60}>
            <p className={styles.text}>
              Ливневые сточные воды. На загрязненность влияют уровень
              благоустройства территории, плотность населения, интенсивность
              движения транспорта и пешеходов. Характер и концентрация
              загрязнений поверхностного стока изменяется в зависимости от
              вышеперечисленных факторов. Стоки содержат взвешенные вещества,
              органические вещества, нефтепродукты.
            </p>
            <p className={styles.text}>
              Для очистки поверхностных (ливневых, талых и промывных) сточных
              вод, мы предлагаем к внедрению станции двух типов:
              блочно-модульные и из стеклопластика. Данные станции применяются
              для очистки сточных вод до нормативов, предъявляемых к выпуску в
              рыбо-хозяйственные водоемы первой категории, от следующих видов
              загрязнений:
            </p>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                твердые взвешенные частицы
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                нефтепродукты
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                химические реагенты
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                канцерогенные вещества
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                биологические загрязнения
              </li>
            </ul>
          </div>
          <div className={styles.right40}>
            <Image
              src={'/images/ob_11.png'}
              alt="иконка"
              width={390}
              height={350}
              className={styles.imageRight}
            />
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.left60}>
            <p className={styles.text}>
              Станции выпускаются с производства уже укомплектованные всем
              необходимым оборудованием. <br></br>Сточные воды могут приниматься
              на очистку сразу после монтажа и подключения к инженерным сетям.
            </p>
            <p className={styles.text}>
              Смешанные сточные воды. Степень их загрязнения и вредности может
              быть различной в зависимости от производственного процесса. Для
              очистки сложных сточных вод мы предлагаем три типа станции
              биохимической очистки, в которых используется фирменная
              запатентованная технология.
            </p>
            <p className={styles.text}>
              Технология IBR® (Immobilized Biofilm Reactor) – реактор с
              прикрепленной биопленкой относится к способам очистки сточных вод
              микрофлорой биопленки, прикреплённой к инертному носителю,
              помещённому в реактор. Прикрепленные микроорганизмы обладают
              большей концентрацией биомассы и большей активностью по сравнению
              с системами MBBR и IFAS.
            </p>
          </div>
          <div className={styles.right40}>
            <Image
              src={'/images/ob_12.png'}
              alt="иконка"
              width={390}
              height={220}
              className={styles.imageRight}
            />
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <Image
            src={'/images/ob_13.png'}
            alt="иконка"
            width={500}
            height={390}
            className={styles.imageLeft}
          />
          <div className={styles.wrapper}>
            <h4 className={styles.listTitle}>
              Станции отлично решают проблему очистки сточных вод, для которых
              характерны:
            </h4>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                высокая суточная и сезонная неравномерность поступления
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                колебания концентраций загрязнений в широком диапазоне
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                низко концентрированные сточные воды
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                канцерогенные вещества
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                низкое соотношение БПК5:N в поступающем стоке 3-4:1 и менее
              </li>
            </ul>
            <p className={styles.text}>
              Локальные очистные сооружения на базе станций биохимической
              очистки IBR®-BM Станции IBR®-BM созданы для локальной очистки
              сложных коммунальных сточных вод и стоков с высоким содержанием
              азотных загрязнений ряда отраслей промышленности, например:
              пищевая промышленность; газоперерабатывающая промышленность;
              нефтехимическая промышленность; заводы по производству минеральных
              удобрений.
            </p>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>СИСТЕМЫ ОБОРОТНОГО ВОДОСНАБЖЕНИЯ</h2>
        </div>
        <div style={{ display: 'flex', paddingTop: '2rem' }}>
          <div className={styles.left30}>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_14.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>Нефтехимические заводы</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_15.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4 style={{ minHeight: '50px' }}>Сахарные заводы</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_16.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>Молочные заводы</h4>
            </div>
          </div>
          <div className={styles.middle40}>
            <p className={styles.text}>
              Одна из самых распространенных ошибок предприятий — отсутствие
              должного внимания к балансу водопотребления и водоотведения
              производства в отличие от основного производственного процесса. Из
              затрат на покупку воды, подготовку и очистку складывается цена
              производимого продукта.
            </p>
            <p className={styles.text}>
              При грамотном инженерном подходе можно сократить эти затраты за
              счет организации оптимальной схемы оборотного водоснабжения,
              использования прогрессивных методов очистки, организации локальной
              очистки отдельных потоков с целью выделения специфических
              компонентов, извлечения из сточных вод ценных продуктов для
              последующего использования.
            </p>
            <p className={styles.text}>
              Мы предлагаем не просто решения по очистке промышленных сточных
              вод, а эффективные окупаемые бизнес-решения с учетом особенностей
              производственного процесса.
            </p>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_17.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4 style={{ width: '100%', textAlign: 'center' }}>
                Мясокомбинаты
              </h4>
            </div>
          </div>
          <div className={styles.right30}>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_18.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>Аэропорты</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_19.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>Производства минеральных удобрений</h4>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/ob_20.png'}
                alt="иконка"
                width={250}
                height={160}
              />
              <h4>Рыбоводные хозяйства</h4>
            </div>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>ОПРОСНЫЕ ЛИСТЫ</h2>
        </div>
        <div
          className={styles.inner}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p className={styles.text}>
            Специально разработанные опросные листы предназначены для упрощения
            сбора информации необходимой при проектировании и расчете систем
            очистки воды, включают в себя основные наиболее важные вопросы и
            разбиты на типы оборудования и объектов. По итогам максимально
            заполненного опросного листа формируется необходимая комплектация
            оборудования и можно дать точную цену и сроки на запрашиваемое
            оборудование.
          </p>
          <h4>
            Заполните, пожалуйста все пункты, о которых у Вас есть информация.
            Если предоставленной информации окажется недостаточно, мы свяжемся с
            Вами дополнительно.
          </h4>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.left50}>
            <ul>
              {files.map((file: any) => {
                return (
                  <li className={styles.inner} key={file.name}>
                    <Image
                      src={'/images/icons/ico_opr.png'}
                      alt="иконка"
                      width={27}
                      height={40}
                      className={styles.icon}
                    />
                    <Link
                      legacyBehavior
                      download
                      className={styles.link}
                      href={file.link}
                    >
                      <a className={styles.link} target="_blank">
                        {file.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
              <li className={styles.inner}>
                <Link className={styles.link} href={'/oprlist'}>
                  Другие опросные листы
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.right50}>
            <Image
              src={'/images/ob_21.png'}
              alt="иконка"
              width={550}
              height={360}
              style={{ alignSelf: 'flex-end' }}
            />
          </div>
        </div>

        <div className={styles.menuWrapper}>
          <Link href={'/klin'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="klin"
              size="big"
            >
              Задвижки клиновые
            </MenuItem>
          </Link>
          <Link href={'/pneumo'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="pneumo"
              size="big"
            >
              Пневматика
            </MenuItem>
          </Link>
          <Link href={'/shiber'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="shiber"
              size="big"
            >
              Задвижки шиберные
            </MenuItem>
          </Link>
          <Link href={'/disk'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="disk"
              size="big"
            >
              Затворы дисковые
            </MenuItem>
          </Link>
          <Link href={'/kran'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="kran"
              size="big"
            >
              <span>Краны</span>
              <span>шаровые</span>
            </MenuItem>
          </Link>
          <Link href={'/arma'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="arma"
              size="big"
            >
              Автоматизация арматуры
            </MenuItem>
          </Link>
        </div>
        <div className={styles.gradient}></div>
      </div>
    </>
  );
}

export default withLayout(Water);
