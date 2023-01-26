import styles from '../styles/Service.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import { HiChevronDoubleDown } from 'react-icons/hi';

function Service(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Сервис и поддержка на протяжении всей жизни продукта
      </h2>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <Image
            src={'/images/service/serv_2.jpg'}
            alt="лого стандарма"
            width={310}
            height={390}
            style={{ objectFit: 'contain' }}
          />
          <div className={styles.inner}>
            <span className={styles.icon}>
              <HiChevronDoubleDown />
              <HiChevronDoubleDown className={styles.chevron} />
            </span>
            <div className={styles.textWrapper}>
              <h3 className={styles.heading}>КВАЛИФИЦИРОВАННЫЙ ПЕРСОНАЛ</h3>
              <p className={styles.text}>
                Наш персонал регулярно подтверждает свой профессионализм во всех
                направлениях работы с арматурой и средствами автоматизации,
                имеет необходимые сертификаты и допуски на ответственные и
                опасные производственные объекты. Мы будем рады вашему
                приглашению к совместной экспертной оценке производственных
                задач, эксплуатационных нужд , проектных решений.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card} style={{ justifySelf: 'center' }}>
          <Image
            src={'/images/service/serv_3.jpg'}
            alt="лого стандарма"
            width={310}
            height={390}
            style={{ objectFit: 'contain' }}
          />
          <div className={styles.inner}>
            <span className={styles.icon}>
              <HiChevronDoubleDown />
              <HiChevronDoubleDown className={styles.chevron} />
            </span>
            <div className={styles.textWrapper}>
              <h3 className={styles.heading}>ОТВЕТСТВЕННЫЙ ПОДХОД</h3>
              <p className={styles.text}>
                Мы по опыту знаем, как важно быстрое решение вопроса в реальных
                условиях работающего технологического процесса. Наши специалисты
                поддержки внимательно относятся к каждому запросу и своевременно
                предоставляют компетентный ответ.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card} style={{ justifySelf: 'end' }}>
          <Image
            src={'/images/service/serv_4.jpg'}
            alt="лого стандарма"
            width={310}
            height={390}
            style={{ objectFit: 'contain' }}
          />
          <div className={styles.inner}>
            <span className={styles.icon}>
              <HiChevronDoubleDown />
              <HiChevronDoubleDown className={styles.chevron} />
            </span>
            <div className={styles.textWrapper}>
              <h3 className={styles.heading}>ДОВЕРИЕ</h3>
              <p className={styles.text}>
                Доверие партнера для нас главная ценность. Именно поэтому мы
                оказываем поддержку на всех этапах работы с нашим продуктом - от
                проектирования до постгарантийного обслуживания спустя многие
                годы эксплуатации.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Service);
