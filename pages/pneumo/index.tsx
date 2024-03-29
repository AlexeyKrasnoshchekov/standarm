import styles from './Pneumo.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { FaChevronRight } from 'react-icons/fa';
import P from '@/components/P/P';
import MenuItem from '@/components/MenuItem/MenuItem';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Pneumo(): JSX.Element {
  const router = useRouter();
  const files = [
    {
      name: 'ОЛ Водопроводные очистные сооружения',
      link: '/oprlist/oprlist8.pdf',
    },
  ];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="ПНЕВМАТИЧЕСКИЕ ПРИВОДЫ" />
        <title>ПНЕВМАТИЧЕСКИЕ ПРИВОДЫ</title>
        <meta
          name="description"
          content="Все очистные сооружения просты в монтаже и обслуживании,
              обеспечивают гарантированно стабильное качество очистки, а также
              высокую степень энергосбережения."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper} style={{ minHeight: '90vh' }}>
        {/* <h2 className={styles.title}>Страница еще в разработке</h2>
        <h4 className={styles.title}>Но мы скоро ее опубликуем</h4> */}
        <div className={styles.innerWrapper2}>
          <div className={styles.left50}>
            <h4 className={styles.listTitle}>ПНЕВМАТИКА</h4>
            <P size="m" className={styles.text}>
              Одним из направлений деятельности нашей компании является
              автоматизация трубопроводной арматуры. Нами накоплен многолетний
              опыт и компетенции в инжиниринге и реализации различных систем
              управления пневматическими приводами арматуры. Требуется ли
              пневматические привод для управления шаровым краном DN15 или
              дисковым поворотным затвором DN 1200 и более – мы готовы подобрать
              оптимальную комбинацию приводов, а также всех приборов
              автоматизации, произвести монтаж, настройку и испытания
              спроектированной нами системы управления, в том числе на арматуре
              заказчика. Изучив основные потребности нашего рынка трубопроводной
              арматуры, мы поддерживаем основные типоразмеры приводов в наличии
              на нашем складе.
            </P>
            <P size="m" className={styles.text} style={{ marginTop: '1rem' }}>
              Для получения технико-коммерческого предложения Вы можете{' '}
              <Link href={'/contact'} className={styles.link}>
                связаться
              </Link>{' '}
              с нами и мы направим форму с данными необходимыми для подбора
              приводов.
            </P>
          </div>
          <div className={styles.right50}>
            <Image
              src={'/images/pneumo.webp'}
              alt="пневмоприводы"
              layout="fill"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>РЕЕЧНЫЙ ПРИВОД СЕРИИ СТМ ПП</h2>
        </div>
        <div className={styles.inner}>
          <div className={styles.left50}>
            <div className={styles.textInnerWrapper}>
              <p className={styles.text}>
                Пневматические приводы серии СТМ ПП с реечной передачей
                разработаны и производятся с учетом накопленного компанией
                &quot;Стандарм&quot; опыта автоматизации запорной и регулирующей
                трубопроводной арматуры. Реечные пневмоприводы, благодаря
                качественным материалам и современным технологиям производства
                отличаются высокой надежностью и широкими эксплуатационными
                характеристиками.
              </p>
            </div>
          </div>
          <div className={styles.right50}>
            <div className={styles.image}>
              <Image
                src={'/images/pneumoprivod.webp'}
                alt="пневмопривод"
                fill
              />
            </div>
          </div>
        </div>
        <h4 className={styles.listTitle}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h4>
        <div className={styles.flex}>
          <div className={styles.left33}>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Реечная передача с двумя симметричными поршнями имеет компактную
                конструкцию и возможность смены направления вращения простой их
                перестановкой.
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Высококачественный цилиндр из экструдированного алюминия
                изготовлен с применением анодирования, создающего дополнительную
                защиту от коррозии и обеспечивающего низкий коэффициент трения.
                Для особых условий эксплуатации возможны дополнительные защитные
                покрытия.
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Все приводы одностороннего и двустороннего действия имеют
                одинаковые цилиндры и крышки, легко заменяемые при смене пружин
                или направления действия привода.
              </li>
            </ul>
          </div>

          <div className={styles.left33}>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Модульные, предварительно нагруженные пружины, обеспечивают
                широкий диапазон работы и высокую безопасность.
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Визуальный индикатор даёт возможность легкого определения
                положения запорного или рабочего органа арматуры во всём
                диапазоне, а настройка индикатора выполняется без разборки
                привода.
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Соединение подачи воздуха соответствует стандарту NAMUR, что
                позволяет осуществлять прямой монтаж электромагнитного клапана.
              </li>

              <li>
                <span>{<FaChevronRight />}</span>
                Модульные, предварительно нагруженные пружины, обеспечивают
                широкий диапазон работы и высокую безопасность.
              </li>
            </ul>
          </div>
          <div className={styles.left33}>
            <ul className={styles.list}>
              <li>
                <span>{<FaChevronRight />}</span>
                Все крепёжные детали выполнены из нержавеющей стали, что
                обеспечивает защиту от коррозии на весь срок эксплуатации.
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Поршневая рейка и шестерня приводного вала имеют точное
                позиционирование и отсутствие люфта.
              </li>
              <li>
                <span>{<FaChevronRight />}</span>
                Строгое соответствие действующим российским и современным
                международным стандартам гарантирует полную взаимозаменяемость и
                быструю установку различных пневматических приборов КИПиА.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>ПРИВОДЫ С КУЛИСНЫМ МЕХАНИЗМОМ</h2>
        </div>
        <div className={styles.inner}>
          <div className={styles.left50}>
            <div className={styles.textWrapper2}>
              <span>{<FaChevronRight />}</span>
              Приводы с кулисным механизмом имеют модульную конструкцию, что
              обеспечивает универсальность и взаимозаменяемость.
            </div>
            <div className={styles.textWrapper2}>
              <span>{<FaChevronRight />}</span>
              Дополнительные модули включают: привод, блок с кулисной передачей,
              пневматический модуль, поршневой модуль и ручное управление.
              Замена или техобслуживание этих модулей не требуют отсоединения
              привода от арматуры. Это позволяет сокращать время обслуживания
              приводов.
            </div>
            <div className={styles.textWrapper2}>
              <span>{<FaChevronRight />}</span>
              Любой модуль можно использовать как запасную часть для замены или
              ремонта.
            </div>
            <div className={styles.textWrapper2}>
              <span>{<FaChevronRight />}</span>
              Приводы с кулисным механизмом имеют модульную конструкцию, что
              обеспечивает универсальность и взаимозаменяемость.
            </div>
            <div className={styles.textWrapper2}>
              <span>{<FaChevronRight />}</span>
              Дополнительные модули включают: привод, блок с кулисной передачей,
              пневматический модуль, поршневой модуль и ручное управление.
              Замена или техобслуживание этих модулей не требуют отсоединения
              привода от арматуры. Это позволяет сокращать время обслуживания
              приводов.
            </div>
            <div className={styles.textWrapper2}>
              <span>{<FaChevronRight />}</span>
              Любой модуль можно использовать как запасную часть для замены или
              ремонта.
            </div>
          </div>
          <div className={styles.right50height}>
            <div className={styles.right50heightInner} style={{height: '50%'}}>
              <h4 className={styles.listTitle}>
                <span className={styles.icon}>
                  <HiChevronDoubleDown />
                  <HiChevronDoubleDown className={styles.chevron} />
                </span>
                ПРИВОД С ПРУЖИННЫМ ВОЗВРАТОМ
              </h4>
              <div className={styles.image2}>
                <Image
                  src={'/images/pneumo1.webp'}
                  alt="пневмопривод"
                  height={200}
                  width={400}
                />
              </div>
            </div>
            <div className={styles.right50heightInner} style={{height: '50%'}}>
              <h4 className={styles.listTitle}>
                <span className={styles.icon}>
                  <HiChevronDoubleDown />
                  <HiChevronDoubleDown className={styles.chevron} />
                </span>
                ПРИВОД ДВОЙНОГО ДЕЙСТВИЯ
              </h4>
              <div className={styles.image2}>
                <Image
                  src={'/images/pneumo2.webp'}
                  alt="пневмопривод"
                  height={200}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.titleWrapper}>
          <h2>ЭФФЕКТИВНЫЕ РЕШЕНИЯ ДЛЯ АВТОМАТИЗАЦИИ АРМАТУРЫ</h2>
        </div>
        <div className={styles.inner}>
          <div className={styles.left50}>
            <p
              className={styles.text}
              style={{ height: '50%', display: 'flex', alignItems: 'center' }}
            >
              Обладая многолетним опытом автоматизации арматуры, собственными
              службами расчета и сервиса, компания «СТАНДАРМ» разрабатывает и
              поставляет надежные и безопасные решения в соответствии с
              требованиями заказчика. Широкий опыт участия в самых сложных
              проектах позволяет проектировать и реализовывать различные системы
              управления приводами.
            </p>
            <p
              className={styles.text}
              style={{ height: '50%', display: 'flex', alignItems: 'center' }}
            >
              Наша компания осуществляет расчет, подбор, монтаж и настройку
              приборов управления пневматическими приводами, а также монтаж
              готовых систем управления, включающих пневматический привод на
              арматуру. Для управления используются только качественные
              компоненты от лучших производителей.
            </p>
          </div>
          <div className={styles.right50height}>
            <div className={styles.right50heightInner} style={{height: '50%'}}>
              {/* <h4 className={styles.listTitle}>
                <span className={styles.icon}>
                  <HiChevronDoubleDown />
                  <HiChevronDoubleDown className={styles.chevron} />
                </span>
                ПРИВОД С ПРУЖИННЫМ ВОЗВРАТОМ
              </h4> */}
              <div className={styles.image2}>
                <Image
                  src={'/images/pneumo31.png'}
                  alt="пневмопривод"
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div
              className={styles.right50heightInner}
              style={{
                width: '300px',
                height: '50%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
              }}
            >
              {/* <h4 className={styles.listTitle}>
                <span className={styles.icon}>
                  <HiChevronDoubleDown />
                  <HiChevronDoubleDown className={styles.chevron} />
                </span>
                ПРИВОД ДВОЙНОГО ДЕЙСТВИЯ
              </h4> */}
              <div
                className={styles.image2}
                // style={{
                //   outline: '1px solid red',
                //   marginRight: '50px',
                //   display: 'flex',
                //   justifyContent: 'center',
                // }}
              >
                <Image
                  src={'/images/pneumo32.png'}
                  alt="пневмопривод"
                  height={300}
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.inner} style={{ padding: '2rem 10%' }}>
          <p className={styles.text}>
            Обладая многолетним опытом автоматизации арматуры, собственными
            службами расчета и сервиса, компания «СТАНДАРМ» разрабатывает и
            поставляет надежные и безопасные решения в соответствии с
            требованиями заказчика. Широкий опыт участия в самых сложных
            проектах позволяет проектировать и реализовывать различные системы
            управления приводами.
          </p>
        </div>
        <div className={styles.imageCenter}>
          <div className={styles.image4}>
            <Image
              src={'/images/pneumo3.webp'}
              alt="приборы управления пневматическими приводами"
              fill
            />
          </div>
        </div>
        <div className={styles.inner} style={{ padding: '2rem 10%' }}>
          <p className={styles.text}>
            Наша компания осуществляет расчет, подбор, монтаж и настройку
            приборов управления пневматическими приводами, а также монтаж
            готовых систем управления, включающих пневматический привод на
            арматуру. Для управления используются только качественные компоненты
            от лучших производителей.
          </p>
        </div> */}
        {/* <div className={styles.titleWrapper}>
          <h2>СТАНДАРТНЫЕ СИСТЕМЫ УПРАВЛЕНИЯ ПРИВОДАМИ</h2>
        </div>
        <div style={{ padding: '0 10%' }}>
          <div className={styles.innerWrapper3}>
            <div className={styles.left50}>
              <div className={styles.title2}>РЕГУЛЯТОРЫ ДАВЛЕНИЯ</div>
              <p>
                Снижают и поддерживают давление воздуха (либо другой среды по
                требованию), поступающего из распределительной сети, на
                постоянном уровне. Материал корпуса: пластик, алюминий,
                нержавеющая сталь Климатическое исполнение: стандартное,
                низкотемпературное
              </p>
            </div>
            <div className={styles.right50center}>
              <div className={styles.image3}>
                <Image
                  src={'/images/regulator.webp'}
                  alt="РЕГУЛЯТОР ДАВЛЕНИЯ"
                  fill

                  // style={{width: '50%'}}
                  // width={360}
                  // height={160}
                />
              </div>
            </div>
          </div>
          <div className={styles.innerWrapper3}>
            <div className={styles.left50}>
              <div className={styles.title2}>ПОЗИЦИОНЕРЫ</div>
              <p>
                Обеспечивают заданное положение арматуры в зависимости от
                величины управляющего сигнала. Материал корпуса: пластик,
                алюминий, нержавеющая сталь Климатическое исполнение:
                стандартное, низкотемпературное
              </p>
            </div>
            <div className={styles.right50center}>
              <div className={styles.image2}>
                <Image
                  src={'/images/positioner.webp'}
                  alt="ПОЗИЦИОНЕР"
                  fill
                  // width={480}
                  // height={300}
                />
              </div>
            </div>
          </div>
          <div className={styles.innerWrapper3}>
            <div className={styles.left50}>
              <div className={styles.title2}>
                ЭЛЕКТРОМАГНИТНЫЕ (СОЛЕНОИДНЫЕ) КЛАПАНЫ
              </div>
              <p>
                Преобразовывают электрические дискретные сигналы в дискретные
                пневматические. Исполнение: 3/2-, 5/2, 5/3 или 6/2-х ходовые.
                Климатическое исполнение: стандартное, низкотемпературное
              </p>
            </div>
            <div className={styles.right50center}>
              <div className={styles.image2}>
                <Image
                  src={'/images/solenoid.webp'}
                  alt="СОЛЕНОИДНЫЙ КЛАПАН"
                  fill
                  // width={520}
                  // height={320}
                />
              </div>
            </div>
          </div>
          <div className={styles.innerWrapper3}>
            <div className={styles.left50}>
              <div className={styles.title2}>
                СИГНАЛИЗАТОРЫ КОНЕЧНЫХ ПОЛОЖЕНИЙ
              </div>
              <p>
                Предназначены для выработки дискретного сигнала при изменении
                параметров выше или ниже заданного значения. Исполнение:
                индуктивные и механические Климатическое исполнение:
                стандартное, низкотемпературное
              </p>
            </div>
            <div className={styles.right50center}>
              <div className={styles.image2}>
                <Image
                  src={'/images/signalizator.webp'}
                  alt="СИГНАЛИЗАТОР КОНЕЧНЫХ ПОЛОЖЕНИЙ"
                  fill
                  // width={380}
                  // height={360}
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.titleWrapper}>
          <h2>ОПРОСНЫЕ ЛИСТЫ</h2>
        </div>
        <div
          className={styles.inner}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem 10%',
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
        </div> */}
        {/* <div className={styles.innerWrapper} style={{ padding: '0 10%' }}>
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
          <div className={styles.right50center}>
            <div className={styles.image2}>
              <Image
                src={'/images/ob_21.png'}
                alt="опросный лист"
                // fill
                width={550}
                height={360}
                // style={{ alignSelf: 'flex-end' }}
              />
            </div>
          </div>
        </div> */}

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
          <Link href={'/water'}>
            <MenuItem
              className={styles.menuItem}
              appearance="primary"
              icon="water"
              size="big"
            >
              Технологии воды
            </MenuItem>
          </Link>
          {router.pathname !== '/pneumo' && (
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
          )}
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

export default withLayout(Pneumo);
