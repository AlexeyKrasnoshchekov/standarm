import styles from '../styles/Contact.module.css';
import { withLayout } from '@/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contact(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>НАШИ СОТРУДНИКИ РЯДОМ С ВАМИ</h2>
      <Image
        src={'/images/map.jpg'}
        alt="карта с филиалами"
        width={900}
        height={470}
      />
      <div className={styles.addressWrapper}>
        <h4>ООО «СТАНДАРМ»</h4>
        <p>Адрес: 115114, г. Москва, ул. Летниковская, д.5, пом.l, ком.43</p>
        <p>Телефон: 8(495) 775-00-35</p>
        <p>Факс: 8(495) 775-00-39</p>
        <p>
          E-mail:{' '}
          <a href="mailto:info@standarm.ru" className={styles.email}>
            info@standarm.ru
          </a>
        </p>
      </div>
      <div className={styles.mapWrapper}>
        <YMaps>
          <Map
            width="900px"
            height="470px"
            defaultState={{ center: [55.727658, 37.645294], zoom: 16 }}
          >
            <Placemark
              // key={n}
              geometry={[55.727658, 37.645294]}
              options={{
                iconLayout: 'default#image',
                iconImageSize: [50, 50],
                balloonContent: 'ООО Стандарм',
              }}
            />
          </Map>
        </YMaps>
      </div>

      <div className={styles.gradient}></div>
    </div>
  );
}

export default withLayout(Contact);
