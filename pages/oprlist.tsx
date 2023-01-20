import styles from '../styles/Oprlist.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

function Oprlist(): JSX.Element {
  const files = [
    { name: 'Опросный лист Задвижки Тип СТМ З', link: '/oprlist/oprlist1.pdf' },
    {
      name: 'Опросный лист Затворы дисковые Тип СТМ Д',
      link: '/oprlist/oprlist2.pdf',
    },
    {
      name: 'Опросный лист Клапаны запорные и регулирующие Тип СТМ КЗ, Тип СТМ КР, Тип СТМ КЗР',
      link: '/oprlist/oprlist3.pdf',
    },
    {
      name: 'Опросный лист Клапаны обратные Тип СТМ О',
      link: '/oprlist/oprlist4.pdf',
    },
    {
      name: 'Опросный лист Клапаны предохранительные Тип СТМ П',
      link: '/oprlist/oprlist5.pdf',
    },
    {
      name: 'Опросный лист Краны шаровые Тип СТМ Ш',
      link: '/oprlist/oprlist6.pdf',
    },
    {
      name: 'Опросный лист Регуляторы прямого действия Тип СТМ РПД',
      link: '/oprlist/oprlist7.pdf',
    },
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
    <div className={styles.wrapper}>
      <h2 className={styles.title}>ОПРОСНЫЕ ЛИСТЫ</h2>
      <ul className={styles.cardWrapper}>
        {files.map((file: any) => {
          return (
            <li className={styles.inner} key={file.name}>
              <Image
                src={'/images/icons/ico_opr.png'}
                alt="иконка"
                width={27}
                height={40}
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
      </ul>
      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Oprlist);
