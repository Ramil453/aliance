'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import styles from './IndustriesBlock.module.css';
import ActionButton from './ActionButton';

const industries = [
  {
    id: 1,
    title: 'Медицина',
  },
  {
    id: 2,
    title: 'Образование',
  },
  {
    id: 3,
    title: 'Охрана жилых комплексов',
  },
  {
    id: 4,
    title: 'Промышленность',
  },
  {
    id: 5,
    title: 'Торговля',
  },
  {
    id: 6,
    title: 'Строительство',
  },
  {
    id: 7,
    title: 'Сельское хозяйство',
  },
];

export default function IndustriesBlock() {
  return (
    <div className={styles.industriesBlock}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.titleText}>
            <div className={styles.titleLine}>ЭФФЕКТИВНЫЕ ОХРАННЫЕ РЕШЕНИЯ,</div>
            <div className={styles.titleLine}>АДАПТИРОВАННЫЕ ПОД СПЕЦИФИКУ</div>
            <div className={styles.titleLine}>ВАШЕЙ ОТРАСЛИ</div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.none}>

          <ActionButton>Обсудить проект</ActionButton>
          </div>
 
          <div className={styles.scrollContainer}>
            <Swiper
              modules={[Mousewheel]}
              direction="vertical"
              spaceBetween={20}
              loop={true}
              slidesPerView={3.5}
              mousewheel={true}
              className={styles.verticalSwiper}
            >
              {industries.map((industry) => (
                <SwiperSlide key={industry.id}>
                  <div className={styles.industryItem}>{industry.title}</div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.gradientTop}></div>
            <div className={styles.gradientBottom}></div>
          </div>
          <Image src="/slide.png" alt="slide" width={731} height={205} className={styles.slide} />

        </div>
      </div>
    </div>
  );
}

